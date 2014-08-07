var ObjectPathEvaluator = require('./base'),
    OPL = require('opl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class CachedObjectPathEvaluator
 * @extends ObjectPathEvaluator
 * @param {Object} opts
 * @param {ObjectPathEvaluator} opts.cache
 * @param {ObjectPathEvaluator} opts.fallback
 */
function CachedObjectPathEvaluator (opts) {
    CachedObjectPathEvaluator.superclass.call(this);
    this._cache = opts.cache;
    this._fallback = opts.fallback;
}

module.exports = ObjectPathEvaluator.extend(CachedObjectPathEvaluator,
    /** @lends CachedObjectPathEvaluator# */{
    destroy: function () {
        CachedObjectPathEvaluator.superproto.destroy.call(this);

        this._cache.destroy();
        this._fallback.destroy();

        _.extend(this, {
            _cache: null,
            _fallback: null
        });
    },
    /**
     * @property {ObjectPathEvaluator}
     * @private
     */
    _cache: null,
    /**
     * @property {ObjectPathEvaluator}
     * @private
     */
    _fallback: null,
    /**
     * @private
     * @param {...module:OPL~Query} path
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _get: function () {
        var cache = this._cache,
            fallback = this._fallback;

        return cache.get.apply(cache, _.rest(arguments, 0)).
            selectMany(function (pv) {
                return !pv.value || OPL.pathValueIsError(pv) ?
                    fallback.get(pv.path).
                        selectMany(cache.set.bind(cache))
                    :
                    Rx.Observable.returnValue(pv);
            });
    },
    /**
     * @private
     * @param {...module:OPL~PathValue} pv
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _set: function () {
        var cache = this._cache,
            fallback = this._fallback;

        return fallback.set.apply(fallback, _.rest(arguments, 0)).
            selectMany(function (pv) {
                return pv.value && !OPL.pathValueIsError(pv) ?
                    cache.set(pv) :
                    Rx.Observable.returnValue(pv);
            });
    },
    /**
     * @private
     * @param {...module:OPL~Query} path
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _del: function () {
        var cache = this._cache,
            fallback = this._fallback;

        return fallback.del.apply(fallback, _.rest(arguments, 0)).
            selectMany(function (pv) {
                return !OPL.pathValueIsError(pv) ?
                    cache.del(pv) :
                    Rx.Observable.returnValue(pv);
            });
    }
});
