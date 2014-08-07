var ObjectPathEvaluator = require('./base'),
    OPL = require('opl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class MemoryObjectPathEvaluator
 * @extends ObjectPathEvaluator
 * @param {Object} [doc={}]
 */
function MemoryObjectPathEvaluator (doc) {
    MemoryObjectPathEvaluator.superclass.call(this);
    this.doc = doc || {};
}

module.exports = ObjectPathEvaluator.extend(MemoryObjectPathEvaluator,
    /** @lends MemoryObjectPathEvaluator# */{
    /**
     * @property {Object}
     * @default {}
     */
    doc: null,
    /**
     */
    destroy: function () {
        MemoryObjectPathEvaluator.superproto.destroy.call(this);
        _.extend(this, {
            doc: null
        });
    },
    /**
     * @private
     * @param {module:OPL~Query} path
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _get: function (path) {
        var doc = this.doc;

        return Rx.Observable.
            defer(function () {
                return Rx.Observable.fromArray(OPL.get(doc, path));
            });
    },
    /**
     * @private
     * @param {module:OPL~PathValue} pv
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _set: function (pv) {
        var doc = this.doc;

        return Rx.Observable.
            defer(function () {
                return Rx.Observable.fromArray(OPL.set(doc, pv));
            });
    },
    /**
     * @private
     * @param {module:OPL~Query} path
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _del: function (path) {
        var doc = this.doc;

        return Rx.Observable.
            defer(function () {
                return Rx.Observable.fromArray(OPL.del(doc, path));
            });
    }
});
