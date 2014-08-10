var JGLEvaluator = require('../base'),
    Handler = require('./handler'),
    Parser = require('./parser'),
    JGL = require('jgl'),
    Rx = require('rx'),
    _ = require('underscore');
/**
 * @class PatternJGLEvaluator
 * @extends JGLEvaluator
 * @param {...PatternJGLEvaluatorHandler} handler
 */
function PatternJGLEvaluator () {
    PatternJGLEvaluator.superclass.call(this);
    /**
     * @member PatternJGLEvaluator#_handlerMatrix
     * @property {Array<PatternJGLEvaluatorHandler>}
     * @private
     */
    this._handlerMatrix = [];

    _.rest(arguments, 0).
        forEach(function (args) {
            this.handle.apply(this, _.isArray(args) ? args : [args]);
        }.bind(this));

}

_.extend(PatternJGLEvaluator, {
    /**
     * @memberof PatternJGLEvaluator
     * @see PatternJGLEvaluatorParser
     */
    Parser: Parser,
    /**
     * @memberof PatternJGLEvaluator
     * @see PatternJGLEvaluatorHandler
     */
    Handler: Handler
});

module.exports = JGLEvaluator.extend(PatternJGLEvaluator,
    /** @lends PatternJGLEvaluator# */{
    /**
     * Add a new handler for a JGLEvaluatorEndPoint
     * @param {PatternJGLEvaluatorHandler|PatternJGLEvaluatorHandler~Method} handlerOrMethod
     * @param {PatternJGLEvaluatorParser~Pattern} [pattern]
     * @param {PatternJGLEvaluatorHandler~Action} [action]
     * @returns {PatternJGLEvaluator} The current instance
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

    destroy: function () {
        PatternJGLEvaluator.superproto.destroy.call(this);
        
        this._handlerMatrix.forEach(function (handlers) {
            if (handlers) {
                handlers.forEach(function (handler) {
                    handler.destroy();
                });
            }
        });

        _.extend(this, {
            _handlerMatrix: null
        });
    },
    /**
     * @private
     * @param {module:JGLEvaluator~Query} query
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _get: function (query) {
        return this._handle(Handler.GET, query);
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
     * @param {module:JGLEvaluator~Query} query
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    _del: function (query) {
        return this._handle(Handler.DEL, query);
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
    }
});
