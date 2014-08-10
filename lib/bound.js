/**
 * @typedef BoundJGLEvaluator~PathValue
 * @type {module:JGLEvaluator~PathValue}
 */
/**
 * @class BoundJGLEvaluator
 * @extends JGLEvaluator
 */
/**
 * @method BoundJGLEvaluator#get
 * @param {Rx.Observable<module:JGLEvaluator~Query>} [obs] An observable of paths
 * @param {...module:JGLEvaluator~Query} [path] One or more paths to retrieve
 * @returns {Rx.Observable<BoundJGLEvaluator~PathValue>}
 */
/**
 * @method BoundJGLEvaluator#set
 * @param {Rx.Observable<module:JGLEvaluator~PathValue>} [obs] An observable of path values
 * @param {...module:JGLEvaluator~PathValue} [pv] One or more path-values to set
 * @returns {Rx.Observable<BoundJGLEvaluator~PathValue>}
 */
/**
 * @method BoundJGLEvaluator#del
 * @param {Rx.Observable<module:JGLEvaluator~Query>} [obs] An observable of paths
 * @param {...module:JGLEvaluator~Query} [path] One or more paths to delete
 * @returns {Rx.Observable<BoundJGLEvaluator~PathValue>}
 */
