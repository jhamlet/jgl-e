var JGLEvaluator = require('../base'),
    Handler = require('./handler'),
    Parser = require('./parser'),
    JGL = require('jgl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class JGLPatternEvaluator
 * @extends JGLEvaluator
 * @param {...JGLPatternEvaluatorHandler} handler
 */
function JGLPatternEvaluator () {
    JGLPatternEvaluator.superclass.call(this);
    /**
     * @member JGLPatternEvaluator#_handlerMatrix
     * @property {Array<JGLPatternEvaluatorHandler>}
     * @private
     */
    this._handlerMatrix = [];

    _.rest(arguments, 0).
        forEach(function (args) {
            this.handle.apply(this, _.isArray(args) ? args : [args]);
        }.bind(this));

}

_.extend(JGLPatternEvaluator, {
    /**
     * @memberof JGLPatternEvaluator
     * @see JGLEvaluatorPatternParser
     */
    Parser: Parser,
    /**
     * @memberof JGLPatternEvaluator
     * @see JGLPatternEvaluatorHandler
     */
    Handler: Handler
});

module.exports = JGLEvaluator.extend(JGLPatternEvaluator,
    /** @lends JGLPatternEvaluator# */{
    /**
     * Add a new handler for a JGLEvaluatorndPoint
     * @param {JGLPatternEvaluatorHandler|JGLPatternEvaluatorHandler~Method} handlerOrMethod
     * @param {JGLEvaluatorPatternParser~Pattern} [pattern]
     * @param {JGLPatternEvaluatorHandler~Action} [action]
     * @returns {JGLPatternEvaluator} The current instance
     */
    handle: function (handlerOrMethod, pattern, action) {
        var matrix = this._handlerMatrix,
            handler = handlerOrMethod instanceof Handler ?
                handlerOrMethod :
                new Handler(handlerOrMethod, pattern, action),
            list,
            idx;

        idx = handler.pattern.length - 1;
        list = matrix[idx] || (matrix[idx] = []);
        list.push(handler);

        return this;
    },
    /**
     * @private
     */
    _handle: function (type, query, value) {
        var matrix = this._handlerMatrix,
            current = [],
            qLen = query.length,
            isGet = type === Handler.GET,
            handle = this._handle.bind(this, type),
            handlers,
            hLen,
            key,
            h,
            q,
            i,
            match;

        // console.log('QUERY: %j', query);

        for (q = 0; q < qLen; q++) {
            key = query[q];

            handlers = matrix[q];
            current.push(key);

            if (handlers) {
                for (i = 0, hLen = handlers.length; i < hLen; i++) {
                    h = handlers[i];
                    match = h && h.match(type, current);

                    if (match) {
                        return h.run(match, value).
                            /*jshint loopfunc: true*/
                            select(function (pv) {
                                var ret = Rx.Observable.returnValue(pv),
                                    path = JGL.pathValueIsRef(pv) &&
                                        pv.value[JGL.REF_KEY];

                                return isGet && path ?
                                    ret.concat(
                                        handle(path.concat(query.slice(q + 1)))
                                    ) :
                                    ret;
                            }).
                            concatAll();
                    }
                }
            }
        }

        return Rx.Observable.
            fromArray(JGL.explode(query)).
            select(function (path) { return { path: path }; });
    },
    /**
     * @private
     * @param {module:JGLEvaluator~Query} path
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _get: function (path) {
        return this._handle(Handler.GET, path);
    },
    /**
     * @private
     * @param {module:JGLEvaluator~PathValue} pv
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _set: function (pv) {
        return this._handle(Handler.SET, pv.path, pv.value);
    },
    /**
     * @private
     * @param {module:JGLEvaluator~Query} path
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _del: function (path) {
        return this._handle(Handler.DEL, path);
    }
});
