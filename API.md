<a name="module_OPE"></a>
#OPE
**Members**

* [OPE](#module_OPE)
  * [type: OPE~Range](#module_OPE..Range)
  * [type: OPE~PathSegment](#module_OPE..PathSegment)
  * [type: OPE~QueryKey](#module_OPE..QueryKey)
  * [type: OPE~QuerySegment](#module_OPE..QuerySegment)
  * [type: OPE~Query](#module_OPE..Query)
  * [type: OPE~Path](#module_OPE..Path)
  * [type: OPE~Value](#module_OPE..Value)
  * [type: OPE~PathValue](#module_OPE..PathValue)
  * [type: OPE~PathsValue](#module_OPE..PathsValue)
  * [class: OPE.Base](#module_OPE.Base)
    * [baseObjectPathEvaluator.path](#module_OPE.Base#path)
    * [baseObjectPathEvaluator.get([paths], [...path])](#module_OPE.Base#get)
    * [baseObjectPathEvaluator.set([pathValues], [...pv])](#module_OPE.Base#set)
    * [baseObjectPathEvaluator.del([paths], [...path])](#module_OPE.Base#del)
    * [baseObjectPathEvaluator.bind(path)](#module_OPE.Base#bind)
    * [baseObjectPathEvaluator.destroy()](#module_OPE.Base#destroy)
  * [class: OPE.Memory](#module_OPE.Memory)
    * [new OPE.Memory([data])](#new_module_OPE.Memory)
    * [memoryObjectPathEvaluator.data](#module_OPE.Memory#data)
    * [memoryObjectPathEvaluator.path](#module_OPE.Memory#path)
    * [memoryObjectPathEvaluator.get([paths], [...path])](#module_OPE.Memory#get)
    * [memoryObjectPathEvaluator.set([pathValues], [...pv])](#module_OPE.Memory#set)
    * [memoryObjectPathEvaluator.del([paths], [...path])](#module_OPE.Memory#del)
    * [memoryObjectPathEvaluator.bind(path)](#module_OPE.Memory#bind)
    * [memoryObjectPathEvaluator.destroy()](#module_OPE.Memory#destroy)

<a name="module_OPE..Range"></a>
##type: OPE~Range
An object that denotes a range of indexes.

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: `Object`  
**Example**  
{ from: 9, to: 11 }

**Example**  
{ to: 9 }

<a name="module_OPE..PathSegment"></a>
##type: OPE~PathSegment
A concreate segment of a path. An integer or a string key.

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: `Integer` | `String`  
**Example**  
9

**Example**  
'foo'

<a name="module_OPE..QueryKey"></a>
##type: OPE~QueryKey
Either an index or string key, or a [Range](#module_OPE..Range) object

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: [PathSegment](#module_OPE..PathSegment) | [Range](#module_OPE..Range)  
**Example**  
9

**Example**  
'foo'

**Example**  
{ to: 9 }

<a name="module_OPE..QuerySegment"></a>
##type: OPE~QuerySegment
Either a [QueryKey](#module_OPE..QueryKey) or an Array of the same

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: [QueryKey](#module_OPE..QueryKey) | [Array.&lt;QueryKey&gt;](#module_OPE..QueryKey)  
**Example**  
{ to: 9 }

**Example**  
[ 'length', {to: 9}]

<a name="module_OPE..Query"></a>
##type: OPE~Query
A path that has expandable segments.

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: [Array.&lt;QuerySegment&gt;](#module_OPE..QuerySegment)  
**Example**  
['foo', 'bar', ['length', {to: 9}], 'id']

<a name="module_OPE..Path"></a>
##type: OPE~Path
A concrete path (i.e: one that can not be expanded)

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: [Array.&lt;PathSegment&gt;](#module_OPE..PathSegment)  
**Example**  
['foo', 'bar', 9, 'id']

<a name="module_OPE..Value"></a>
##type: OPE~Value
**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: `Mixed` | `Error`  
<a name="module_OPE..PathValue"></a>
##type: OPE~PathValue
An array of 0: [Path](#module_OPE..Path) and 1: [Value](#module_OPE..Value)

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: `Array.<module:OPE~Path, module:OPE~Value>`  
**Example**  
[['foo', 'bar', 9, 'id'], 'bob']

<a name="module_OPE..PathsValue"></a>
##type: OPE~PathsValue
Similar to [PathValue](#module_OPE..PathValue) however, the value is the branch-node of a
request, and the path points into the value

**Scope**: inner typedef of [OPE](#module_OPE)  
**Type**: `Array.<module:OPE~Path, module:OPE~Value>`  
<a name="module_OPE.Base"></a>
##class: OPE.Base
**Members**

* [class: OPE.Base](#module_OPE.Base)
  * [baseObjectPathEvaluator.path](#module_OPE.Base#path)
  * [baseObjectPathEvaluator.get([paths], [...path])](#module_OPE.Base#get)
  * [baseObjectPathEvaluator.set([pathValues], [...pv])](#module_OPE.Base#set)
  * [baseObjectPathEvaluator.del([paths], [...path])](#module_OPE.Base#del)
  * [baseObjectPathEvaluator.bind(path)](#module_OPE.Base#bind)
  * [baseObjectPathEvaluator.destroy()](#module_OPE.Base#destroy)

<a name="module_OPE.Base#path"></a>
###baseObjectPathEvaluator.path
**Type**: [Query](#module_OPE..Query)  
<a name="module_OPE.Base#get"></a>
###baseObjectPathEvaluator.get([paths], [...path])
**Params**

- \[paths\] <code>[Rx.Observable.&lt;Query&gt;](#module_OPE..Query)</code> - An observable of path queries  
- \[...path\] <code>[Query](#module_OPE..Query)</code> - One or more paths to retrieve  

**Returns**: `Rx.Observable.<module:OPE~PathsValues>`  
<a name="module_OPE.Base#set"></a>
###baseObjectPathEvaluator.set([pathValues], [...pv])
**Params**

- \[pathValues\] <code>[Rx.Observable.&lt;PathValue&gt;](#module_OPE..PathValue)</code> - An observable of
path values  
- \[...pv\] <code>[PathValue](#module_OPE..PathValue)</code> - One ore more path-values to set  

**Returns**: [Rx.Observable.&lt;PathsValue&gt;](#module_OPE..PathsValue)  
<a name="module_OPE.Base#del"></a>
###baseObjectPathEvaluator.del([paths], [...path])
**Params**

- \[paths\] <code>[Rx.Observable.&lt;Query&gt;](#module_OPE..Query)</code> - An observable of path queries  
- \[...path\] <code>[Query](#module_OPE..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathsValue&gt;](#module_OPE..PathsValue)  
<a name="module_OPE.Base#bind"></a>
###baseObjectPathEvaluator.bind(path)
**Params**

- path <code>[Query](#module_OPE..Query)</code> - The path to bind to  

**Returns**: [Base](#module_OPE.Base) - An ObjectPathEvaluator bound to the given path  
<a name="module_OPE.Base#destroy"></a>
###baseObjectPathEvaluator.destroy()
<a name="module_OPE.Memory"></a>
##class: OPE.Memory
**Extends**: `module:OPE.Base`  
**Members**

* [class: OPE.Memory](#module_OPE.Memory)
  * [new OPE.Memory([data])](#new_module_OPE.Memory)
  * [memoryObjectPathEvaluator.data](#module_OPE.Memory#data)
  * [memoryObjectPathEvaluator.path](#module_OPE.Memory#path)
  * [memoryObjectPathEvaluator.get([paths], [...path])](#module_OPE.Memory#get)
  * [memoryObjectPathEvaluator.set([pathValues], [...pv])](#module_OPE.Memory#set)
  * [memoryObjectPathEvaluator.del([paths], [...path])](#module_OPE.Memory#del)
  * [memoryObjectPathEvaluator.bind(path)](#module_OPE.Memory#bind)
  * [memoryObjectPathEvaluator.destroy()](#module_OPE.Memory#destroy)

<a name="new_module_OPE.Memory"></a>
###new OPE.Memory([data])
**Params**

- \[data={}\] `Object`  

**Extends**: `module:OPE.Base`  
<a name="module_OPE.Memory#data"></a>
###memoryObjectPathEvaluator.data
**Type**: `Object`  
**Default**: `{}`  
<a name="module_OPE.Memory#path"></a>
###memoryObjectPathEvaluator.path
**Type**: [Query](#module_OPE..Query)  
<a name="module_OPE.Memory#get"></a>
###memoryObjectPathEvaluator.get([paths], [...path])
**Params**

- \[paths\] <code>[Rx.Observable.&lt;Query&gt;](#module_OPE..Query)</code> - An observable of path queries  
- \[...path\] <code>[Query](#module_OPE..Query)</code> - One or more paths to retrieve  

**Returns**: `Rx.Observable.<module:OPE~PathsValues>`  
<a name="module_OPE.Memory#set"></a>
###memoryObjectPathEvaluator.set([pathValues], [...pv])
**Params**

- \[pathValues\] <code>[Rx.Observable.&lt;PathValue&gt;](#module_OPE..PathValue)</code> - An observable of
path values  
- \[...pv\] <code>[PathValue](#module_OPE..PathValue)</code> - One ore more path-values to set  

**Returns**: [Rx.Observable.&lt;PathsValue&gt;](#module_OPE..PathsValue)  
<a name="module_OPE.Memory#del"></a>
###memoryObjectPathEvaluator.del([paths], [...path])
**Params**

- \[paths\] <code>[Rx.Observable.&lt;Query&gt;](#module_OPE..Query)</code> - An observable of path queries  
- \[...path\] <code>[Query](#module_OPE..Query)</code> - One or more paths to delete  

**Returns**: [Rx.Observable.&lt;PathsValue&gt;](#module_OPE..PathsValue)  
<a name="module_OPE.Memory#bind"></a>
###memoryObjectPathEvaluator.bind(path)
**Params**

- path <code>[Query](#module_OPE..Query)</code> - The path to bind to  

**Returns**: [Base](#module_OPE.Base) - An ObjectPathEvaluator bound to the given path  
<a name="module_OPE.Memory#destroy"></a>
###memoryObjectPathEvaluator.destroy()
