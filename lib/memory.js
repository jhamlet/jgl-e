var JGLEvaluator = require('./base'),
    JGL = require('jgl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class MemoryJGLEvaluator
 * @extends JGLEvaluator
 * @param {Object} [graph={}]
 * @param {Object} [path=[]]
 */
function MemoryJGLEvaluator (graph, path) {
    MemoryJGLEvaluator.superclass.call(this, path);
    this.graph = graph || {};
}

module.exports = JGLEvaluator.extend(MemoryJGLEvaluator,
    /** @lends MemoryJGLEvaluator# */{
    /**
     * @property {Object}
     * @default {}
     */
    graph: null,
    /**
     */
    destroy: function () {
        MemoryJGLEvaluator.superproto.destroy.call(this);
        _.extend(this, {
            graph: null
        });
    },
    /**
     * @private
     * @param {module:JGLEvaluator~Query} query
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _get: function (query) {
        var graph = this.graph;

        return Rx.Observable.defer(function () {
            return Rx.Observable.
                fromArray(JGL.get(graph, query));
        });
    },
    /**
     * @private
     * @param {module:JGLEvaluator~PathValue} pv
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _set: function (pv) {
        var graph = this.graph;

        return Rx.Observable.
            defer(function () {
                return Rx.Observable.
                    fromArray(JGL.set(graph, pv));
            });
    },
    /**
     * @private
     * @param {module:JGLEvaluator~Query} query
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _del: function (path) {
        var graph = this.graph;

        return Rx.Observable.
            defer(function () {
                return Rx.Observable.
                    fromArray(JGL.del(graph, path));
            });
    }
});
