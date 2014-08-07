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
    /**
     * @member MemoryObjectPathEvaluator#doc
     * @type {Object}
     * @default {}
     */
    this.doc = doc || {};
}

module.exports = ObjectPathEvaluator.extend(MemoryObjectPathEvaluator,
    /** @lends MemoryObjectPathEvaluator# */{
    destroy: function () {
        MemoryObjectPathEvaluator.superproto.destroy.call(this);
        _.extend(this, {
            doc: null
        });
    },
    /**
     * @private
     * @param {...module:OPL~Query} path
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _get: function () {
        var args = [this.doc].concat(_.rest(arguments, 0));

        return Rx.Observable.defer(function () {
            return Rx.Observable.fromArray(OPL.get.apply(null, args));
        });
    },
    /**
     * @private
     * @param {...module:OPL~PathValue} pv
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _set: function () {
        var args = [this.doc].concat(_.rest(arguments, 0));

        return Rx.Observable.defer(function () {
            return Rx.Observable.fromArray(OPL.set.apply(null, args));
        });
    },
    /**
     * @private
     * @param {...module:OPL~Query} path
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _del: function () {
        var args = [this.doc].concat(_.rest(arguments, 0));

        return Rx.Observable.defer(function () {
            return Rx.Observable.fromArray(OPL.del.apply(null, args));
        });
    }
});
