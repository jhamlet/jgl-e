#Index

**Modules**

* [OPE](#module_OPE)
  * [OPE.Base](#module_OPE.Base)
  * [OPE.Memory](#module_OPE.Memory)
  * [OPE.Pattern](#module_OPE.Pattern)
  * [type: OPE~Range](#module_OPE..Range)
  * [type: OPE~PathSegment](#module_OPE..PathSegment)
  * [type: OPE~QueryKey](#module_OPE..QueryKey)
  * [type: OPE~QuerySegment](#module_OPE..QuerySegment)
  * [type: OPE~Query](#module_OPE..Query)
  * [type: OPE~Path](#module_OPE..Path)
  * [type: OPE~PathValue](#module_OPE..PathValue)

**Classes**

* [class: ObjectPathEvaluator](#ObjectPathEvaluator)
  * [objectPathEvaluator.path](#ObjectPathEvaluator#path)
  * [objectPathEvaluator.get([...path])](#ObjectPathEvaluator#get)
  * [objectPathEvaluator.set([...pathValues])](#ObjectPathEvaluator#set)
  * [objectPathEvaluator.del([...path])](#ObjectPathEvaluator#del)
  * [objectPathEvaluator.bind(path)](#ObjectPathEvaluator#bind)
  * [objectPathEvaluator.destroy()](#ObjectPathEvaluator#destroy)
* [class: MemoryObjectPathEvaluator](#MemoryObjectPathEvaluator)
  * [new MemoryObjectPathEvaluator([doc])](#new_MemoryObjectPathEvaluator)
  * [memoryObjectPathEvaluator.doc](#MemoryObjectPathEvaluator#doc)
  * [memoryObjectPathEvaluator.path](#MemoryObjectPathEvaluator#path)
  * [memoryObjectPathEvaluator.get([...path])](#MemoryObjectPathEvaluator#get)
  * [memoryObjectPathEvaluator.set([...pathValues])](#MemoryObjectPathEvaluator#set)
  * [memoryObjectPathEvaluator.del([...path])](#MemoryObjectPathEvaluator#del)
  * [memoryObjectPathEvaluator.bind(path)](#MemoryObjectPathEvaluator#bind)
  * [memoryObjectPathEvaluator.destroy()](#MemoryObjectPathEvaluator#destroy)
* [class: PatternOPEHandler](#PatternOPEHandler)
  * [new PatternOPEHandler(method, pattern, action)](#new_PatternOPEHandler)
  * [patternOPEHandler.method](#PatternOPEHandler#method)
  * [patternOPEHandler.pattern](#PatternOPEHandler#pattern)
  * [patternOPEHandler.parser](#PatternOPEHandler#parser)
  * [patternOPEHandler.run(query, [value])](#PatternOPEHandler#run)
  * [patternOPEHandler.match(method, query)](#PatternOPEHandler#match)
  * [const: PatternOPEHandler.GET](#PatternOPEHandler.GET)
  * [const: PatternOPEHandler.SET](#PatternOPEHandler.SET)
  * [const: PatternOPEHandler.DEL](#PatternOPEHandler.DEL)
  * [callback: PatternOPEHandler~Action](#PatternOPEHandler..Action)
  * [type: PatternOPEHandler~Method](#PatternOPEHandler..Method)
* [class: PatternObjectPathEvaluator](#PatternObjectPathEvaluator)
  * [new PatternObjectPathEvaluator(...handler)](#new_PatternObjectPathEvaluator)
  * [PatternObjectPathEvaluator.Parser](#PatternObjectPathEvaluator.Parser)
  * [PatternObjectPathEvaluator.Handler](#PatternObjectPathEvaluator.Handler)
  * [patternObjectPathEvaluator.path](#PatternObjectPathEvaluator#path)
  * [patternObjectPathEvaluator.handle(handlerOrMethod, [pattern], [action])](#PatternObjectPathEvaluator#handle)
  * [patternObjectPathEvaluator.get([...path])](#PatternObjectPathEvaluator#get)
  * [patternObjectPathEvaluator.set([...pathValues])](#PatternObjectPathEvaluator#set)
  * [patternObjectPathEvaluator.del([...path])](#PatternObjectPathEvaluator#del)
  * [patternObjectPathEvaluator.bind(path)](#PatternObjectPathEvaluator#bind)
  * [patternObjectPathEvaluator.destroy()](#PatternObjectPathEvaluator#destroy)
* [class: PatternOPEParser](#PatternOPEParser)
  * [new PatternOPEParser(...segment)](#new_PatternOPEParser)
  * [patternOPEParser.segments](#PatternOPEParser#segments)
  * [PatternOPEParser.isInteger](#PatternOPEParser.isInteger)
  * [PatternOPEParser.isIntegers](#PatternOPEParser.isIntegers)
  * [PatternOPEParser.isRange](#PatternOPEParser.isRange)
  * [PatternOPEParser.isIntegersOrRange](#PatternOPEParser.isIntegersOrRange)
  * [PatternOPEParser.isKey](#PatternOPEParser.isKey)
  * [PatternOPEParser.isKeys](#PatternOPEParser.isKeys)
  * [patternOPEParser.match(query)](#PatternOPEParser#match)
  * [const: PatternOPEParser.KEYS](#PatternOPEParser.KEYS)
  * [const: PatternOPEParser.INTEGERS](#PatternOPEParser.INTEGERS)
  * [type: PatternOPEParser~Argument](#PatternOPEParser..Argument)
  * [type: PatternOPEParser~Pattern](#PatternOPEParser..Pattern)
 
<a name="module_OPE"></a>
#OPE
**Members**

* [OPE](#module_OPE)
  * [OPE.Base](#module_OPE.Base)
  * [OPE.Memory](#module_OPE.Memory)
  * [OPE.Pattern](#module_OPE.Pattern)
  * [type: OPE~Range](#module_OPE..Range)
  * [type: OPE~PathSegment](#module_OPE..PathSegment)
  * [type: OPE~QueryKey](#module_OPE..QueryKey)
  * [type: OPE~QuerySegment](#module_OPE..QuerySegment)
  * [type: OPE~Query](#module_OPE..Query)
  * [type: OPE~Path](#module_OPE..Path)
  * [type: OPE~PathValue](#module_OPE..PathValue)

<a name="module_OPE.Base"></a>
##OPE.Base
<a name="module_OPE.Memory"></a>
##OPE.Memory
<a name="module_OPE.Pattern"></a>
##OPE.Pattern
<a name="module_OPE..Range"></a>
##type: OPE~Range
An object that can be expanded into a series of indices

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: `Object`  
<a name="module_OPE..PathSegment"></a>
##type: OPE~PathSegment
The smallest part of a concrete path

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: `Integer` | `String`  
<a name="module_OPE..QueryKey"></a>
##type: OPE~QueryKey
The smallest part of a complex query

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: [PathSegment](#module_OPE..PathSegment) | [Range](#module_OPE..Range)  
<a name="module_OPE..QuerySegment"></a>
##type: OPE~QuerySegment
A query segment can contain one or more query keys

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: [QueryKey](#module_OPE..QueryKey) | [Array.&lt;QueryKey&gt;](#module_OPE..QueryKey)  
<a name="module_OPE..Query"></a>
##type: OPE~Query
A complex path query that can be expanded to get multiple concrete paths

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: [Array.&lt;QuerySegment&gt;](#module_OPE..QuerySegment)  
<a name="module_OPE..Path"></a>
##type: OPE~Path
A concrete path. i.e: One that can not be expanded further.

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: [Array.&lt;PathSegment&gt;](#module_OPE..PathSegment)  
<a name="module_OPE..PathValue"></a>
##type: OPE~PathValue
**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: `Object`  
<a name="ObjectPathEvaluator"></a>
#class: ObjectPathEvaluator
**Members**

* [class: ObjectPathEvaluator](#ObjectPathEvaluator)
  * [objectPathEvaluator.path](#ObjectPathEvaluator#path)
  * [objectPathEvaluator.get([...path])](#ObjectPathEvaluator#get)
  * [objectPathEvaluator.set([...pathValues])](#ObjectPathEvaluator#set)
  * [objectPathEvaluator.del([...path])](#ObjectPathEvaluator#del)
  * [objectPathEvaluator.bind(path)](#ObjectPathEvaluator#bind)
  * [objectPathEvaluator.destroy()](#ObjectPathEvaluator#destroy)

<a name="ObjectPathEvaluator#path"></a>
##objectPathEvaluator.path
**Type**: [Query](#module_OPE..Query)  
<a name="ObjectPathEvaluator#get"></a>
##objectPathEvaluator.get([...path])
**Params**

- \[...path\] <code>[Query](#module_OPE..Query)</code> - One or more paths to retrieve  

**Returns**: `Rx.Observable.<module:OPE~PathValues>`  
<a name="ObjectPathEvaluator#set"></a>
##objectPathEvaluator.set([...pathValues])
**Params**

- \[...pathValues\] <code>[PathValue](#module_OPE..PathValue)</code> - One ore more path-values to set  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_OPE..PathValue)  
<a name="ObjectPathEvaluator#del"></a>
##objectPathEvaluator.del([...path])
**Params**

- \[...path\] <code>[Query](#module_OPE..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_OPE..PathValue)  
<a name="ObjectPathEvaluator#bind"></a>
##objectPathEvaluator.bind(path)
**Params**

- path <code>[Query](#module_OPE..Query)</code> - The path to bind to  

**Returns**: [ObjectPathEvaluator](#ObjectPathEvaluator) - An ObjectPathEvaluator bound to the given path  
<a name="ObjectPathEvaluator#destroy"></a>
##objectPathEvaluator.destroy()
<a name="MemoryObjectPathEvaluator"></a>
#class: MemoryObjectPathEvaluator
**Extends**: `ObjectPathEvaluator`  
**Members**

* [class: MemoryObjectPathEvaluator](#MemoryObjectPathEvaluator)
  * [new MemoryObjectPathEvaluator([doc])](#new_MemoryObjectPathEvaluator)
  * [memoryObjectPathEvaluator.doc](#MemoryObjectPathEvaluator#doc)
  * [memoryObjectPathEvaluator.path](#MemoryObjectPathEvaluator#path)
  * [memoryObjectPathEvaluator.get([...path])](#MemoryObjectPathEvaluator#get)
  * [memoryObjectPathEvaluator.set([...pathValues])](#MemoryObjectPathEvaluator#set)
  * [memoryObjectPathEvaluator.del([...path])](#MemoryObjectPathEvaluator#del)
  * [memoryObjectPathEvaluator.bind(path)](#MemoryObjectPathEvaluator#bind)
  * [memoryObjectPathEvaluator.destroy()](#MemoryObjectPathEvaluator#destroy)

<a name="new_MemoryObjectPathEvaluator"></a>
##new MemoryObjectPathEvaluator([doc])
**Params**

- \[doc={}\] `Object`  

**Extends**: `ObjectPathEvaluator`  
<a name="MemoryObjectPathEvaluator#doc"></a>
##memoryObjectPathEvaluator.doc
**Type**: `Object`  
**Default**: `{}`  
<a name="MemoryObjectPathEvaluator#path"></a>
##memoryObjectPathEvaluator.path
**Type**: [Query](#module_OPE..Query)  
<a name="MemoryObjectPathEvaluator#get"></a>
##memoryObjectPathEvaluator.get([...path])
**Params**

- \[...path\] <code>[Query](#module_OPE..Query)</code> - One or more paths to retrieve  

**Returns**: `Rx.Observable.<module:OPE~PathValues>`  
<a name="MemoryObjectPathEvaluator#set"></a>
##memoryObjectPathEvaluator.set([...pathValues])
**Params**

- \[...pathValues\] <code>[PathValue](#module_OPE..PathValue)</code> - One ore more path-values to set  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_OPE..PathValue)  
<a name="MemoryObjectPathEvaluator#del"></a>
##memoryObjectPathEvaluator.del([...path])
**Params**

- \[...path\] <code>[Query](#module_OPE..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_OPE..PathValue)  
<a name="MemoryObjectPathEvaluator#bind"></a>
##memoryObjectPathEvaluator.bind(path)
**Params**

- path <code>[Query](#module_OPE..Query)</code> - The path to bind to  

**Returns**: [ObjectPathEvaluator](#ObjectPathEvaluator) - An ObjectPathEvaluator bound to the given path  
<a name="MemoryObjectPathEvaluator#destroy"></a>
##memoryObjectPathEvaluator.destroy()
<a name="PatternOPEHandler"></a>
#class: PatternOPEHandler
**Members**

* [class: PatternOPEHandler](#PatternOPEHandler)
  * [new PatternOPEHandler(method, pattern, action)](#new_PatternOPEHandler)
  * [patternOPEHandler.method](#PatternOPEHandler#method)
  * [patternOPEHandler.pattern](#PatternOPEHandler#pattern)
  * [patternOPEHandler.parser](#PatternOPEHandler#parser)
  * [patternOPEHandler.run(query, [value])](#PatternOPEHandler#run)
  * [patternOPEHandler.match(method, query)](#PatternOPEHandler#match)
  * [const: PatternOPEHandler.GET](#PatternOPEHandler.GET)
  * [const: PatternOPEHandler.SET](#PatternOPEHandler.SET)
  * [const: PatternOPEHandler.DEL](#PatternOPEHandler.DEL)
  * [callback: PatternOPEHandler~Action](#PatternOPEHandler..Action)
  * [type: PatternOPEHandler~Method](#PatternOPEHandler..Method)

<a name="new_PatternOPEHandler"></a>
##new PatternOPEHandler(method, pattern, action)
**Params**

- method <code>[Method](#PatternOPEHandler..Method)</code>  
- pattern <code>[Pattern](#PatternOPEParser..Pattern)</code>  
- action <code>[Action](#PatternOPEHandler..Action)</code>  

<a name="PatternOPEHandler#method"></a>
##patternOPEHandler.method
The method to use: 'get', 'set', or 'del'

**Type**: [Method](#PatternOPEHandler..Method)  
<a name="PatternOPEHandler#pattern"></a>
##patternOPEHandler.pattern
The un-parsed pattern

**Type**: `PatternOPEHandler~Pattern`  
<a name="PatternOPEHandler#parser"></a>
##patternOPEHandler.parser
The [PatternOPEParser](#PatternOPEParser) instance used for determining if the
handler handles a particular query

**Type**: [PatternOPEParser](#PatternOPEParser)  
<a name="PatternOPEHandler#run"></a>
##patternOPEHandler.run(query, [value])
**Params**

- query `Array.<Array.<(Integer|String)>>`  
- \[value\] `Mixed`  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_OPE..PathValue)  
<a name="PatternOPEHandler#match"></a>
##patternOPEHandler.match(method, query)
**Params**

- method `String`  
- query <code>[Query](#module_OPE..Query)</code>  

**Returns**: `Array.<Array.<(String|Integer)>>`  
<a name="PatternOPEHandler.GET"></a>
##const: PatternOPEHandler.GET
<a name="PatternOPEHandler.SET"></a>
##const: PatternOPEHandler.SET
<a name="PatternOPEHandler.DEL"></a>
##const: PatternOPEHandler.DEL
<a name="PatternOPEHandler..Action"></a>
##callback: PatternOPEHandler~Action
**Params**

- query `Array.<Array.<(Integer|String)>>`  
- \[value\] `Mixed`  

**Scope**: inner typedef of [PatternOPEHandler](#PatternOPEHandler)  
**Type**: `function`  
**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_OPE..PathValue)  
<a name="PatternOPEHandler..Method"></a>
##type: PatternOPEHandler~Method
**Scope**: inner typedef of [PatternOPEHandler](#PatternOPEHandler)  
**Type**: [GET](#PatternOPEHandler.GET) | [SET](#PatternOPEHandler.SET) | [DEL](#PatternOPEHandler.DEL)  
<a name="PatternObjectPathEvaluator"></a>
#class: PatternObjectPathEvaluator
**Extends**: `ObjectPathEvaluator`  
**Members**

* [class: PatternObjectPathEvaluator](#PatternObjectPathEvaluator)
  * [new PatternObjectPathEvaluator(...handler)](#new_PatternObjectPathEvaluator)
  * [PatternObjectPathEvaluator.Parser](#PatternObjectPathEvaluator.Parser)
  * [PatternObjectPathEvaluator.Handler](#PatternObjectPathEvaluator.Handler)
  * [patternObjectPathEvaluator.path](#PatternObjectPathEvaluator#path)
  * [patternObjectPathEvaluator.handle(handlerOrMethod, [pattern], [action])](#PatternObjectPathEvaluator#handle)
  * [patternObjectPathEvaluator.get([...path])](#PatternObjectPathEvaluator#get)
  * [patternObjectPathEvaluator.set([...pathValues])](#PatternObjectPathEvaluator#set)
  * [patternObjectPathEvaluator.del([...path])](#PatternObjectPathEvaluator#del)
  * [patternObjectPathEvaluator.bind(path)](#PatternObjectPathEvaluator#bind)
  * [patternObjectPathEvaluator.destroy()](#PatternObjectPathEvaluator#destroy)

<a name="new_PatternObjectPathEvaluator"></a>
##new PatternObjectPathEvaluator(...handler)
**Params**

- ...handler <code>[PatternOPEHandler](#PatternOPEHandler)</code>  

**Extends**: `ObjectPathEvaluator`  
<a name="PatternObjectPathEvaluator.Parser"></a>
##PatternObjectPathEvaluator.Parser
<a name="PatternObjectPathEvaluator.Handler"></a>
##PatternObjectPathEvaluator.Handler
<a name="PatternObjectPathEvaluator#path"></a>
##patternObjectPathEvaluator.path
**Type**: [Query](#module_OPE..Query)  
<a name="PatternObjectPathEvaluator#handle"></a>
##patternObjectPathEvaluator.handle(handlerOrMethod, [pattern], [action])
Add a new handler for a OPEndPoint

**Params**

- handlerOrMethod <code>[PatternOPEHandler](#PatternOPEHandler)</code> | <code>[Method](#PatternOPEHandler..Method)</code>  
- \[pattern\] <code>[Pattern](#PatternOPEParser..Pattern)</code>  
- \[action\] <code>[Action](#PatternOPEHandler..Action)</code>  

**Returns**: [PatternObjectPathEvaluator](#PatternObjectPathEvaluator) - The current instance  
<a name="PatternObjectPathEvaluator#get"></a>
##patternObjectPathEvaluator.get([...path])
**Params**

- \[...path\] <code>[Query](#module_OPE..Query)</code> - One or more paths to retrieve  

**Returns**: `Rx.Observable.<module:OPE~PathValues>`  
<a name="PatternObjectPathEvaluator#set"></a>
##patternObjectPathEvaluator.set([...pathValues])
**Params**

- \[...pathValues\] <code>[PathValue](#module_OPE..PathValue)</code> - One ore more path-values to set  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_OPE..PathValue)  
<a name="PatternObjectPathEvaluator#del"></a>
##patternObjectPathEvaluator.del([...path])
**Params**

- \[...path\] <code>[Query](#module_OPE..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathValue&gt;](#module_OPE..PathValue)  
<a name="PatternObjectPathEvaluator#bind"></a>
##patternObjectPathEvaluator.bind(path)
**Params**

- path <code>[Query](#module_OPE..Query)</code> - The path to bind to  

**Returns**: [ObjectPathEvaluator](#ObjectPathEvaluator) - An ObjectPathEvaluator bound to the given path  
<a name="PatternObjectPathEvaluator#destroy"></a>
##patternObjectPathEvaluator.destroy()
<a name="PatternOPEParser"></a>
#class: PatternOPEParser
**Members**

* [class: PatternOPEParser](#PatternOPEParser)
  * [new PatternOPEParser(...segment)](#new_PatternOPEParser)
  * [patternOPEParser.segments](#PatternOPEParser#segments)
  * [PatternOPEParser.isInteger](#PatternOPEParser.isInteger)
  * [PatternOPEParser.isIntegers](#PatternOPEParser.isIntegers)
  * [PatternOPEParser.isRange](#PatternOPEParser.isRange)
  * [PatternOPEParser.isIntegersOrRange](#PatternOPEParser.isIntegersOrRange)
  * [PatternOPEParser.isKey](#PatternOPEParser.isKey)
  * [PatternOPEParser.isKeys](#PatternOPEParser.isKeys)
  * [patternOPEParser.match(query)](#PatternOPEParser#match)
  * [const: PatternOPEParser.KEYS](#PatternOPEParser.KEYS)
  * [const: PatternOPEParser.INTEGERS](#PatternOPEParser.INTEGERS)
  * [type: PatternOPEParser~Argument](#PatternOPEParser..Argument)
  * [type: PatternOPEParser~Pattern](#PatternOPEParser..Pattern)

<a name="new_PatternOPEParser"></a>
##new PatternOPEParser(...segment)
**Params**

- ...segment <code>[Argument](#PatternOPEParser..Argument)</code>  

<a name="PatternOPEParser#segments"></a>
##patternOPEParser.segments
<a name="PatternOPEParser.isInteger"></a>
##PatternOPEParser.isInteger
Determines if the given value is an integer.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternOPEParser.isIntegers"></a>
##PatternOPEParser.isIntegers
Determines if the given value is an array of integers.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternOPEParser.isRange"></a>
##PatternOPEParser.isRange
Determines is the given value is a range.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternOPEParser.isIntegersOrRange"></a>
##PatternOPEParser.isIntegersOrRange
Determines if the given value is an integer or a range

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternOPEParser.isKey"></a>
##PatternOPEParser.isKey
Determines is the given value is a string key

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternOPEParser.isKeys"></a>
##PatternOPEParser.isKeys
Determines if the given val is an array of keys.

**Params**

- val `Mixed`  

**Returns**: `Boolean`  
<a name="PatternOPEParser#match"></a>
##patternOPEParser.match(query)
Takes in a [Query](#module_OPE..Query) and returns a list of keys matched for
each segment of the query. If the parser does not match the query, false is
returned.

**Params**

- query <code>[Query](#module_OPE..Query)</code>  

**Returns**: `Array.<Array.<(String|Integer)>>` | `Boolean`  
<a name="PatternOPEParser.KEYS"></a>
##const: PatternOPEParser.KEYS
<a name="PatternOPEParser.INTEGERS"></a>
##const: PatternOPEParser.INTEGERS
<a name="PatternOPEParser..Argument"></a>
##type: PatternOPEParser~Argument
**Scope**: inner typedef of [PatternOPEParser](#PatternOPEParser)  
**Type**: `String` | `Array.<String>` | `Integer` | `Array.<Integer>` | [Range](#module_OPE..Range)  
<a name="PatternOPEParser..Pattern"></a>
##type: PatternOPEParser~Pattern
**Scope**: inner typedef of [PatternOPEParser](#PatternOPEParser)  
**Type**: [Array.&lt;Argument&gt;](#PatternOPEParser..Argument)  
