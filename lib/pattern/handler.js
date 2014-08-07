var protean = require('protean'),
    classify = protean.classify,
    Parser = require('./parser'),
    // OPL = require('opl'),
    // Rx = require('rx'),
    _ = require('underscore');
//------------------------------------------------------------------------------
// Internal Types
//------------------------------------------------------------------------------
/**
 * @typedef PatternOPEHandler~Action
 * @type {Function}
 * @param {Array<Array<Integer|String>>} query
 * @param {Mixed} [value]
 * @returns {Rx.Observable<module:OPE~PathValue>}
 */
/**
 * @typedef PatternOPEHandler~Method
 * @type {PatternOPEHandler.GET|PatternOPEHandler.SET|PatternOPEHandler.DEL}
 */
//------------------------------------------------------------------------------
// Constructor
//------------------------------------------------------------------------------
/**
 * @class PatternOPEHandler
 * @param {PatternOPEHandler~Method} method
 * @param {PatternOPEParser~Pattern} pattern
 * @param {PatternOPEHandler~Action} action
 */
function OPEHandler (method, pattern, action) {
    /**
     * The method to use: 'get', 'set', or 'del'
     * @member PatternOPEHandler#method
     * @type {PatternOPEHandler~Method}
     */
    this.method = method.toLowerCase();
    /**
     * The un-parsed pattern
     * @member PatternOPEHandler#pattern
     * @type {PatternOPEHandler~Pattern}
     */
    this.pattern = pattern;
    /**
     * The {@link PatternOPEParser} instance used for determining if the
     * handler handles a particular query
     * @member PatternOPEHandler#parser
     * @type {PatternOPEParser}
     */
    this.parser = protean.instantiate(Parser, pattern);
    /**
     * @member PatternOPEHandler#run
     * @method
     * @param {Array<Array<Integer|String>>} query
     * @param {Mixed} [value]
     * @returns {Rx.Observable<module:OPE~PathValue>}
     */
    this.run = action;
}
//------------------------------------------------------------------------------
// Static Members
//------------------------------------------------------------------------------
_.extend(OPEHandler,
    /** @lends PatternOPEHandler */{
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
module.exports = classify(OPEHandler,
    /** @lends PatternOPEHandler# */{
    /**
     * @param {String} method
     * @param {module:OPE~Query} query
     * @returns {Array<Array<String|Integer>>}
     */
    match: function (method, query) {
        return this.method === method.toLowerCase() &&
            this.parser.match(query);
    }
});

