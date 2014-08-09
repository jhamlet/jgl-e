var protean = require('protean'),
    classify = protean.classify,
    jgl = require('jgl'),
    _ = require('underscore');
//------------------------------------------------------------------------------
// Internal Types
//------------------------------------------------------------------------------
/**
 * @typedef JGLPatternEvaluatorParser~Argument
 * @type {String|String[]|Integer|Integer[]|module:JGLEvaluator~Range}
 */
/**
 * @typedef JGLPatternEvaluatorParser~Pattern
 * @type {Array<JGLPatternEvaluatorParser~Argument>}
 */
//------------------------------------------------------------------------------
// Constructor
//------------------------------------------------------------------------------
/**
 * @class JGLPatternEvaluatorParser
 * @param {...JGLPatternEvaluatorParser~Argument} segment
 */
function JGLEvaluatorParser () {
    /**
     * @member JGLPatternEvaluatorParser#segments
     * @property {Array<Function>}
     */
    this.segments =
        _.rest(arguments, 0).
            map(JGLEvaluatorParser._mapArgument);
}
//------------------------------------------------------------------------------
// Static Members
//------------------------------------------------------------------------------
_.extend(JGLEvaluatorParser,
    /** @lends JGLPatternEvaluatorParser **/{
    /**
     * @member JGLPatternEvaluatorParser.KEYS
     * @constant
     */
    KEYS: 'keys',
    /**
     * @member JGLPatternEvaluatorParser.INTEGERS
     * @constant
     */
    INTEGERS: 'integers',
    /**
     * Determines if the given value is an integer.
     * @member JGLPatternEvaluatorParser.isInteger
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isInteger: function (val) { return parseInt(val, 10) === val; },
    /**
     * Determines if the given value is an array of integers.
     * @member JGLPatternEvaluatorParser.isIntegers
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isIntegers: function (val) {
        return (_.isArray(val) ? val : [val]).every(JGLEvaluatorParser.isInteger);
    },
    /**
     * Determines is the given value is a range.
     * @member JGLPatternEvaluatorParser.isRange
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isRange: function (val) { return jgl.isRange(val); },
    /**
     * Determines if the given value is an integer or a range
     * @member JGLPatternEvaluatorParser.isIntegersOrRange
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isIntegersOrRange: function (val) {
        return JGLEvaluatorParser.isRange(val) || JGLEvaluatorParser.isIntegers(val);
    },
    /**
     * Determines is the given value is a string key
     * @member JGLPatternEvaluatorParser.isKey
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isKey: function (val) { return typeof val === 'string'; },
    /**
     * Determines if the given val is an array of keys.
     * @member JGLPatternEvaluatorParser.isKeys
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isKeys: function (val) { return val.every && val.every(JGLEvaluatorParser.isKey); },
    /**
     * @private
     * @param {JGLPatternEvaluatorParser~Argument}
     * @returns {Function}
     * @throws {Error} If given an unknown argument type
     */
    _mapArgument: function (segment) {
        // First check to see if the segment is one of our constants
        switch (segment) {
        case JGLEvaluatorParser.INTEGERS:
            return function (val) {
                return !!(JGLEvaluatorParser.isIntegersOrRange(val)) &&
                    jgl.segmentKeys(val);
            };
        case JGLEvaluatorParser.KEYS:
            return function (val) {
                return !!JGLEvaluatorParser.isKeys(val) && jgl.segmentKeys(val);
            };
        }
        // Now try for some other options
        if (_.isArray(segment) && JGLEvaluatorParser.isKeys(segment)) {
            return function (val) {
                var result =
                        (_.isArray(val) ? val : [val]).
                        reduce(function (acc, part) {
                            if (jgl.segmentContains(segment, part)) {
                                acc = acc || [];
                                acc.push(part);
                            }
                            return acc;
                        }, []);

                return !!result.length && result;
            };
        }
        else if (JGLEvaluatorParser.isKey(segment) || JGLEvaluatorParser.isInteger(segment)) {
            return function (val) {
                return val === segment && [segment];
            };
        }
        // Otherwise, throw an error
        throw new Error('Unknown key segment type \'' + segment + '\'');
    }
});
//------------------------------------------------------------------------------
// Instance Members
//------------------------------------------------------------------------------
module.exports = classify(JGLEvaluatorParser,
    /** @lends JGLPatternEvaluatorParser# */{
    /**
     * Takes in a {@link module:JGLEvaluator~Query} and returns a list of keys matched for
     * each segment of the query. If the parser does not match the query, false is
     * returned.
     * @param {module:JGLEvaluator~Query} query
     * @returns {Array<Array<String|Integer>>|Boolean}
     */
    match: function (query) {
        var segments = this.segments,
            results;

        if (query.length < segments.length) { return false; }

        return (
            results =
                segments.
                    reduce(function (acc, segment, idx) {
                        var r = segment(query[idx]);
                        r !== false && acc.push(r);
                        return acc;
                    }, [])
            ) &&
            results.length === segments.length &&
            results;
    }
});

