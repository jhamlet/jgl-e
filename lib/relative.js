var ObjectPathEvaluator = require('./cached'),
    OPL = require('opl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class RelativeObjectPathEvaluator
 * @extends ObjectPathEvaluator
 * @param {Object} proxy
 */
function RelativeObjectPathEvaluator (proxy) {
    RelativeObjectPathEvaluator.superclass.call(this);

    this._proxy = proxy;
}

module.exports = ObjectPathEvaluator.extend(RelativeObjectPathEvaluator,
    /** @lends RelativeObjectPathEvaluator# */{
    /**
     * @property {ObjectPathEvaluator}
     * @private
     */
    _proxy: null,
    /**
     * @private
     * @param {module:OPL~Query} path
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _get: function (query) {
        var root = this.path,
            proxy = this._proxy,
            cache = {};
        // Expand the root query
        OPL.explode(root).
            forEach(function (rootPath) {
                // Create a single value-root for each root-path
                var rootValue = {};
                // explode the given query
                return OPL.explode(query).
                    forEach(function (path) {
                        // for each full path assign it as a key to our cache, and
                        // assign it the shared root value
                        cache[
                            JSON.stringify(rootPath.concat(path))
                        ] = rootValue;
                    });
            });
        // Now, while making the returned path-values relative, we can use the cached
        // root-value object based on the returned path
        return proxy.get(query).
            selectMany(function (pv) {
                var path = pv.path,
                    value = pv.value,
                    relpath = OPL.relative(root, path),
                    values = cache[JSON.stringify(path)];

                if (!values) {
                    // A reference outside our original query
                    return Rx.Observable.empty();
                }

                if (typeof value === 'undefined' || OPL.valueIsError(value)) {
                    // A del operation, an undefined value, or an error
                    // just forward the pv on
                    return Rx.Observable.returnValue({ path: relpath, value: value });
                }
                // set the value on our root-value object and return the resulting
                // path-value with it's value property pointing at the root-value
                return OPL.
                    set(values, { path: relpath, value: value }).
                    select(function (pv) {
                        pv.value = values;
                        return pv;
                    });
            });
    },
    /**
     * @private
     * @param {...module:OPL~PathValue} pv
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _set: function () {
        return Rx.Observable.
            fromArray(_.rest(arguments, 0)).
            selectMany(this._makeRelative.bind(this, 'set'));
    },
    /**
     * @private
     * @param {...module:OPL~Query} path
     * @returns {Rx.Observable<module:OPL~PathValue>}
     */
    _del: function () {
        return Rx.Observable.
            fromArray(_.rest(arguments, 0)).
            selectMany(this._makeRelative.bind(this, 'del'));
    },
    /**
     * @private
     * @param {String} type
     * @param {module:OPL~Query} query
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    _makeRelative: function (type, query) {
        var root = this.path,
            proxy = this._proxy,
            values = {};

        return proxy[type](query).
            selectMany(function (pv) {
                var path = pv.path,
                    value = pv.value,
                    relPath = OPL.relative(root, path),
                    ret;

                if (relPath.length > path.length - root.length) {
                    // A reference path outside our relative area
                    return Rx.Observable.empty();
                }

                ret = { path: relPath };

                if (!value || !relPath.length) {
                    // A non-op or our relative-root
                    ret.value = values;
                }

                if (OPL.valueIsError(value)) {
                    ret.value = value;
                }

                return ret.value ?
                    Rx.Observable.returnValue(ret) :
                    OPL.
                        set(values, { path: relPath, value: value }).
                        select(function (pv) {
                            pv.value = values;
                            return pv;
                        });
            });
    }
});
