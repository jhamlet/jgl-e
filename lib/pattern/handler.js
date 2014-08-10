var protean = require('protean'),
    classify = protean.classify,
    Parser = require('./parser');
//------------------------------------------------------------------------------
// Internal Types
//------------------------------------------------------------------------------
/**
 * @typedef PatternJGLEvaluatorHandler~Action
 * @type {Function}
 * @param {Array<Array<Integer|String>>} query
 * @param {Mixed} [value]
 * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
 */
/**
 * @typedef PatternJGLEvaluatorHandler~Method
 * @type {PatternJGLEvaluatorHandler.GET|PatternJGLEvaluatorHandler.SET|PatternJGLEvaluatorHandler.DEL}
 */
//------------------------------------------------------------------------------
// Constructor
//------------------------------------------------------------------------------
/**
 * @class PatternJGLEvaluatorHandler
 * @param {PatternJGLEvaluatorHandler~Method} method
 * @param {PatternJGLEvaluatorParser~Pattern} pattern
 * @param {PatternJGLEvaluatorHandler~Action} action
 */
function JGLEvaluatorHandler (method, pattern, action) {
    this.method = method.toLowerCase();
    this.pattern = pattern;
    this.parser = protean.instantiate(Parser, pattern);
    this.run = action;
}
//------------------------------------------------------------------------------
// Static Members
//------------------------------------------------------------------------------
Object.defineProperties(JGLEvaluatorHandler,
    /** @lends PatternJGLEvaluatorHandler */{
    /**
     * @constant
     */
    GET: { value: 'get', enumerable: true, configurable: false },
    /**
     * @constant
     */
    SET: { value: 'set', enumerable: true, configurable: false },
    /**
     * @constant
     */
    DEL: { value: 'del', enumerable: true, configurable: false }
});
//------------------------------------------------------------------------------
// Instance Members
//------------------------------------------------------------------------------
module.exports = classify(JGLEvaluatorHandler,
    /** @lends PatternJGLEvaluatorHandler# */{
    /**
     * The method to use: 'get', 'set', or 'del'
     * @property {PatternJGLEvaluatorHandler.GET|PatternJGLEvaluatorHandler.SET|PatternJGLEvaluatorHandler.DEL}
     */
    method: null,
    /**
     * The un-parsed pattern
     * @property {PatternJGLEvaluatorHandler~Pattern}
     */
    pattern: null,
    /**
     * The {@link PatternJGLEvaluatorParser} instance used for determining if the
     * handler handles a particular query
     * @property {PatternJGLEvaluatorParser}
     */
    parser: null,
    /**
     * @method
     * @param {Array<Array<Integer|String>>} query
     * @param {Mixed} [value]
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    run: null,
    /**
     * @param {String} method
     * @param {module:JGLEvaluator~Query} query
     * @returns {Array<Array<String|Integer>>}
     */
    match: function (method, query) {
        return this.method === method.toLowerCase() &&
            this.parser.match(query);
    }
});

