var classify = require('protean').classify,
    JGL = require('jgl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class JGLEvaluator
 */
function JGLEvaluator () {
    this.path = [];
    this._root = this;
}

module.exports = classify(JGLEvaluator,
    /** @lends JGLEvaluator# */{
    /**
     * @param {...module:JGLEvaluator~Query} [path] One or more paths to retrieve
     * @returns {Rx.Observable<module:JGLEvaluator~PathValues>}
     */
    get: function () {
        return this._request(this._get.bind(this), _.rest(arguments, 0));
    },
    /**
     * @param {...module:JGLEvaluator~PathValue} [pv] One or more path-values to set
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    set: function () {
        return this._request(this._set.bind(this), _.rest(arguments, 0));
    },
    /**
     * @param {...module:JGLEvaluator~Query} [path] One or more paths to delete
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    del: function () {
        return this._request(this._del.bind(this), _.rest(arguments, 0));
    },
    /**
     * @param {module:JGLEvaluator~Query} path The path to bind to
     * @returns {JGLEvaluator} An JGLEvaluator bound to the given path
     */
    bind: function (path) {
        var copy = Object.create(this);
        copy.path = this.path.concat(path);
        copy._ancestor = this;
        return copy;
    },
    /**
     *
     */
    destroy: function () {
        _.extend(this, {
            _root: null,
            _ancestor: null,
            _requestGet: null,
            _requestSet: null,
            _requestDel: null,
            path: null
        });
    },
    /**
     * @property {module:JGLEvaluator~Query}
     * @private
     */
    _path: null,
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
     * @param {Function} fn
     * @param {Array<module:JGLEvaluator~Query|module:JGLEvaluator~PathValue>} items
     */
    _request: function (fn, items) {
        if (!(items instanceof Rx.Observable)) {
            items = Rx.Observable.fromArray(items);
        }

        return items.
            // Map each request path to be root relative
            select(this._makeAbsolute.bind(this)).
            // Forward to our underlying request method
            selectMany(function (item) { return fn(item); }).
            // Convert any '@error' responses to actual error objects
            select(this._handleError.bind(this));
    },
    /**
     * @private
     * @param {module:JGLEvaluator~Query|module:JGLEvaluator~PathValue} pathOrPv
     * @returns {module:JGLEvaluator~Query|module:JGLEvaluator~PathValue}
     */
    _makeAbsolute: function (pathOrPv) {
        var isPv = !!pathOrPv.path,
            path = this.path.concat(isPv ? pathOrPv.path : pathOrPv);

        if (isPv) { pathOrPv.path = path; }

        return isPv ? pathOrPv : path;
    },
    /**
     * @private
     * @param {module:JGLEvaluator~PathValue} pv
     * @returns {module:JGLEvaluator~PathValue}
     */
    _handleError: function (pv) {
        if (JGL.pathValueIsError(pv)) {
            pv.value = JGL.valueToError(pv);
        }

        return pv;
    },
    /**
     * @method
     * @abstract
     * @private
     * @param {module:JGLEvaluator~Query} path
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
     * @param {module:JGLEvaluator~Query} path
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _del: null
});
