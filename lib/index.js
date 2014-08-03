var _ = require('underscore');
/**
 * An object that denotes a range of indexes.
 * @example { from: 9, to: 11 }
 * @example { to: 9 }
 * @typedef module:OPE~Range
 * @type {Object}
 * @property {Integer} [from=0]
 * @property {Integer} to
 */
/**
 * A concreate segment of a path. An integer or a string key.
 * @example 9
 * @example 'foo'
 * @typedef module:OPE~PathSegment
 * @type {Integer|String}
 */
/**
 * Either an index or string key, or a {@link module:OPE~Range} object
 * @example 9
 * @example 'foo'
 * @example { to: 9 }
 * @typedef module:OPE~QueryKey
 * @type {module:OPE~PathSegment|module:OPE~Range}
 */
/**
 * Either a {@link module:OPE~QueryKey} or an Array of the same
 * @example { to: 9 }
 * @example [ 'length', {to: 9}]
 * @typedef module:OPE~QuerySegment
 * @type {module:OPE~QueryKey|Array<module:OPE~QueryKey>}
 */
/**
 * A path that has expandable segments.
 * @example ['foo', 'bar', ['length', {to: 9}], 'id']
 * @typedef module:OPE~Query
 * @type {Array<module:OPE~QuerySegment>}
 */
/**
 * A concrete path (i.e: one that can not be expanded)
 * @example ['foo', 'bar', 9, 'id']
 * @typedef module:OPE~Path
 * @type {Array<module:OPE~PathSegment>}
 */
/**
 * @typedef module:OPE~Value
 * @type {Mixed|Error}
 */
/**
 * An array of 0: {@link module:OPE~Path} and 1: {@link module:OPE~Value}
 * @example [['foo', 'bar', 9, 'id'], 'bob']
 * @typedef module:OPE~PathValue
 * @type {Array<module:OPE~Path, module:OPE~Value>}
 */
/**
 * Similar to {@link module:OPE~PathValue} however, the value is the branch-node of a
 * request, and the path points into the value
 * @typedef module:OPE~PathsValue
 * @type {Array<module:OPE~Path, module:OPE~Value>}
 */
/**
 * @module OPE
 */
_.extend(exports, {
    Base: require('./base'),
    Memory: require('./memory')
});

