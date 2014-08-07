var classify = require('protean').classify,
    OPL = require('opl'),
    Rx = require('rx'),
    _ = require('underscore'),
    // REF_KEY = OPL.REF_KEY,
    ERROR_KEY = OPL.ERROR_KEY;
/**
 * @class ObjectPathEvaluator
 */
function ObjectPathEvaluator () {
    /**
     * @member ObjectPathEvaluator#path
     * @type {module:OPE~Query}
     */
    this.path = [];
    /**
     * @member ObjectPathEvaluator#_root
     * @private
     * @type {ObjectPathEvaluator}
     */
    this._root = this;
}

module.exports = classify(ObjectPathEvaluator,
    /** @lends ObjectPathEvaluator# */{
    /**
     * @param {...module:OPE~Query} [path] One or more paths to retrieve
     * @returns {Rx.Observable<module:OPE~PathValues>}
     */
    get: function () {
        return this._request(this._get.bind(this), _.rest(arguments, 0));
    },
    /**
     * @param {...module:OPE~PathValue} [pathValues] One ore more path-values to set
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    set: function () {
        return this._request(this._set.bind(this), _.rest(arguments, 0));
    },
    /**
     * @param {...module:OPE~Query} [path] One or more paths to delete
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    del: function () {
        return this._request(this._del.bind(this), _.rest(arguments, 0));
    },
    /**
     * @param {module:OPE~Query} path The path to bind to
     * @returns {ObjectPathEvaluator} An ObjectPathEvaluator bound to the given path
     */
    bind: function (path) {
        var copy = Object.create(this);
        copy.path = this.path.concat(path);
        /**
         * @member ObjectPathEvaluator#_ancestor
         * @private
         * @type {ObjectPathEvaluator}
         * @default undefined
         */
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
     * @private
     * @param {Function} fn
     * @param {Array<module:OPE~Query|module:OPE~PathValue>} items
     */
    _request: function (fn, items) {
        if (!(items instanceof Rx.Observable)) {
            items = Rx.Observable.fromArray(items);
        }

        return items.
            // Map each request path to be root relative
            select(this._makeAbsolute.bind(this)).
            // Grab them all
            toArray().
            // Forward them onto the underlying request method
            selectMany(function (items) { return fn.apply(null, items); }).
            // Convert any '@error' responses to actual error objects
            select(this._handleError.bind(this));
    },
    /**
     * @private
     * @param {module:OPE~Query|module:OPE~PathValue} pathOrPv
     * @returns {module:OPE~Query|module:OPE~PathValue}
     */
    _makeAbsolute: function (pathOrPv) {
        var isPv = !!pathOrPv.path,
            path = this.path.concat(isPv ? pathOrPv.path : pathOrPv);

        if (isPv) { pathOrPv.path = path; }

        return isPv ? pathOrPv : path;
    },
    /**
     * @private
     * @param {module:OPE~PathValue} pv
     * @returns {module:OPE~PathValue}
     */
    _handleError: function (pv) {
        var value = pv.value;

        if (value && value[ERROR_KEY]) {
            pv.value = OPL.valueToError(value);
        }

        return pv;
    },
    /**
     * @method ObjectPathEvaluator#_get
     * @abstract
     * @private
     * @param {...module:OPE~Query} path
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    /**
     * @method ObjectPathEvaluator#_set
     * @abstract
     * @private
     * @param {...module:OPE~PathValue} pv
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    /**
     * @method ObjectPathEvaluator#_del
     * @abstract
     * @private
     * @param {...module:OPE~Query} path
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
});
