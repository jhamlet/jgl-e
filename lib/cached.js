var JGLEvaluator = require('./base'),
    JGL = require('jgl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class JGLCachedEvaluator
 * @extends JGLEvaluator
 * @param {Object} opts
 * @param {JGLEvaluator} opts.cache
 * @param {JGLEvaluator} opts.proxy
 */
function JGLCachedEvaluator (opts) {
    JGLCachedEvaluator.superclass.call(this);
    this._cache = opts.cache;
    this._proxy = opts.proxy;
}

module.exports = JGLEvaluator.extend(JGLCachedEvaluator,
    /** @lends JGLCachedEvaluator# */{
    bind: function (path) {
        var copy = JGLCachedEvaluator.superproto.bind.call(this, path);
        copy._cache = this._cache.bind(path);
        copy._proxy = this._proxy.bind(path);
        return copy;
    },
    destroy: function () {
        JGLCachedEvaluator.superproto.destroy.call(this);

        this._cache.destroy();
        this._proxy.destroy();

        _.extend(this, {
            _cache: null,
            _proxy: null
        });
    },
    /**
     * @property {JGLEvaluator}
     * @private
     */
    _cache: null,
    /**
     * @property {JGLEvaluator}
     * @private
     */
    _proxy: null,
    /**
     * @private
     * @param {module:JGL~Query} path
     * @returns {Rx.Observable<module:JGL~PathValue>}
     */
    _get: function (path) {
        var cache = this._cache,
            proxy = this._proxy;

        return cache.get(path).
            selectMany(function (pv) {
                return pv.value === undefined || JGL.pathValueIsError(pv) ?
                    proxy.get(pv.path).
                        selectMany(function (pv) {
                            return cache.set(pv);
                        })
                    :
                    Rx.Observable.returnValue(pv);
            });
    },
    /**
     * @private
     * @param {module:JGL~PathValue} pv
     * @returns {Rx.Observable<module:JGL~PathValue>}
     */
    _set: function (pv) {
        var cache = this._cache,
            proxy = this._proxy;

        return proxy.set(pv).
            selectMany(function (pv) {
                return pv.value && !JGL.pathValueIsError(pv) ?
                    cache.set(pv) :
                    Rx.Observable.returnValue(pv);
            });
    },
    /**
     * @private
     * @param {module:JGL~Query} path
     * @returns {Rx.Observable<module:JGL~PathValue>}
     */
    _del: function (path) {
        var cache = this._cache,
            proxy = this._proxy;

        return proxy.del(path).
            selectMany(function (pv) {
                return !JGL.pathValueIsError(pv) ?
                    cache.del(pv.path) :
                    Rx.Observable.returnValue(pv);
            });
    }
});
