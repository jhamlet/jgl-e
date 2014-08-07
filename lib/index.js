var _ = require('underscore');
/**
 * An object that can be expanded into a series of indices
 * @typedef module:OPE~Range
 * @type {Object}
 * @property {Integer} [from=0]
 * @property {Integer} to
 */
/**
 * The smallest part of a concrete path
 * @typedef module:OPE~PathSegment
 * @type {Integer|String}
 */
/**
 * The smallest part of a complex query
 * @typedef module:OPE~QueryKey
 * @type {module:OPE~PathSegment|module:OPE~Range}
 */
/**
 * A query segment can contain one or more query keys
 * @typedef module:OPE~QuerySegment
 * @type {module:OPE~QueryKey|Array<module:OPE~QueryKey>}
 */
/**
 * A complex path query that can be expanded to get multiple concrete paths
 * @typedef module:OPE~Query
 * @type {Array<module:OPE~QuerySegment>}
 */
/**
 * A concrete path. i.e: One that can not be expanded further.
 * @typedef module:OPE~Path
 * @type {Array<module:OPE~PathSegment>}
 */
/**
 * @typedef module:OPE~PathValue
 * @type {Object}
 * @property {Array<module:OPE~Path>} path
 * @property {Mixed|Error} [value]
 * The returned value from following the path. If there was an error in processing
 * the path, the value will be an instance of Error. If undefined, it means the value
 * was removed from the graph at the given path.
 * @property {Array<module:OPE~Path>} [value.@ref]
 * Indicates that the value is a reference, and this path points back into the
 * JSONGraph from the root.
 * @property {Object} [value.@error]
 * Indicates that the path resulted in an error and was transformed into a normal
 * object. Useful for serializing and deserializing over the wire
 * @property {String} [value.@error.name]
 * The name of the original error
 * @property {String} [value.@error.message]
 * The original error message
 * @property {Array<String>} [value.@error.stack]
 * The original error stack
 */
/**
 * @module OPE
 */
_.extend(exports, {
    /**
     * @memberof module:OPE
     * @see ObjectPathEvaluator
     */
    Base: require('./base'),
    /**
     * @memberof module:OPE
     * @see MemoryObjectPathEvaluator
     */
    Memory: require('./memory'),
    /**
     * @memberof module:OPE
     * @see PatternObjectPathEvaluator
     */
    Pattern: require('./pattern')
    // Cached: require('./cached')
});

