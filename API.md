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
  * [type: JGLEvaluator~PathValue](#module_JGLEvaluator..PathValue)

**Classes**

* [class: JGLEvaluator](#JGLEvaluator)
  * [jGLEvaluator.get([...path])](#JGLEvaluator#get)
  * [jGLEvaluator.set([...pv])](#JGLEvaluator#set)
  * [jGLEvaluator.del([...path])](#JGLEvaluator#del)
  * [jGLEvaluator.bind(path)](#JGLEvaluator#bind)
  * [jGLEvaluator.destroy()](#JGLEvaluator#destroy)
* [class: JGLCachedEvaluator](#JGLCachedEvaluator)
  * [new JGLCachedEvaluator(opts)](#new_JGLCachedEvaluator)
  * [jGLCachedEvaluator.get([...path])](#JGLCachedEvaluator#get)
  * [jGLCachedEvaluator.set([...pv])](#JGLCachedEvaluator#set)
  * [jGLCachedEvaluator.del([...path])](#JGLCachedEvaluator#del)
  * [jGLCachedEvaluator.bind(path)](#JGLCachedEvaluator#bind)
  * [jGLCachedEvaluator.destroy()](#JGLCachedEvaluator#destroy)
* [class: JGLMemoryEvaluator](#JGLMemoryEvaluator)
  * [new JGLMemoryEvaluator([graph])](#new_JGLMemoryEvaluator)
  * [jGLMemoryEvaluator.graph](#JGLMemoryEvaluator#graph)
  * [jGLMemoryEvaluator.destroy()](#JGLMemoryEvaluator#destroy)
  * [jGLMemoryEvaluator.get([...path])](#JGLMemoryEvaluator#get)
  * [jGLMemoryEvaluator.set([...pv])](#JGLMemoryEvaluator#set)
  * [jGLMemoryEvaluator.del([...path])](#JGLMemoryEvaluator#del)
  * [jGLMemoryEvaluator.bind(path)](#JGLMemoryEvaluator#bind)
* [class: JGLPatternEvaluatorHandler](#JGLPatternEvaluatorHandler)
  * [new JGLPatternEvaluatorHandler(method, pattern, action)](#new_JGLPatternEvaluatorHandler)
  * [jGLPatternEvaluatorHandler.method](#JGLPatternEvaluatorHandler#method)
  * [jGLPatternEvaluatorHandler.pattern](#JGLPatternEvaluatorHandler#pattern)
  * [jGLPatternEvaluatorHandler.parser](#JGLPatternEvaluatorHandler#parser)
  * [jGLPatternEvaluatorHandler.run(query, [value])](#JGLPatternEvaluatorHandler#run)
  * [jGLPatternEvaluatorHandler.match(method, query)](#JGLPatternEvaluatorHandler#match)
  * [const: JGLPatternEvaluatorHandler.GET](#JGLPatternEvaluatorHandler.GET)
  * [const: JGLPatternEvaluatorHandler.SET](#JGLPatternEvaluatorHandler.SET)
  * [const: JGLPatternEvaluatorHandler.DEL](#JGLPatternEvaluatorHandler.DEL)
  * [callback: JGLPatternEvaluatorHandler~Action](#JGLPatternEvaluatorHandler..Action)
  * [type: JGLPatternEvaluatorHandler~Method](#JGLPatternEvaluatorHandler..Method)
* [class: JGLPatternEvaluator](#JGLPatternEvaluator)
  * [new JGLPatternEvaluator(...handler)](#new_JGLPatternEvaluator)
  * [JGLPatternEvaluator.Parser](#JGLPatternEvaluator.Parser)
  * [JGLPatternEvaluator.Handler](#JGLPatternEvaluator.Handler)
  * [jGLPatternEvaluator.handle(handlerOrMethod, [pattern], [action])](#JGLPatternEvaluator#handle)
  * [jGLPatternEvaluator.get([...path])](#JGLPatternEvaluator#get)
  * [jGLPatternEvaluator.set([...pv])](#JGLPatternEvaluator#set)
  * [jGLPatternEvaluator.del([...path])](#JGLPatternEvaluator#del)
  * [jGLPatternEvaluator.bind(path)](#JGLPatternEvaluator#bind)
  * [jGLPatternEvaluator.destroy()](#JGLPatternEvaluator#destroy)
* [class: JGLPatternEvaluatorParser](#JGLPatternEvaluatorParser)
  * [new JGLPatternEvaluatorParser(...segment)](#new_JGLPatternEvaluatorParser)
  * [jGLPatternEvaluatorParser.segments](#JGLPatternEvaluatorParser#segments)
  * [JGLPatternEvaluatorParser.isInteger](#JGLPatternEvaluatorParser.isInteger)
  * [JGLPatternEvaluatorParser.isIntegers](#JGLPatternEvaluatorParser.isIntegers)
  * [JGLPatternEvaluatorParser.isRange](#JGLPatternEvaluatorParser.isRange)
  * [JGLPatternEvaluatorParser.isIntegersOrRange](#JGLPatternEvaluatorParser.isIntegersOrRange)
  * [JGLPatternEvaluatorParser.isKey](#JGLPatternEvaluatorParser.isKey)
  * [JGLPatternEvaluatorParser.isKeys](#JGLPatternEvaluatorParser.isKeys)
  * [jGLPatternEvaluatorParser.match(query)](#JGLPatternEvaluatorParser#match)
  * [const: JGLPatternEvaluatorParser.KEYS](#JGLPatternEvaluatorParser.KEYS)
  * [const: JGLPatternEvaluatorParser.INTEGERS](#JGLPatternEvaluatorParser.INTEGERS)
  * [type: JGLPatternEvaluatorParser~Argument](#JGLPatternEvaluatorParser..Argument)
  * [type: JGLPatternEvaluatorParser~Pattern](#JGLPatternEvaluatorParser..Pattern)
* [class: JGLRelativeEvaluator](#JGLRelativeEvaluator)
  * [new JGLRelativeEvaluator(proxy)](#new_JGLRelativeEvaluator)
  * [jGLRelativeEvaluator.get([...path])](#JGLRelativeEvaluator#get)
  * [jGLRelativeEvaluator.set([...pv])](#JGLRelativeEvaluator#set)
  * [jGLRelativeEvaluator.del([...path])](#JGLRelativeEvaluator#del)
  * [jGLRelativeEvaluator.bind(path)](#JGLRelativeEvaluator#bind)
  * [jGLRelativeEvaluator.destroy()](#JGLRelativeEvaluator#destroy)
 
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
<a name="module_JGLEvaluator..PathValue"></a>
##type: JGLEvaluator~PathValue
**Scope**: inner typedef of [JGLEvaluator](#module_JGLEvaluator)  
**Type**: `Object`  
<a name="JGLEvaluator"></a>
#class: JGLEvaluator
**Members**

* [class: JGLEvaluator](#JGLEvaluator)
  * [jGLEvaluator.get([...path])](#JGLEvaluator#get)
  * [jGLEvaluator.set([...pv])](#JGLEvaluator#set)
  * [jGLEvaluator.del([...path])](#JGLEvaluator#del)
  * [jGLEvaluator.bind(path)](#JGLEvaluator#bind)
  * [jGLEvaluator.destroy()](#JGLEvaluator#destroy)

<a name="JGLEvaluator#get"></a>
##jGLEvaluator.get([...path])
**Params**

- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to retrieve  

**Returns**: `Rx.Observable.<module:JGLEvaluator~PathValues>`  
<a name="JGLEvaluator#set"></a>
##jGLEvaluator.set([...pv])
**Params**

- \[...pv\] <code>[PathValue](#module_JGLEvaluator..PathValue)</code> - One or more path-values to set  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLEvaluator#del"></a>
##jGLEvaluator.del([...path])
**Params**

- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLEvaluator#bind"></a>
##jGLEvaluator.bind(path)
**Params**

- path <code>[Query](#module_JGLEvaluator..Query)</code> - The path to bind to  

**Returns**: [JGLEvaluator](#JGLEvaluator) - An JGLEvaluator bound to the given path  
<a name="JGLEvaluator#destroy"></a>
##jGLEvaluator.destroy()
<a name="JGLCachedEvaluator"></a>
#class: JGLCachedEvaluator
**Extends**: `JGLEvaluator`  
**Members**

* [class: JGLCachedEvaluator](#JGLCachedEvaluator)
  * [new JGLCachedEvaluator(opts)](#new_JGLCachedEvaluator)
  * [jGLCachedEvaluator.get([...path])](#JGLCachedEvaluator#get)
  * [jGLCachedEvaluator.set([...pv])](#JGLCachedEvaluator#set)
  * [jGLCachedEvaluator.del([...path])](#JGLCachedEvaluator#del)
  * [jGLCachedEvaluator.bind(path)](#JGLCachedEvaluator#bind)
  * [jGLCachedEvaluator.destroy()](#JGLCachedEvaluator#destroy)

<a name="new_JGLCachedEvaluator"></a>
##new JGLCachedEvaluator(opts)
**Params**

- opts `Object`  
  - cache <code>[JGLEvaluator](#JGLEvaluator)</code>  
  - proxy <code>[JGLEvaluator](#JGLEvaluator)</code>  

**Extends**: `JGLEvaluator`  
<a name="JGLCachedEvaluator#get"></a>
##jGLCachedEvaluator.get([...path])
**Params**

- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to retrieve  

**Returns**: `Rx.Observable.<module:JGLEvaluator~PathValues>`  
<a name="JGLCachedEvaluator#set"></a>
##jGLCachedEvaluator.set([...pv])
**Params**

- \[...pv\] <code>[PathValue](#module_JGLEvaluator..PathValue)</code> - One or more path-values to set  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLCachedEvaluator#del"></a>
##jGLCachedEvaluator.del([...path])
**Params**

- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLCachedEvaluator#bind"></a>
##jGLCachedEvaluator.bind(path)
**Params**

- path <code>[Query](#module_JGLEvaluator..Query)</code> - The path to bind to  

**Returns**: [JGLEvaluator](#JGLEvaluator) - An JGLEvaluator bound to the given path  
<a name="JGLCachedEvaluator#destroy"></a>
##jGLCachedEvaluator.destroy()
<a name="JGLMemoryEvaluator"></a>
#class: JGLMemoryEvaluator
**Extends**: `JGLEvaluator`  
**Members**

* [class: JGLMemoryEvaluator](#JGLMemoryEvaluator)
  * [new JGLMemoryEvaluator([graph])](#new_JGLMemoryEvaluator)
  * [jGLMemoryEvaluator.graph](#JGLMemoryEvaluator#graph)
  * [jGLMemoryEvaluator.destroy()](#JGLMemoryEvaluator#destroy)
  * [jGLMemoryEvaluator.get([...path])](#JGLMemoryEvaluator#get)
  * [jGLMemoryEvaluator.set([...pv])](#JGLMemoryEvaluator#set)
  * [jGLMemoryEvaluator.del([...path])](#JGLMemoryEvaluator#del)
  * [jGLMemoryEvaluator.bind(path)](#JGLMemoryEvaluator#bind)

<a name="new_JGLMemoryEvaluator"></a>
##new JGLMemoryEvaluator([graph])
**Params**

- \[graph={}\] `Object`  

**Extends**: `JGLEvaluator`  
<a name="JGLMemoryEvaluator#graph"></a>
##jGLMemoryEvaluator.graph
**Default**: `{}`  
<a name="JGLMemoryEvaluator#destroy"></a>
##jGLMemoryEvaluator.destroy()
<a name="JGLMemoryEvaluator#get"></a>
##jGLMemoryEvaluator.get([...path])
**Params**

- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to retrieve  

**Returns**: `Rx.Observable.<module:JGLEvaluator~PathValues>`  
<a name="JGLMemoryEvaluator#set"></a>
##jGLMemoryEvaluator.set([...pv])
**Params**

- \[...pv\] <code>[PathValue](#module_JGLEvaluator..PathValue)</code> - One or more path-values to set  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLMemoryEvaluator#del"></a>
##jGLMemoryEvaluator.del([...path])
**Params**

- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLMemoryEvaluator#bind"></a>
##jGLMemoryEvaluator.bind(path)
**Params**

- path <code>[Query](#module_JGLEvaluator..Query)</code> - The path to bind to  

**Returns**: [JGLEvaluator](#JGLEvaluator) - An JGLEvaluator bound to the given path  
<a name="JGLPatternEvaluatorHandler"></a>
#class: JGLPatternEvaluatorHandler
**Members**

* [class: JGLPatternEvaluatorHandler](#JGLPatternEvaluatorHandler)
  * [new JGLPatternEvaluatorHandler(method, pattern, action)](#new_JGLPatternEvaluatorHandler)
  * [jGLPatternEvaluatorHandler.method](#JGLPatternEvaluatorHandler#method)
  * [jGLPatternEvaluatorHandler.pattern](#JGLPatternEvaluatorHandler#pattern)
  * [jGLPatternEvaluatorHandler.parser](#JGLPatternEvaluatorHandler#parser)
  * [jGLPatternEvaluatorHandler.run(query, [value])](#JGLPatternEvaluatorHandler#run)
  * [jGLPatternEvaluatorHandler.match(method, query)](#JGLPatternEvaluatorHandler#match)
  * [const: JGLPatternEvaluatorHandler.GET](#JGLPatternEvaluatorHandler.GET)
  * [const: JGLPatternEvaluatorHandler.SET](#JGLPatternEvaluatorHandler.SET)
  * [const: JGLPatternEvaluatorHandler.DEL](#JGLPatternEvaluatorHandler.DEL)
  * [callback: JGLPatternEvaluatorHandler~Action](#JGLPatternEvaluatorHandler..Action)
  * [type: JGLPatternEvaluatorHandler~Method](#JGLPatternEvaluatorHandler..Method)

<a name="new_JGLPatternEvaluatorHandler"></a>
##new JGLPatternEvaluatorHandler(method, pattern, action)
**Params**

- method <code>[Method](#JGLPatternEvaluatorHandler..Method)</code>  
- pattern <code>[Pattern](#JGLPatternEvaluatorParser..Pattern)</code>  
- action <code>[Action](#JGLPatternEvaluatorHandler..Action)</code>  

<a name="JGLPatternEvaluatorHandler#method"></a>
##jGLPatternEvaluatorHandler.method
The method to use: 'get', 'set', or 'del'

**Type**: [Method](#JGLPatternEvaluatorHandler..Method)  
<a name="JGLPatternEvaluatorHandler#pattern"></a>
##jGLPatternEvaluatorHandler.pattern
The un-parsed pattern

**Type**: `JGLPatternEvaluatorHandler~Pattern`  
<a name="JGLPatternEvaluatorHandler#parser"></a>
##jGLPatternEvaluatorHandler.parser
The [JGLPatternEvaluatorParser](#JGLPatternEvaluatorParser) instance used for determining if the
handler handles a particular query

**Type**: [JGLPatternEvaluatorParser](#JGLPatternEvaluatorParser)  
<a name="JGLPatternEvaluatorHandler#run"></a>
##jGLPatternEvaluatorHandler.run(query, [value])
**Params**

- query `Array.<Array.<(Integer|String)>>`  
- \[value\] `Mixed`  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLPatternEvaluatorHandler#match"></a>
##jGLPatternEvaluatorHandler.match(method, query)
**Params**

- method `String`  
- query <code>[Query](#module_JGLEvaluator..Query)</code>  

**Returns**: `Array.<Array.<(String|Integer)>>`  
<a name="JGLPatternEvaluatorHandler.GET"></a>
##const: JGLPatternEvaluatorHandler.GET
<a name="JGLPatternEvaluatorHandler.SET"></a>
##const: JGLPatternEvaluatorHandler.SET
<a name="JGLPatternEvaluatorHandler.DEL"></a>
##const: JGLPatternEvaluatorHandler.DEL
<a name="JGLPatternEvaluatorHandler..Action"></a>
##callback: JGLPatternEvaluatorHandler~Action
**Params**

- query `Array.<Array.<(Integer|String)>>`  
- \[value\] `Mixed`  

**Scope**: inner typedef of [JGLPatternEvaluatorHandler](#JGLPatternEvaluatorHandler)  
**Type**: `function`  
**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLPatternEvaluatorHandler..Method"></a>
##type: JGLPatternEvaluatorHandler~Method
**Scope**: inner typedef of [JGLPatternEvaluatorHandler](#JGLPatternEvaluatorHandler)  
**Type**: [GET](#JGLPatternEvaluatorHandler.GET) | [SET](#JGLPatternEvaluatorHandler.SET) | [DEL](#JGLPatternEvaluatorHandler.DEL)  
<a name="JGLPatternEvaluator"></a>
#class: JGLPatternEvaluator
**Extends**: `JGLEvaluator`  
**Members**

* [class: JGLPatternEvaluator](#JGLPatternEvaluator)
  * [new JGLPatternEvaluator(...handler)](#new_JGLPatternEvaluator)
  * [JGLPatternEvaluator.Parser](#JGLPatternEvaluator.Parser)
  * [JGLPatternEvaluator.Handler](#JGLPatternEvaluator.Handler)
  * [jGLPatternEvaluator.handle(handlerOrMethod, [pattern], [action])](#JGLPatternEvaluator#handle)
  * [jGLPatternEvaluator.get([...path])](#JGLPatternEvaluator#get)
  * [jGLPatternEvaluator.set([...pv])](#JGLPatternEvaluator#set)
  * [jGLPatternEvaluator.del([...path])](#JGLPatternEvaluator#del)
  * [jGLPatternEvaluator.bind(path)](#JGLPatternEvaluator#bind)
  * [jGLPatternEvaluator.destroy()](#JGLPatternEvaluator#destroy)

<a name="new_JGLPatternEvaluator"></a>
##new JGLPatternEvaluator(...handler)
**Params**

- ...handler <code>[JGLPatternEvaluatorHandler](#JGLPatternEvaluatorHandler)</code>  

**Extends**: `JGLEvaluator`  
<a name="JGLPatternEvaluator.Parser"></a>
##JGLPatternEvaluator.Parser
<a name="JGLPatternEvaluator.Handler"></a>
##JGLPatternEvaluator.Handler
<a name="JGLPatternEvaluator#handle"></a>
##jGLPatternEvaluator.handle(handlerOrMethod, [pattern], [action])
Add a new handler for a JGLEvaluatorndPoint

**Params**

- handlerOrMethod <code>[JGLPatternEvaluatorHandler](#JGLPatternEvaluatorHandler)</code> | <code>[Method](#JGLPatternEvaluatorHandler..Method)</code>  
- \[pattern\] `JGLEvaluatorPatternParser~Pattern`  
- \[action\] <code>[Action](#JGLPatternEvaluatorHandler..Action)</code>  

**Returns**: [JGLPatternEvaluator](#JGLPatternEvaluator) - The current instance  
<a name="JGLPatternEvaluator#get"></a>
##jGLPatternEvaluator.get([...path])
**Params**

- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to retrieve  

**Returns**: `Rx.Observable.<module:JGLEvaluator~PathValues>`  
<a name="JGLPatternEvaluator#set"></a>
##jGLPatternEvaluator.set([...pv])
**Params**

- \[...pv\] <code>[PathValue](#module_JGLEvaluator..PathValue)</code> - One or more path-values to set  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLPatternEvaluator#del"></a>
##jGLPatternEvaluator.del([...path])
**Params**

- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLPatternEvaluator#bind"></a>
##jGLPatternEvaluator.bind(path)
**Params**

- path <code>[Query](#module_JGLEvaluator..Query)</code> - The path to bind to  

**Returns**: [JGLEvaluator](#JGLEvaluator) - An JGLEvaluator bound to the given path  
<a name="JGLPatternEvaluator#destroy"></a>
##jGLPatternEvaluator.destroy()
<a name="JGLPatternEvaluatorParser"></a>
#class: JGLPatternEvaluatorParser
**Members**

* [class: JGLPatternEvaluatorParser](#JGLPatternEvaluatorParser)
  * [new JGLPatternEvaluatorParser(...segment)](#new_JGLPatternEvaluatorParser)
  * [jGLPatternEvaluatorParser.segments](#JGLPatternEvaluatorParser#segments)
  * [JGLPatternEvaluatorParser.isInteger](#JGLPatternEvaluatorParser.isInteger)
  * [JGLPatternEvaluatorParser.isIntegers](#JGLPatternEvaluatorParser.isIntegers)
  * [JGLPatternEvaluatorParser.isRange](#JGLPatternEvaluatorParser.isRange)
  * [JGLPatternEvaluatorParser.isIntegersOrRange](#JGLPatternEvaluatorParser.isIntegersOrRange)
  * [JGLPatternEvaluatorParser.isKey](#JGLPatternEvaluatorParser.isKey)
  * [JGLPatternEvaluatorParser.isKeys](#JGLPatternEvaluatorParser.isKeys)
  * [jGLPatternEvaluatorParser.match(query)](#JGLPatternEvaluatorParser#match)
  * [const: JGLPatternEvaluatorParser.KEYS](#JGLPatternEvaluatorParser.KEYS)
  * [const: JGLPatternEvaluatorParser.INTEGERS](#JGLPatternEvaluatorParser.INTEGERS)
  * [type: JGLPatternEvaluatorParser~Argument](#JGLPatternEvaluatorParser..Argument)
  * [type: JGLPatternEvaluatorParser~Pattern](#JGLPatternEvaluatorParser..Pattern)

<a name="new_JGLPatternEvaluatorParser"></a>
##new JGLPatternEvaluatorParser(...segment)
**Params**

- ...segment <code>[Argument](#JGLPatternEvaluatorParser..Argument)</code>  

<a name="JGLPatternEvaluatorParser#segments"></a>
##jGLPatternEvaluatorParser.segments
<a name="JGLPatternEvaluatorParser.isInteger"></a>
##JGLPatternEvaluatorParser.isInteger
Determines if the given value is an integer.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="JGLPatternEvaluatorParser.isIntegers"></a>
##JGLPatternEvaluatorParser.isIntegers
Determines if the given value is an array of integers.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="JGLPatternEvaluatorParser.isRange"></a>
##JGLPatternEvaluatorParser.isRange
Determines is the given value is a range.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="JGLPatternEvaluatorParser.isIntegersOrRange"></a>
##JGLPatternEvaluatorParser.isIntegersOrRange
Determines if the given value is an integer or a range

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="JGLPatternEvaluatorParser.isKey"></a>
##JGLPatternEvaluatorParser.isKey
Determines is the given value is a string key

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="JGLPatternEvaluatorParser.isKeys"></a>
##JGLPatternEvaluatorParser.isKeys
Determines if the given val is an array of keys.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="JGLPatternEvaluatorParser#match"></a>
##jGLPatternEvaluatorParser.match(query)
Takes in a [Query](#module_JGLEvaluator..Query) and returns a list of keys matched for
each segment of the query. If the parser does not match the query, false is
returned.

**Params**

- query <code>[Query](#module_JGLEvaluator..Query)</code>  

**Returns**: `Array.<Array.<(String|Integer)>>` | `Boolean`  
<a name="JGLPatternEvaluatorParser.KEYS"></a>
##const: JGLPatternEvaluatorParser.KEYS
<a name="JGLPatternEvaluatorParser.INTEGERS"></a>
##const: JGLPatternEvaluatorParser.INTEGERS
<a name="JGLPatternEvaluatorParser..Argument"></a>
##type: JGLPatternEvaluatorParser~Argument
**Scope**: inner typedef of [JGLPatternEvaluatorParser](#JGLPatternEvaluatorParser)  
**Type**: `String` | `Array.<String>` | `Integer` | `Array.<Integer>` | [Range](#module_JGLEvaluator..Range)  
<a name="JGLPatternEvaluatorParser..Pattern"></a>
##type: JGLPatternEvaluatorParser~Pattern
**Scope**: inner typedef of [JGLPatternEvaluatorParser](#JGLPatternEvaluatorParser)  
**Type**: [Array.&lt;Argument&gt;](#JGLPatternEvaluatorParser..Argument)  
<a name="JGLRelativeEvaluator"></a>
#class: JGLRelativeEvaluator
**Extends**: `JGLEvaluator`  
**Members**

* [class: JGLRelativeEvaluator](#JGLRelativeEvaluator)
  * [new JGLRelativeEvaluator(proxy)](#new_JGLRelativeEvaluator)
  * [jGLRelativeEvaluator.get([...path])](#JGLRelativeEvaluator#get)
  * [jGLRelativeEvaluator.set([...pv])](#JGLRelativeEvaluator#set)
  * [jGLRelativeEvaluator.del([...path])](#JGLRelativeEvaluator#del)
  * [jGLRelativeEvaluator.bind(path)](#JGLRelativeEvaluator#bind)
  * [jGLRelativeEvaluator.destroy()](#JGLRelativeEvaluator#destroy)

<a name="new_JGLRelativeEvaluator"></a>
##new JGLRelativeEvaluator(proxy)
**Params**

- proxy `Object`  

**Extends**: `JGLEvaluator`  
<a name="JGLRelativeEvaluator#get"></a>
##jGLRelativeEvaluator.get([...path])
**Params**

- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to retrieve  

**Returns**: `Rx.Observable.<module:JGLEvaluator~PathValues>`  
<a name="JGLRelativeEvaluator#set"></a>
##jGLRelativeEvaluator.set([...pv])
**Params**

- \[...pv\] <code>[PathValue](#module_JGLEvaluator..PathValue)</code> - One or more path-values to set  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLRelativeEvaluator#del"></a>
##jGLRelativeEvaluator.del([...path])
**Params**

- \[...path\] <code>[Query](#module_JGLEvaluator..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_JGLEvaluator..PathValue)  
<a name="JGLRelativeEvaluator#bind"></a>
##jGLRelativeEvaluator.bind(path)
**Params**

- path <code>[Query](#module_JGLEvaluator..Query)</code> - The path to bind to  

**Returns**: [JGLEvaluator](#JGLEvaluator) - An JGLEvaluator bound to the given path  
<a name="JGLRelativeEvaluator#destroy"></a>
##jGLRelativeEvaluator.destroy()
