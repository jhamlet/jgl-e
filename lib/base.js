var classify = require('protean').classify,
    OPL = require('opl'),
    Rx = require('rx'),
    _ = require('underscore'),
    REF_KEY = OPL.REF_KEY,
    ERROR_KEY = OPL.ERROR_KEY;
/**
 * @class module:OPE.Base
 * @alias BaseObjectPathEvaluator
 */
function BaseObjectPathEvaluator () {
    /**
     * @member module:OPE.Base#path
     * @type {module:OPE~Query}
     */
    this.path = [];
    /**
     * @member module:OPE.Base#_root
     * @private
     * @type {module:OPE.Base}
     */
    this._root = this;
}

module.exports = classify(BaseObjectPathEvaluator,
    /** @lends module:OPE.Base# */{
    /**
     * @param {Rx.Observable<module:OPE~Query>} [paths] An observable of path queries
     * @param {...module:OPE~Query} [path] One or more paths to retrieve
     * @returns {Rx.Observable<module:OPE~PathsValues>}
     */
    get: function (paths) {
        if (!(paths instanceof Rx.Observable)) {
            paths = Rx.Observable.fromArray(_.rest(arguments, 0));
        }

        return this._fetch(paths);
    },
    /**
     * @param {Rx.Observable<module:OPE~PathValue>} [pathValues] An observable of
     * path values
     * @param {...module:OPE~PathValue} [pv] One ore more path-values to set
     * @returns {Rx.Observable<module:OPE~PathsValue>}
     */
    set: function (pathValues) {
        if (!(pathValues instanceof Rx.Observable)) {
            pathValues = Rx.Observable.fromArray(_.rest(arguments, 0));
        }

        return this._put(pathValues);
    },
    /**
     * @param {Rx.Observable<module:OPE~Query>} [paths] An observable of path queries
     * @param {...module:OPE~Query} [path] One or more paths to delete
     * @returns {Rx.Observable<module:OPE~PathsValue>}
     */
    del: function (paths) {
        if (!(paths instanceof Rx.Observable)) {
            paths = Rx.Observable.fromArray(_.rest(arguments, 0));
        }

        return this._remove(paths);
    },
    /**
     * @param {module:OPE~Query} path The path to bind to
     * @returns {module:OPE.Base} An ObjectPathEvaluator bound to the given path
     */
    bind: function (path) {
        var copy = Object.create(this);
        copy.path = this.path.concat(path);
        /**
         * @member module:OPE.Base#_ancestor
         * @private
         * @type {module:OPE.Base}
         * @default undefined
         */
        copy._ancestor = this;
        return copy;
    },
    /**
     *
     */
    destroy: function () {
        this.root = null;
        this.path = null;
        this.ancestor = null;
    },
    /**
     * @private
     * @param {Rx.Observable<module:OPE~Query>} paths The paths to retrieve
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    _fetch: function (paths) {
        var root = this.path,
            makeRel = this._makeRelative.bind(this),
            skipRefs = this._skipReferences.bind(this),
            get = this._get.bind(this);

        return get(root).
            selectMany(skipRefs).
            selectMany(function (rootPv) {
                var path = rootPv.path;

                return paths.
                    selectMany(function (query) {
                        return get(path.concat(query)).
                            selectMany(skipRefs).
                            select(makeRel.bind(null, rootPv));
                    });
            });
    },
    /**
     * @private
     * @param {Rx.Observable<module:OPE~PathValue>} pathValues The paths and their
     * values to set
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    _put: function (pathValues) {
        var root = this.path,
            makeRel = this._makeRelative.bind(this),
            skipRefs = this._skipReferences.bind(this),
            handleErrors = this._handleError.bind(this),
            get = this._get.bind(this),
            set = this._set.bind(this);

        return get(root).
            selectMany(skipRefs).
            selectMany(handleErrors).
            selectMany(function (rootPv) {
                var path = rootPv.path;
                return pathValues.
                    selectMany(function (pv) {
                        return set({
                                path: path.concat(pv.path),
                                value: pv.value
                            }).
                            selectMany(skipRefs).
                            selectMany(handleErrors).
                            select(makeRel.bind(null, rootPv));
                    });
            });
    },
    /**
     * @private
     * @param {Rx.Observable<module:OPE~Query>} paths
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    _remove: function (paths) {
        var root = this.path,
            makeRel = this._makeRelative.bind(this),
            skipRefs = this._skipReferences.bind(this),
            handleErrors = this._handleError.bind(this),
            get = this._get.bind(this),
            del = this._del.bind(this);

        return get(root).
            selectMany(skipRefs).
            selectMany(handleErrors).
            selectMany(function (rootPv) {
                var path = rootPv.path;
                return paths.
                    selectMany(function (query) {
                        return del(path.concat(query)).
                            selectMany(skipRefs).
                            selectMany(handleErrors).
                            select(makeRel.bind(null, rootPv));
                    });
            });
    },
    /**
     * @private
     * @param {module:OPE~PathValue} pv
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    _handleError: function (pv) {
        var value = pv.value;

        if (value[ERROR_KEY]) {
            pv.value = OPL.valueToError(value);
        }

        return Rx.Observable.returnValue(pv);
    },
    /**
     * @private
     * @param {module:OPE~PathValue} pv
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    _skipReferences: function (pv) {
        var value = pv.value;
        return value[REF_KEY] ?
            Rx.Observable.empty() :
            Rx.Observable.returnValue(pv);
    },
    /**
     * @private
     * @param {module:OPE~PathValue} rootPv
     * @param {module:OPE~PathValue} pv
     * @returns {module:OPE~PathValue}
     */
    _makeRelative: function (rootPv, pv) {
        var rootPath = rootPv.path,
            rootValue = rootPv.value,
            path = pv.path.slice(rootPath.length);

        return { path: path, value: rootValue };
    },
    /**
     * @method module:OPE.Base#_get
     * @abstract
     * @private
     * @param {...module:OPE~Query} path
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    /**
     * @method module:OPE.Base#_set
     * @abstract
     * @private
     * @param {...module:OPE~PathValue} pv
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    /**
     * @method module:OPE.Base#_del
     * @abstract
     * @private
     * @param {...module:OPE~Query} path
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
});
