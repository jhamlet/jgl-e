var _ = require('underscore');
/**
 * An object that can be expanded into a series of indices
 * @typedef module:JGLEvaluator~Range
 * @type {Object}
 * @property {Integer} [from=0]
 * @property {Integer} to
 */
/**
 * The smallest part of a concrete path
 * @typedef module:JGLEvaluator~PathSegment
 * @type {Integer|String}
 */
/**
 * The smallest part of a complex query
 * @typedef module:JGLEvaluator~QueryKey
 * @type {module:JGLEvaluator~PathSegment|module:JGLEvaluator~Range}
 */
/**
 * A query segment can contain one or more query keys
 * @typedef module:JGLEvaluator~QuerySegment
 * @type {module:JGLEvaluator~QueryKey|Array<module:JGLEvaluator~QueryKey>}
 */
/**
 * A complex path query that can be expanded to get multiple concrete paths
 * @typedef module:JGLEvaluator~Query
 * @type {Array<module:JGLEvaluator~QuerySegment>}
 */
/**
 * A concrete path. i.e: One that can not be expanded further.
 * @typedef module:JGLEvaluator~Path
 * @type {Array<module:JGLEvaluator~PathSegment>}
 */
/**
 * @typedef module:JGLEvaluator~PathValue
 * @type {Object}
 * @property {Array<module:JGLEvaluator~Path>} path
 * @property {Mixed|Error} [value]
 * The returned value from following the path. If there was an error in processing
 * the path, the value will be an instance of Error. If undefined, it means the value
 * was removed from the graph at the given path.
 * @property {Array<module:JGLEvaluator~Path>} [value.@ref]
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
 * @module JGLEvaluator
 */
_.extend(exports, {
    /**
     * @memberof module:JGLEvaluator
     * @see JGLEvaluator
     */
    Base: require('./base'),
    /**
     * @memberof module:JGLEvaluator
     * @see JGLMemoryEvaluator
     */
    Memory: require('./memory'),
    /**
     * @memberof module:JGLEvaluator
     * @see JGLPatternEvaluator
     */
    Pattern: require('./pattern'),
    /**
     * @memberof module:JGLEvaluator
     * @see JGLCachedEvaluator
     */
    Cached: require('./cached')
});

