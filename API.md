#Index

**Modules**

* [JGLEvaluator](#module_JGLEvaluator)
  * [JGLEvaluator.Base](#module_JGLEvaluator.Base)
  * [JGLEvaluator.Memory](#module_JGLEvaluator.Memory)
  * [JGLEvaluator.Pattern](#module_JGLEvaluator.Pattern)
  * [JGLEvaluator.Cached](#module_JGLEvaluator.Cached)
  * [type: JGLEvaluator~Range](#module_JGLEvaluator..Range)
  * [type: JGLEvaluator~PathSegment](#module_JGLEvaluator..PathSegment)
  * [type: JGLEvaluator~QueryKey](#module_JGLEvaluator..QueryKey)
  * [type: JGLEvaluator~QuerySegment](#module_JGLEvaluator..QuerySegment)
  * [type: JGLEvaluator~Query](#module_JGLEvaluator..Query)
  * [type: JGLEvaluator~Path](#module_JGLEvaluator..Path)
  * [type: JGLEvaluator~Value](#module_JGLEvaluator..Value)
  * [type: JGLEvaluator~PathValue](#module_JGLEvaluator..PathValue)

**Classes**

* [class: JGLEvaluator](#JGLEvaluator)
  * [new JGLEvaluator([path])](#new_JGLEvaluator)
  * [jGLEvaluator.path](#JGLEvaluator#path)
  * [jGLEvaluator.bind(path)](#JGLEvaluator#bind)
  * [jGLEvaluator.get([obs], [...path])](#JGLEvaluator#get)
  * [jGLEvaluator.set([...pv], [obs])](#JGLEvaluator#set)
  * [jGLEvaluator.del([obs], [...path])](#JGLEvaluator#del)
  * [jGLEvaluator.destroy()](#JGLEvaluator#destroy)
* [class: BoundJGLEvaluator](#BoundJGLEvaluator)
  * [boundJGLEvaluator.path](#BoundJGLEvaluator#path)
  * [boundJGLEvaluator.get([obs], [...path])](#BoundJGLEvaluator#get)
  * [boundJGLEvaluator.set([obs], [...pv])](#BoundJGLEvaluator#set)
  * [boundJGLEvaluator.del([obs], [...path])](#BoundJGLEvaluator#del)
  * [boundJGLEvaluator.bind(path)](#BoundJGLEvaluator#bind)
  * [boundJGLEvaluator.destroy()](#BoundJGLEvaluator#destroy)
  * [type: BoundJGLEvaluator~PathValue](#BoundJGLEvaluator..PathValue)
* [class: CachedJGLEvaluator](#CachedJGLEvaluator)
  * [new CachedJGLEvaluator(opts)](#new_CachedJGLEvaluator)
  * [cachedJGLEvaluator.path](#CachedJGLEvaluator#path)
  * [cachedJGLEvaluator.bind(path)](#CachedJGLEvaluator#bind)
  * [cachedJGLEvaluator.get([obs], [...path])](#CachedJGLEvaluator#get)
  * [cachedJGLEvaluator.set([...pv], [obs])](#CachedJGLEvaluator#set)
  * [cachedJGLEvaluator.del([obs], [...path])](#CachedJGLEvaluator#del)
  * [cachedJGLEvaluator.destroy()](#CachedJGLEvaluator#destroy)
* [class: MemoryJGLEvaluator](#MemoryJGLEvaluator)
  * [new MemoryJGLEvaluator([graph], [path])](#new_MemoryJGLEvaluator)
  * [memoryJGLEvaluator.graph](#MemoryJGLEvaluator#graph)
  * [memoryJGLEvaluator.path](#MemoryJGLEvaluator#path)
  * [memoryJGLEvaluator.destroy()](#MemoryJGLEvaluator#destroy)
  * [memoryJGLEvaluator.bind(path)](#MemoryJGLEvaluator#bind)
  * [memoryJGLEvaluator.get([obs], [...path])](#MemoryJGLEvaluator#get)
  * [memoryJGLEvaluator.set([...pv], [obs])](#MemoryJGLEvaluator#set)
  * [memoryJGLEvaluator.del([obs], [...path])](#MemoryJGLEvaluator#del)
* [class: PatternJGLEvaluatorHandler](#PatternJGLEvaluatorHandler)
  * [new PatternJGLEvaluatorHandler(method, pattern, action)](#new_PatternJGLEvaluatorHandler)
  * [patternJGLEvaluatorHandler.method](#PatternJGLEvaluatorHandler#method)
  * [patternJGLEvaluatorHandler.pattern](#PatternJGLEvaluatorHandler#pattern)
  * [patternJGLEvaluatorHandler.parser](#PatternJGLEvaluatorHandler#parser)
  * [patternJGLEvaluatorHandler.run(query, [value])](#PatternJGLEvaluatorHandler#run)
  * [patternJGLEvaluatorHandler.match(method, query)](#PatternJGLEvaluatorHandler#match)
  * [const: PatternJGLEvaluatorHandler.GET](#PatternJGLEvaluatorHandler.GET)
  * [const: PatternJGLEvaluatorHandler.SET](#PatternJGLEvaluatorHandler.SET)
  * [const: PatternJGLEvaluatorHandler.DEL](#PatternJGLEvaluatorHandler.DEL)
  * [callback: PatternJGLEvaluatorHandler~Action](#PatternJGLEvaluatorHandler..Action)
  * [type: PatternJGLEvaluatorHandler~Method](#PatternJGLEvaluatorHandler..Method)
* [class: PatternJGLEvaluator](#PatternJGLEvaluator)
  * [new PatternJGLEvaluator(...handler)](#new_PatternJGLEvaluator)
  * [PatternJGLEvaluator.Parser](#PatternJGLEvaluator.Parser)
  * [PatternJGLEvaluator.Handler](#PatternJGLEvaluator.Handler)
  * [patternJGLEvaluator.path](#PatternJGLEvaluator#path)
  * [patternJGLEvaluator.handle(handlerOrMethod, [pattern], [action])](#PatternJGLEvaluator#handle)
  * [patternJGLEvaluator.bind(path)](#PatternJGLEvaluator#bind)
  * [patternJGLEvaluator.get([obs], [...path])](#PatternJGLEvaluator#get)
  * [patternJGLEvaluator.set([...pv], [obs])](#PatternJGLEvaluator#set)
  * [patternJGLEvaluator.del([obs], [...path])](#PatternJGLEvaluator#del)
  * [patternJGLEvaluator.destroy()](#PatternJGLEvaluator#destroy)
* [class: PatternJGLEvaluatorParser](#PatternJGLEvaluatorParser)
  * [new PatternJGLEvaluatorParser(...segment)](#new_PatternJGLEvaluatorParser)
  * [patternJGLEvaluatorParser.segments](#PatternJGLEvaluatorParser#segments)
  * [PatternJGLEvaluatorParser.isInteger(val)](#PatternJGLEvaluatorParser.isInteger)
  * [PatternJGLEvaluatorParser.isIntegers(val)](#PatternJGLEvaluatorParser.isIntegers)
  * [PatternJGLEvaluatorParser.isRange(val)](#PatternJGLEvaluatorParser.isRange)
  * [PatternJGLEvaluatorParser.isIntegersOrRange(val)](#PatternJGLEvaluatorParser.isIntegersOrRange)
  * [PatternJGLEvaluatorParser.isKey(val)](#PatternJGLEvaluatorParser.isKey)
  * [PatternJGLEvaluatorParser.isKeys(val)](#PatternJGLEvaluatorParser.isKeys)
  * [patternJGLEvaluatorParser.match(query)](#PatternJGLEvaluatorParser#match)
  * [const: PatternJGLEvaluatorParser.KEYS](#PatternJGLEvaluatorParser.KEYS)
  * [const: PatternJGLEvaluatorParser.INTEGERS](#PatternJGLEvaluatorParser.INTEGERS)
  * [type: PatternJGLEvaluatorParser~Argument](#PatternJGLEvaluatorParser..Argument)
  * [type: PatternJGLEvaluatorParser~Pattern](#PatternJGLEvaluatorParser..Pattern)
 
<a name="module_JGLEvaluator"></a>
#JGLEvaluator
**Members**

* [JGLEvaluator](#module_JGLEvaluator)
  * [JGLEvaluator.Base](#module_JGLEvaluator.Base)
  * [JGLEvaluator.Memory](#module_JGLEvaluator.Memory)
  * [JGLEvaluator.Pattern](#module_JGLEvaluator.Pattern)
  * [JGLEvaluator.Cached](#module_JGLEvaluator.Cached)
  * [type: JGLEvaluator~Range](#module_JGLEvaluator..Range)
  * [type: JGLEvaluator~PathSegment](#module_JGLEvaluator..PathSegment)
  * [type: JGLEvaluator~QueryKey](#module_JGLEvaluator..QueryKey)
  * [type: JGLEvaluator~QuerySegment](#module_JGLEvaluator..QuerySegment)
  * [type: JGLEvaluator~Query](#module_JGLEvaluator..Query)
  * [type: JGLEvaluator~Path](#module_JGLEvaluator..Path)
  * [type: JGLEvaluator~Value](#module_JGLEvaluator..Value)
  * [type: JGLEvaluator~PathValue](#module_JGLEvaluator..PathValue)

<a name="module_JGLEvaluator.Base"></a>
##JGLEvaluator.Base
<a name="module_JGLEvaluator.Memory"></a>
##JGLEvaluator.Memory
<a name="module_JGLEvaluator.Pattern"></a>
##JGLEvaluator.Pattern
<a name="module_JGLEvaluator.Cached"></a>
##JGLEvaluator.Cached
<a name="module_JGLEvaluator..Range"></a>
##type: JGLEvaluator~Range
An object that can be expanded into a series of indices

**Scope**: inner typedef of [JGLEvaluator](#module_JGLEvaluator)  
**Type**: `Object`  
<a name="module_JGLEvaluator..PathSegment"></a>
##type: JGLEvaluator~PathSegment
The smallest part of a concrete path

**Scope**: inner typedef of [JGLEvaluator](#module_JGLEvaluator)  
**Type**: `Integer` | `String`  
<a name="module_JGLEvaluator..QueryKey"></a>
##type: JGLEvaluator~QueryKey
The smallest part of a complex query

**Scope**: inner typedef of [JGLEvaluator](#module_JGLEvaluator)  
**Type**: [PathSegment](#module_JGLEvaluator..PathSegment) | [Range](#module_JGLEvaluator..Range)  
<a name="module_JGLEvaluator..QuerySegment"></a>
##type: JGLEvaluator~QuerySegment
A query segment can contain one or more query keys

**Scope**: inner typedef of [JGLEvaluator](#module_JGLEvaluator)  
**Type**: [QueryKey](#module_JGLEvaluator..QueryKey) | [Array.&lt;QueryKey&gt;](#module_JGLEvaluator..QueryKey)  
<a name="module_JGLEvaluator..Query"></a>
##type: JGLEvaluator~Query
A complex path query that can be expanded to get multiple concrete paths

**Scope**: inner typedef of [JGLEvaluator](#module_JGLEvaluator)  
**Type**: [Array.&lt;QuerySegment&gt;](#module_JGLEvaluator..QuerySegment)  
<a name="module_JGLEvaluator..Path"></a>
##type: JGLEvaluator~Path
A concrete path. i.e: One that can not be expanded further.

**Scope**: inner typedef of [JGLEvaluator](#module_JGLEvaluator)  
**Type**: [Array.&lt;PathSegment&gt;](#module_JGLEvaluator..PathSegment)  
<a name="module_JGLEvaluator..Value"></a>
##type: JGLEvaluator~Value
**Scope**: inner typedef of [JGLEvaluator](#module_JGLEvaluator)  
**Type**: `Mixed` | `Error`  
<a name="module_JGLEvaluator..PathValue"></a>
##type: JGLEvaluator~PathValue
**Scope**: inner typedef of [JGLEvaluator](#module_JGLEvaluator)  
**Type**: `Object`  
<a name="JGLEvaluator"></a>
#class: JGLEvaluator
**Members**

* [class: JGLEvaluator](#JGLEvaluator)
  * [new JGLEvaluator([path])](#new_JGLEvaluator)
  * [jGLEvaluator.path](#JGLEvaluator#path)
  * [jGLEvaluator.bind(path)](#JGLEvaluator#bind)
  * [jGLEvaluator.get([obs], [...path])](#JGLEvaluator#get)
  * [jGLEvaluator.set([...pv], [obs])](#JGLEvaluator#set)
  * [jGLEvaluator.del([obs], [...path])](#JGLEvaluator#del)
  * [jGLEvaluator.destroy()](#JGLEvaluator#destroy)

<a name="new_JGLEvaluator"></a>
##new JGLEvaluator([path])
**Params**

- \[path=[]\] <code>[Query](#module_JGLEvaluator..Query)</code> - Optional path to pre-bind to.  

<a name="JGLEvaluator#path"></a>
##jGLEvaluator.path
<a name="JGLEvaluator#bind"></a>
##jGLEvaluator.bind(path)
**Params**

- path <code>[Query](#module_JGLEvaluator..Query)</code> - The path to bind to  

**Returns**: [BoundJGLEvaluator](#BoundJGLEvaluator) - An JGLEvaluator bound to the given path  
<a name="JGLEvaluator#get"></a>
##jGLEvaluator.get([obs], [...path])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;Query&gt;](#module_JGLEvaluator..Query)</code> - An observable of paths  
- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to retrieve  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLEvaluator#set"></a>
##jGLEvaluator.set([...pv], [obs])
**Params**

- \[...pv\] <code>[PathValue](#module_JGLEvaluator..PathValue)</code> - One or more path-values to set  
- \[obs\] <code>[Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)</code> - An observable of path values  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLEvaluator#del"></a>
##jGLEvaluator.del([obs], [...path])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;Query&gt;](#module_JGLEvaluator..Query)</code> - An observable of paths  
- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLEvaluator#destroy"></a>
##jGLEvaluator.destroy()
<a name="BoundJGLEvaluator"></a>
#class: BoundJGLEvaluator
**Extends**: `JGLEvaluator`  
**Members**

* [class: BoundJGLEvaluator](#BoundJGLEvaluator)
  * [boundJGLEvaluator.path](#BoundJGLEvaluator#path)
  * [boundJGLEvaluator.get([obs], [...path])](#BoundJGLEvaluator#get)
  * [boundJGLEvaluator.set([obs], [...pv])](#BoundJGLEvaluator#set)
  * [boundJGLEvaluator.del([obs], [...path])](#BoundJGLEvaluator#del)
  * [boundJGLEvaluator.bind(path)](#BoundJGLEvaluator#bind)
  * [boundJGLEvaluator.destroy()](#BoundJGLEvaluator#destroy)
  * [type: BoundJGLEvaluator~PathValue](#BoundJGLEvaluator..PathValue)

<a name="BoundJGLEvaluator#path"></a>
##boundJGLEvaluator.path
<a name="BoundJGLEvaluator#get"></a>
##boundJGLEvaluator.get([obs], [...path])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;Query&gt;](#module_JGLEvaluator..Query)</code> - An observable of paths  
- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to retrieve  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#BoundJGLEvaluator..PathValue)  
<a name="BoundJGLEvaluator#set"></a>
##boundJGLEvaluator.set([obs], [...pv])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)</code> - An observable of path values  
- \[...pv\] <code>[PathValue](#module_JGLEvaluator..PathValue)</code> - One or more path-values to set  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#BoundJGLEvaluator..PathValue)  
<a name="BoundJGLEvaluator#del"></a>
##boundJGLEvaluator.del([obs], [...path])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;Query&gt;](#module_JGLEvaluator..Query)</code> - An observable of paths  
- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#BoundJGLEvaluator..PathValue)  
<a name="BoundJGLEvaluator#bind"></a>
##boundJGLEvaluator.bind(path)
**Params**

- path <code>[Query](#module_JGLEvaluator..Query)</code> - The path to bind to  

**Returns**: [BoundJGLEvaluator](#BoundJGLEvaluator) - An JGLEvaluator bound to the given path  
<a name="BoundJGLEvaluator#destroy"></a>
##boundJGLEvaluator.destroy()
<a name="BoundJGLEvaluator..PathValue"></a>
##type: BoundJGLEvaluator~PathValue
**Scope**: inner typedef of [BoundJGLEvaluator](#BoundJGLEvaluator)  
**Type**: [PathValue](#module_JGLEvaluator..PathValue)  
<a name="CachedJGLEvaluator"></a>
#class: CachedJGLEvaluator
**Extends**: `JGLEvaluator`  
**Members**

* [class: CachedJGLEvaluator](#CachedJGLEvaluator)
  * [new CachedJGLEvaluator(opts)](#new_CachedJGLEvaluator)
  * [cachedJGLEvaluator.path](#CachedJGLEvaluator#path)
  * [cachedJGLEvaluator.bind(path)](#CachedJGLEvaluator#bind)
  * [cachedJGLEvaluator.get([obs], [...path])](#CachedJGLEvaluator#get)
  * [cachedJGLEvaluator.set([...pv], [obs])](#CachedJGLEvaluator#set)
  * [cachedJGLEvaluator.del([obs], [...path])](#CachedJGLEvaluator#del)
  * [cachedJGLEvaluator.destroy()](#CachedJGLEvaluator#destroy)

<a name="new_CachedJGLEvaluator"></a>
##new CachedJGLEvaluator(opts)
**Params**

- opts `Object`  
  - cache <code>[JGLEvaluator](#JGLEvaluator)</code>  
  - proxy <code>[JGLEvaluator](#JGLEvaluator)</code>  

**Extends**: `JGLEvaluator`  
<a name="CachedJGLEvaluator#path"></a>
##cachedJGLEvaluator.path
<a name="CachedJGLEvaluator#bind"></a>
##cachedJGLEvaluator.bind(path)
**Params**

- path <code>[Query](#module_JGLEvaluator..Query)</code> - The path to bind to  

**Returns**: [BoundJGLEvaluator](#BoundJGLEvaluator) - An JGLEvaluator bound to the given path  
<a name="CachedJGLEvaluator#get"></a>
##cachedJGLEvaluator.get([obs], [...path])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;Query&gt;](#module_JGLEvaluator..Query)</code> - An observable of paths  
- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to retrieve  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="CachedJGLEvaluator#set"></a>
##cachedJGLEvaluator.set([...pv], [obs])
**Params**

- \[...pv\] <code>[PathValue](#module_JGLEvaluator..PathValue)</code> - One or more path-values to set  
- \[obs\] <code>[Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)</code> - An observable of path values  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="CachedJGLEvaluator#del"></a>
##cachedJGLEvaluator.del([obs], [...path])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;Query&gt;](#module_JGLEvaluator..Query)</code> - An observable of paths  
- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="CachedJGLEvaluator#destroy"></a>
##cachedJGLEvaluator.destroy()
<a name="MemoryJGLEvaluator"></a>
#class: MemoryJGLEvaluator
**Extends**: `JGLEvaluator`  
**Members**

* [class: MemoryJGLEvaluator](#MemoryJGLEvaluator)
  * [new MemoryJGLEvaluator([graph], [path])](#new_MemoryJGLEvaluator)
  * [memoryJGLEvaluator.graph](#MemoryJGLEvaluator#graph)
  * [memoryJGLEvaluator.path](#MemoryJGLEvaluator#path)
  * [memoryJGLEvaluator.destroy()](#MemoryJGLEvaluator#destroy)
  * [memoryJGLEvaluator.bind(path)](#MemoryJGLEvaluator#bind)
  * [memoryJGLEvaluator.get([obs], [...path])](#MemoryJGLEvaluator#get)
  * [memoryJGLEvaluator.set([...pv], [obs])](#MemoryJGLEvaluator#set)
  * [memoryJGLEvaluator.del([obs], [...path])](#MemoryJGLEvaluator#del)

<a name="new_MemoryJGLEvaluator"></a>
##new MemoryJGLEvaluator([graph], [path])
**Params**

- \[graph={}\] `Object`  
- \[path=[]\] `Object`  

**Extends**: `JGLEvaluator`  
<a name="MemoryJGLEvaluator#graph"></a>
##memoryJGLEvaluator.graph
**Default**: `{}`  
<a name="MemoryJGLEvaluator#path"></a>
##memoryJGLEvaluator.path
<a name="MemoryJGLEvaluator#destroy"></a>
##memoryJGLEvaluator.destroy()
<a name="MemoryJGLEvaluator#bind"></a>
##memoryJGLEvaluator.bind(path)
**Params**

- path <code>[Query](#module_JGLEvaluator..Query)</code> - The path to bind to  

**Returns**: [BoundJGLEvaluator](#BoundJGLEvaluator) - An JGLEvaluator bound to the given path  
<a name="MemoryJGLEvaluator#get"></a>
##memoryJGLEvaluator.get([obs], [...path])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;Query&gt;](#module_JGLEvaluator..Query)</code> - An observable of paths  
- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to retrieve  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="MemoryJGLEvaluator#set"></a>
##memoryJGLEvaluator.set([...pv], [obs])
**Params**

- \[...pv\] <code>[PathValue](#module_JGLEvaluator..PathValue)</code> - One or more path-values to set  
- \[obs\] <code>[Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)</code> - An observable of path values  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="MemoryJGLEvaluator#del"></a>
##memoryJGLEvaluator.del([obs], [...path])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;Query&gt;](#module_JGLEvaluator..Query)</code> - An observable of paths  
- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="PatternJGLEvaluatorHandler"></a>
#class: PatternJGLEvaluatorHandler
**Members**

* [class: PatternJGLEvaluatorHandler](#PatternJGLEvaluatorHandler)
  * [new PatternJGLEvaluatorHandler(method, pattern, action)](#new_PatternJGLEvaluatorHandler)
  * [patternJGLEvaluatorHandler.method](#PatternJGLEvaluatorHandler#method)
  * [patternJGLEvaluatorHandler.pattern](#PatternJGLEvaluatorHandler#pattern)
  * [patternJGLEvaluatorHandler.parser](#PatternJGLEvaluatorHandler#parser)
  * [patternJGLEvaluatorHandler.run(query, [value])](#PatternJGLEvaluatorHandler#run)
  * [patternJGLEvaluatorHandler.match(method, query)](#PatternJGLEvaluatorHandler#match)
  * [const: PatternJGLEvaluatorHandler.GET](#PatternJGLEvaluatorHandler.GET)
  * [const: PatternJGLEvaluatorHandler.SET](#PatternJGLEvaluatorHandler.SET)
  * [const: PatternJGLEvaluatorHandler.DEL](#PatternJGLEvaluatorHandler.DEL)
  * [callback: PatternJGLEvaluatorHandler~Action](#PatternJGLEvaluatorHandler..Action)
  * [type: PatternJGLEvaluatorHandler~Method](#PatternJGLEvaluatorHandler..Method)

<a name="new_PatternJGLEvaluatorHandler"></a>
##new PatternJGLEvaluatorHandler(method, pattern, action)
**Params**

- method <code>[Method](#PatternJGLEvaluatorHandler..Method)</code>  
- pattern <code>[Pattern](#PatternJGLEvaluatorParser..Pattern)</code>  
- action <code>[Action](#PatternJGLEvaluatorHandler..Action)</code>  

<a name="PatternJGLEvaluatorHandler#method"></a>
##patternJGLEvaluatorHandler.method
The method to use: 'get', 'set', or 'del'

<a name="PatternJGLEvaluatorHandler#pattern"></a>
##patternJGLEvaluatorHandler.pattern
The un-parsed pattern

<a name="PatternJGLEvaluatorHandler#parser"></a>
##patternJGLEvaluatorHandler.parser
The [PatternJGLEvaluatorParser](#PatternJGLEvaluatorParser) instance used for determining if the
handler handles a particular query

<a name="PatternJGLEvaluatorHandler#run"></a>
##patternJGLEvaluatorHandler.run(query, [value])
**Params**

- query `Array.<Array.<(Integer|String)>>`  
- \[value\] `Mixed`  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="PatternJGLEvaluatorHandler#match"></a>
##patternJGLEvaluatorHandler.match(method, query)
**Params**

- method `String`  
- query <code>[Query](#module_JGLEvaluator..Query)</code>  

**Returns**: `Array.<Array.<(String|Integer)>>`  
<a name="PatternJGLEvaluatorHandler.GET"></a>
##const: PatternJGLEvaluatorHandler.GET
<a name="PatternJGLEvaluatorHandler.SET"></a>
##const: PatternJGLEvaluatorHandler.SET
<a name="PatternJGLEvaluatorHandler.DEL"></a>
##const: PatternJGLEvaluatorHandler.DEL
<a name="PatternJGLEvaluatorHandler..Action"></a>
##callback: PatternJGLEvaluatorHandler~Action
**Params**

- query `Array.<Array.<(Integer|String)>>`  
- \[value\] `Mixed`  

**Scope**: inner typedef of [PatternJGLEvaluatorHandler](#PatternJGLEvaluatorHandler)  
**Type**: `function`  
**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="PatternJGLEvaluatorHandler..Method"></a>
##type: PatternJGLEvaluatorHandler~Method
**Scope**: inner typedef of [PatternJGLEvaluatorHandler](#PatternJGLEvaluatorHandler)  
**Type**: [GET](#PatternJGLEvaluatorHandler.GET) | [SET](#PatternJGLEvaluatorHandler.SET) | [DEL](#PatternJGLEvaluatorHandler.DEL)  
<a name="PatternJGLEvaluator"></a>
#class: PatternJGLEvaluator
**Extends**: `JGLEvaluator`  
**Members**

* [class: PatternJGLEvaluator](#PatternJGLEvaluator)
  * [new PatternJGLEvaluator(...handler)](#new_PatternJGLEvaluator)
  * [PatternJGLEvaluator.Parser](#PatternJGLEvaluator.Parser)
  * [PatternJGLEvaluator.Handler](#PatternJGLEvaluator.Handler)
  * [patternJGLEvaluator.path](#PatternJGLEvaluator#path)
  * [patternJGLEvaluator.handle(handlerOrMethod, [pattern], [action])](#PatternJGLEvaluator#handle)
  * [patternJGLEvaluator.bind(path)](#PatternJGLEvaluator#bind)
  * [patternJGLEvaluator.get([obs], [...path])](#PatternJGLEvaluator#get)
  * [patternJGLEvaluator.set([...pv], [obs])](#PatternJGLEvaluator#set)
  * [patternJGLEvaluator.del([obs], [...path])](#PatternJGLEvaluator#del)
  * [patternJGLEvaluator.destroy()](#PatternJGLEvaluator#destroy)

<a name="new_PatternJGLEvaluator"></a>
##new PatternJGLEvaluator(...handler)
**Params**

- ...handler <code>[PatternJGLEvaluatorHandler](#PatternJGLEvaluatorHandler)</code>  

**Extends**: `JGLEvaluator`  
<a name="PatternJGLEvaluator.Parser"></a>
##PatternJGLEvaluator.Parser
<a name="PatternJGLEvaluator.Handler"></a>
##PatternJGLEvaluator.Handler
<a name="PatternJGLEvaluator#path"></a>
##patternJGLEvaluator.path
<a name="PatternJGLEvaluator#handle"></a>
##patternJGLEvaluator.handle(handlerOrMethod, [pattern], [action])
Add a new handler for a JGLEvaluatorEndPoint

**Params**

- handlerOrMethod <code>[PatternJGLEvaluatorHandler](#PatternJGLEvaluatorHandler)</code> | <code>[Method](#PatternJGLEvaluatorHandler..Method)</code>  
- \[pattern\] <code>[Pattern](#PatternJGLEvaluatorParser..Pattern)</code>  
- \[action\] <code>[Action](#PatternJGLEvaluatorHandler..Action)</code>  

**Returns**: [PatternJGLEvaluator](#PatternJGLEvaluator) - The current instance  
<a name="PatternJGLEvaluator#bind"></a>
##patternJGLEvaluator.bind(path)
**Params**

- path <code>[Query](#module_JGLEvaluator..Query)</code> - The path to bind to  

**Returns**: [BoundJGLEvaluator](#BoundJGLEvaluator) - An JGLEvaluator bound to the given path  
<a name="PatternJGLEvaluator#get"></a>
##patternJGLEvaluator.get([obs], [...path])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;Query&gt;](#module_JGLEvaluator..Query)</code> - An observable of paths  
- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to retrieve  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="PatternJGLEvaluator#set"></a>
##patternJGLEvaluator.set([...pv], [obs])
**Params**

- \[...pv\] <code>[PathValue](#module_JGLEvaluator..PathValue)</code> - One or more path-values to set  
- \[obs\] <code>[Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)</code> - An observable of path values  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="PatternJGLEvaluator#del"></a>
##patternJGLEvaluator.del([obs], [...path])
**Params**

- \[obs\] <code>[Rx.Observable.&lt;Query&gt;](#module_JGLEvaluator..Query)</code> - An observable of paths  
- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="PatternJGLEvaluator#destroy"></a>
##patternJGLEvaluator.destroy()
<a name="PatternJGLEvaluatorParser"></a>
#class: PatternJGLEvaluatorParser
**Members**

* [class: PatternJGLEvaluatorParser](#PatternJGLEvaluatorParser)
  * [new PatternJGLEvaluatorParser(...segment)](#new_PatternJGLEvaluatorParser)
  * [patternJGLEvaluatorParser.segments](#PatternJGLEvaluatorParser#segments)
  * [PatternJGLEvaluatorParser.isInteger(val)](#PatternJGLEvaluatorParser.isInteger)
  * [PatternJGLEvaluatorParser.isIntegers(val)](#PatternJGLEvaluatorParser.isIntegers)
  * [PatternJGLEvaluatorParser.isRange(val)](#PatternJGLEvaluatorParser.isRange)
  * [PatternJGLEvaluatorParser.isIntegersOrRange(val)](#PatternJGLEvaluatorParser.isIntegersOrRange)
  * [PatternJGLEvaluatorParser.isKey(val)](#PatternJGLEvaluatorParser.isKey)
  * [PatternJGLEvaluatorParser.isKeys(val)](#PatternJGLEvaluatorParser.isKeys)
  * [patternJGLEvaluatorParser.match(query)](#PatternJGLEvaluatorParser#match)
  * [const: PatternJGLEvaluatorParser.KEYS](#PatternJGLEvaluatorParser.KEYS)
  * [const: PatternJGLEvaluatorParser.INTEGERS](#PatternJGLEvaluatorParser.INTEGERS)
  * [type: PatternJGLEvaluatorParser~Argument](#PatternJGLEvaluatorParser..Argument)
  * [type: PatternJGLEvaluatorParser~Pattern](#PatternJGLEvaluatorParser..Pattern)

<a name="new_PatternJGLEvaluatorParser"></a>
##new PatternJGLEvaluatorParser(...segment)
**Params**

- ...segment <code>[Argument](#PatternJGLEvaluatorParser..Argument)</code>  

<a name="PatternJGLEvaluatorParser#segments"></a>
##patternJGLEvaluatorParser.segments
<a name="PatternJGLEvaluatorParser.isInteger"></a>
##PatternJGLEvaluatorParser.isInteger(val)
Determines if the given value is an integer.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternJGLEvaluatorParser.isIntegers"></a>
##PatternJGLEvaluatorParser.isIntegers(val)
Determines if the given value is an array of integers.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternJGLEvaluatorParser.isRange"></a>
##PatternJGLEvaluatorParser.isRange(val)
Determines is the given value is a range.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternJGLEvaluatorParser.isIntegersOrRange"></a>
##PatternJGLEvaluatorParser.isIntegersOrRange(val)
Determines if the given value is an integer or a range

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternJGLEvaluatorParser.isKey"></a>
##PatternJGLEvaluatorParser.isKey(val)
Determines is the given value is a string key

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternJGLEvaluatorParser.isKeys"></a>
##PatternJGLEvaluatorParser.isKeys(val)
Determines if the given val is an array of keys.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternJGLEvaluatorParser#match"></a>
##patternJGLEvaluatorParser.match(query)
Takes in a [Query](#module_JGLEvaluator..Query) and returns a list of keys matched for
each segment of the query. If the parser does not match the query, false is
returned.

**Params**

- query <code>[Query](#module_JGLEvaluator..Query)</code>  

**Returns**: `Array.<Array.<(String|Integer)>>` | `Boolean`  
<a name="PatternJGLEvaluatorParser.KEYS"></a>
##const: PatternJGLEvaluatorParser.KEYS
<a name="PatternJGLEvaluatorParser.INTEGERS"></a>
##const: PatternJGLEvaluatorParser.INTEGERS
<a name="PatternJGLEvaluatorParser..Argument"></a>
##type: PatternJGLEvaluatorParser~Argument
**Scope**: inner typedef of [PatternJGLEvaluatorParser](#PatternJGLEvaluatorParser)  
**Type**: `String` | `Array.<String>` | `Integer` | `Array.<Integer>` | [Range](#module_JGLEvaluator..Range) | [KEYS](#PatternJGLEvaluatorParser.KEYS) | [INTEGERS](#PatternJGLEvaluatorParser.INTEGERS)  
<a name="PatternJGLEvaluatorParser..Pattern"></a>
##type: PatternJGLEvaluatorParser~Pattern
**Scope**: inner typedef of [PatternJGLEvaluatorParser](#PatternJGLEvaluatorParser)  
**Type**: [Array.&lt;Argument&gt;](#PatternJGLEvaluatorParser..Argument)  
