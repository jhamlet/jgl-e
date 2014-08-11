var classify = require('protean').classify,
    JGL = require('jgl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class JGLEvaluator
 * @param {module:JGLEvaluator~Query} [path=[]] Optional path to pre-bind to.
 */
function JGLEvaluator (path) {
    this.path = path || [];
    this._root = this;
}
module.exports = classify(JGLEvaluator,
    /** @lends JGLEvaluator# */{
    /**
     * @property {module:JGLEvaluator~Query}
     */
    path: null,
    /**
     * @param {module:JGLEvaluator~Query} path The path to bind to
     * @returns {BoundJGLEvaluator} An JGLEvaluator bound to the given path
     */
    bind: function (path) {
        var copy = Object.create(this);
        copy.path = this.path.concat(path);
        copy._ancestor = this;
        return copy;
    },
    /**
     * @param {Rx.Observable<module:JGLEvaluator~Query>} [obs] An observable of paths
     * @param {...module:JGLEvaluator~Query} [path] One or more paths to retrieve
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    get: function () {
        var root = this.path,
            resolve = this._resolve.bind(this, 'get');

        return Rx.Observable.
            fromArray(_.rest(arguments, 0)).
            selectMany(function (query) {
                return Rx.Observable.
                    fromArray(JGL.explode(root)).
                    select(function (r) { return r.concat(query); }).
                    selectMany(resolve);
            });
    },
    /**
     * @param {...module:JGLEvaluator~PathValue} [pv] One or more path-values to set
     * @param {Rx.Observable<module:JGLEvaluator~PathValue>} [obs] An observable of path values
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    set: function () {
        var root = this.path,
            resolve = this._resolve.bind(this, 'set');

        return Rx.Observable.
            fromArray(_.rest(arguments, 0)).
            selectMany(function (pv) {
                return Rx.Observable.
                    fromArray(JGL.explode(root)).
                    select(function (path) {
                        return {
                            path: path.concat(pv.path),
                            value: pv.value
                        };
                    }).
                    selectMany(resolve);
            });
    },
    /**
     * @param {Rx.Observable<module:JGLEvaluator~Query>} [obs] An observable of paths
     * @param {...module:JGLEvaluator~Query} [path] One or more paths to delete
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    del: function () {
        var root = this.path,
            resolve = this._resolve.bind(this, 'del');

        return Rx.Observable.
            fromArray(_.rest(arguments, 0)).
            selectMany(function (query) {
                return Rx.Observable.
                    fromArray(JGL.explode(root)).
                    select(function (r) { return r.concat(query); }).
                    selectMany(resolve);
            });
    },
    /**
     */
    destroy: function () {
        _.extend(this, {
            path: null,
            _root: null,
            _ancestor: null
        });
    },
    /**
     * @property {JGLEvaluator}
     * @private
     */
    _root: null,
    /**
     * @property {JGLEvaluator}
     * @private
     */
    _ancestor: null,
    /**
     * @private
     * @param {String} type
     * @param {module:JGLEvaluator~Query} query
     * @returns {Rx.Observable<Rx.Observable<module:JGLEvaluator~PathValue>>}
     */
    _resolve: function (type, query) {
        var root = this.path,
            method = this['_' + type].bind(this),
            handleError = this._handleError.bind(this);

        return Rx.Observable.create(function (observer) {
            var rootValue = {},
                queue = [],
                disposed = false,
                subscription;

            function pump () {
                if (!disposed && queue.length) {
                    // console.log('RESOLVED QUEUE: %j', queue);
                    JGL.
                        resolve(queue).
                        filter(function (pv) { return pv.value !== undefined; }).
                        map(function (resolvedPv) {
                            var path, pv;

                            if (JGL.pathValueIsError(resolvedPv)) {
                                return resolvedPv;
                            }

                            path = JGL.relative(root, resolvedPv.path);
                            pv = { path: path, value: resolvedPv.value };

                            // console.log('RESOLVED PATH: %j', path);
                            JGL.set(rootValue, pv);
                            pv.value = rootValue;

                            return pv;
                        }).
                        map(function (pv, idx) {
                            // console.log('RESOLVE IDX: %j', idx);
                            return pv;
                        }).
                        forEach(observer.onNext.bind(observer));
                    queue = [];
                }
            }

            function done (error) {
                if (!disposed) {
                    pump();
                    queue = null;
                    disposed = true;
                    observer[error ? 'onError' : 'onCompleted'](error);
                    subscription && subscription.dispose();
                }
            }

            function next (pv) {
                // console.log('NEXT: %j', pv);
                queue.push(pv);
                if (JGL.pathValueIsError(pv) || !JGL.pathValueIsRef(pv)) {
                    pump();
                }
            }

            subscription =
                method(query).
                    select(handleError).
                    subscribe(next, done, done);

            return Rx.Disposable.create(done);
        });
    },
    /**
     * @private
     * @param {module:JGLEvaluator~PathValue} pv
     * @returns {module:JGLEvaluator~PathValue} pv
     */
    _handleError: function (pv) {
        if (JGL.pathValueIsError(pv)) {
            pv.value = JGL.valueToError(pv.value);
        }
        return pv;
    },
    _isDefinedAndNotError: function (pv) {
        return pv.value !== undefined && !JGL.pathValueIsError(pv);
    },
    /**
     * @method
     * @abstract
     * @private
     * @param {module:JGLEvaluator~Query} query
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _get: null,
    /**
     * @method
     * @abstract
     * @private
     * @param {module:JGLEvaluator~PathValue} pv
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _set: null,
    /**
     * @method
     * @abstract
     * @private
     * @param {module:JGLEvaluator~Query} query
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _del: null
});
