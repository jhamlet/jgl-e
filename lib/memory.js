var JGLEvaluator = require('./base'),
    JGL = require('jgl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class JGLMemoryEvaluator
 * @extends JGLEvaluator
 * @param {Object} [graph={}]
 */
function JGLMemoryEvaluator (graph) {
    JGLMemoryEvaluator.superclass.call(this);
    this.graph = graph || {};
}

module.exports = JGLEvaluator.extend(JGLMemoryEvaluator,
    /** @lends JGLMemoryEvaluator# */{
    /**
     * @property {Object}
     * @default {}
     */
    graph: null,
    /**
     */
    destroy: function () {
        JGLMemoryEvaluator.superproto.destroy.call(this);
        _.extend(this, {
            graph: null
        });
    },
    /**
     * @private
     * @param {module:JGL~Query} query
     * @returns {Rx.Observable<module:JGL~PathValue>}
     */
    _get: function (query) {
        var graph = this.graph;

        return Rx.Observable.
            defer(function () {
                return Rx.Observable.fromArray(JGL.get(graph, query));
            });
    },
    /**
     * @private
     * @param {module:JGL~PathValue} pv
     * @returns {Rx.Observable<module:JGL~PathValue>}
     */
    _set: function (pv) {
        var graph = this.graph;

        return Rx.Observable.
            defer(function () {
                return Rx.Observable.fromArray(JGL.set(graph, pv));
            });
    },
    /**
     * @private
     * @param {module:JGL~Query} path
     * @returns {Rx.Observable<module:JGL~PathValue>}
     */
    _del: function (path) {
        var graph = this.graph;

        return Rx.Observable.
            defer(function () {
                return Rx.Observable.fromArray(JGL.del(graph, path));
            });
    }
});
