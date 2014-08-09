var protean = require('protean'),
    classify = protean.classify,
    Parser = require('./parser'),
    // JGL = require('jgl'),
    // Rx = require('rx'),
    _ = require('underscore');
//------------------------------------------------------------------------------
// Internal Types
//------------------------------------------------------------------------------
/**
 * @typedef JGLPatternEvaluatorHandler~Action
 * @type {Function}
 * @param {Array<Array<Integer|String>>} query
 * @param {Mixed} [value]
 * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
 */
/**
 * @typedef JGLPatternEvaluatorHandler~Method
 * @type {JGLPatternEvaluatorHandler.GET|JGLPatternEvaluatorHandler.SET|JGLPatternEvaluatorHandler.DEL}
 */
//------------------------------------------------------------------------------
// Constructor
//------------------------------------------------------------------------------
/**
 * @class JGLPatternEvaluatorHandler
 * @param {JGLPatternEvaluatorHandler~Method} method
 * @param {JGLPatternEvaluatorParser~Pattern} pattern
 * @param {JGLPatternEvaluatorHandler~Action} action
 */
function JGLEvaluatorHandler (method, pattern, action) {
    /**
     * The method to use: 'get', 'set', or 'del'
     * @member JGLPatternEvaluatorHandler#method
     * @type {JGLPatternEvaluatorHandler~Method}
     */
    this.method = method.toLowerCase();
    /**
     * The un-parsed pattern
     * @member JGLPatternEvaluatorHandler#pattern
     * @type {JGLPatternEvaluatorHandler~Pattern}
     */
    this.pattern = pattern;
    /**
     * The {@link JGLPatternEvaluatorParser} instance used for determining if the
     * handler handles a particular query
     * @member JGLPatternEvaluatorHandler#parser
     * @type {JGLPatternEvaluatorParser}
     */
    this.parser = protean.instantiate(Parser, pattern);
    /**
     * @member JGLPatternEvaluatorHandler#run
     * @method
     * @param {Array<Array<Integer|String>>} query
     * @param {Mixed} [value]
     * @returns {Rx.Observable<module:JGLEvaluator~PathValue>}
     */
    this.run = action;
}
//------------------------------------------------------------------------------
// Static Members
//------------------------------------------------------------------------------
_.extend(JGLEvaluatorHandler,
    /** @lends JGLPatternEvaluatorHandler */{
    /**
     * @constant
     */
    GET: 'get',
    /**
     * @constant
     */
    SET: 'set',
    /**
     * @constant
     */
    DEL: 'del'
});
//------------------------------------------------------------------------------
// Instance Members
//------------------------------------------------------------------------------
module.exports = classify(JGLEvaluatorHandler,
    /** @lends JGLPatternEvaluatorHandler# */{
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

