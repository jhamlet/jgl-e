var JGLEvaluator = require('./cached'),
    JGL = require('jgl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class JGLRelativeEvaluator
 * @extends JGLEvaluator
 * @param {Object} proxy
 */
function JGLRelativeEvaluator (proxy) {
    JGLRelativeEvaluator.superclass.call(this);

    this._proxy = proxy;
}

module.exports = JGLEvaluator.extend(JGLRelativeEvaluator,
    /** @lends JGLRelativeEvaluator# */{
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
    _get: function (query) {
        var root = this.path,
            proxy = this._proxy,
            cache = {};
        // Expand the root query
        JGL.explode(root).
            forEach(function (rootPath) {
                // Create a single value-root for each root-path
                var rootValue = {};
                // explode the given query
                return JGL.explode(query).
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
                    relpath = JGL.relative(root, path),
                    values = cache[JSON.stringify(path)];

                if (!values) {
                    // A reference outside our original query
                    return Rx.Observable.empty();
                }

                if (typeof value === 'undefined' || JGL.valueIsError(value)) {
                    // A del operation, an undefined value, or an error
                    // just forward the pv on
                    return Rx.Observable.returnValue({ path: relpath, value: value });
                }
                // set the value on our root-value object and return the resulting
                // path-value with it's value property pointing at the root-value
                return JGL.
                    set(values, { path: relpath, value: value }).
                    select(function (pv) {
                        pv.value = values;
                        return pv;
                    });
            });
    },
    /**
     * @private
     * @param {...module:JGL~PathValue} pv
     * @returns {Rx.Observable<module:JGL~PathValue>}
     */
    _set: function () {
        return Rx.Observable.
            fromArray(_.rest(arguments, 0)).
            selectMany(this._makeRelative.bind(this, 'set'));
    },
    /**
     * @private
     * @param {...module:JGL~Query} path
     * @returns {Rx.Observable<module:JGL~PathValue>}
     */
    _del: function () {
        return Rx.Observable.
            fromArray(_.rest(arguments, 0)).
            selectMany(this._makeRelative.bind(this, 'del'));
    },
    /**
     * @private
     * @param {String} type
     * @param {module:JGL~Query} query
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _makeRelative: function (type, query) {
        var root = this.path,
            proxy = this._proxy,
            values = {};

        return proxy[type](query).
            selectMany(function (pv) {
                var path = pv.path,
                    value = pv.value,
                    relPath = JGL.relative(root, path),
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

                if (JGL.valueIsError(value)) {
                    ret.value = value;
                }

                return ret.value ?
                    Rx.Observable.returnValue(ret) :
                    JGL.
                        set(values, { path: relPath, value: value }).
                        select(function (pv) {
                            pv.value = values;
                            return pv;
                        });
            });
    }
});
