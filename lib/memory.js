var BaseEvaluator = require('./base'),
    OPE = require('opl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class module:OPE.Memory
 * @alias MemoryObjectPathEvaluator
 * @extends module:OPE.Base
 * @param {Object} [doc={}]
 */
function MemoryObjectPathEvaluator (doc) {
    MemoryObjectPathEvaluator.superclass.call(this);
    /**
     * @member module:OPE.Memory#doc
     * @type {Object}
     * @default {}
     */
    this.doc = doc || {};
}

module.exports = BaseEvaluator.extend(MemoryObjectPathEvaluator,
    /** @lends MemoryObjectPathEvaluator# */{
    /**
     * @private
     * @param {...module:OPE~Query} path
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    _get: function () {
        var args = [this.doc].concat(_.rest(arguments, 0));

        return Rx.Observable.defer(function () {
            return Rx.Observable.fromArray(OPE.get.apply(null, args));
        });
    },
    /**
     * @private
     * @param {...module:OPE~PathValue} pv
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    _set: function () {
        var args = [this.doc].concat(_.rest(arguments, 0));

        return Rx.Observable.defer(function () {
            return Rx.Observable.fromArray(OPE.set.apply(null, args));
        });
    },
    /**
     * @private
     * @param {...module:OPE~Query} path
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    _del: function () {
        var args = [this.doc].concat(_.rest(arguments, 0));

        return Rx.Observable.defer(function () {
            return Rx.Observable.fromArray(OPE.del.apply(null, args));
        });
    }
});
