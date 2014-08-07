var protean = require('protean'),
    classify = protean.classify,
    OPL = require('opl'),
    _ = require('underscore');
//------------------------------------------------------------------------------
// Internal Types
//------------------------------------------------------------------------------
/**
 * @typedef PatternOPEParser~Argument
 * @type {String|String[]|Integer|Integer[]|module:OPE~Range}
 */
/**
 * @typedef PatternOPEParser~Pattern
 * @type {Array<PatternOPEParser~Argument>}
 */
//------------------------------------------------------------------------------
// Constructor
//------------------------------------------------------------------------------
/**
 * @class PatternOPEParser
 * @param {...PatternOPEParser~Argument} segment
 */
function OPEParser () {
    /**
     * @member PatternOPEParser#segments
     * @property {Array<Function>}
     */
    this.segments =
        _.rest(arguments, 0).
            map(OPEParser._mapArgument);
}
//------------------------------------------------------------------------------
// Static Members
//------------------------------------------------------------------------------
_.extend(OPEParser,
    /** @lends PatternOPEParser **/{
    /**
     * @member PatternOPEParser.KEYS
     * @constant
     */
    KEYS: 'keys',
    /**
     * @member PatternOPEParser.INTEGERS
     * @constant
     */
    INTEGERS: 'integers',
    /**
     * Determines if the given value is an integer.
     * @member PatternOPEParser.isInteger
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isInteger: function (val) { return parseInt(val, 10) === val; },
    /**
     * Determines if the given value is an array of integers.
     * @member PatternOPEParser.isIntegers
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isIntegers: function (val) {
        return (_.isArray(val) ? val : [val]).every(OPEParser.isInteger);
    },
    /**
     * Determines is the given value is a range.
     * @member PatternOPEParser.isRange
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isRange: function (val) { return OPL.isRange(val); },
    /**
     * Determines if the given value is an integer or a range
     * @member PatternOPEParser.isIntegersOrRange
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isIntegersOrRange: function (val) {
        return OPEParser.isRange(val) || OPEParser.isIntegers(val);
    },
    /**
     * Determines is the given value is a string key
     * @member PatternOPEParser.isKey
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isKey: function (val) { return typeof val === 'string'; },
    /**
     * Determines if the given val is an array of keys.
     * @member PatternOPEParser.isKeys
     * @param {Mixed} val
     * @returns {Boolean}
     */
    isKeys: function (val) { return val.every && val.every(OPEParser.isKey); },
    /**
     * @private
     * @param {PatternOPEParser~Argument}
     * @returns {Function}
     * @throws {Error} If given an unknown argument type
     */
    _mapArgument: function (segment) {
        // First check to see if the segment is one of our constants
        switch (segment) {
        case OPEParser.INTEGERS:
            return function (val) {
                return !!(OPEParser.isIntegersOrRange(val)) &&
                    OPL.segmentKeys(val);
            };
        case OPEParser.KEYS:
            return function (val) {
                return !!OPEParser.isKeys(val) && OPL.segmentKeys(val);
            };
        }
        // Now try for some other options
        if (_.isArray(segment) && OPEParser.isKeys(segment)) {
            return function (val) {
                var result =
                        (_.isArray(val) ? val : [val]).
                        reduce(function (acc, part) {
                            if (OPL.segmentContains(segment, part)) {
                                acc = acc || [];
                                acc.push(part);
                            }
                            return acc;
                        }, []);

                return !!result.length && result;
            };
        }
        else if (OPEParser.isKey(segment) || OPEParser.isInteger(segment)) {
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
module.exports = classify(OPEParser,
    /** @lends PatternOPEParser# */{
    /**
     * Takes in a {@link module:OPE~Query} and returns a list of keys matched for
     * each segment of the query. If the parser does not match the query, false is
     * returned.
     * @param {module:OPE~Query} query
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

