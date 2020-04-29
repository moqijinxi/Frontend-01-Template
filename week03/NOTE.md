# 第三周

## 作业
1. 数字转字符串
[NumberToString.js](./NumberToString.js)

2. 字符串转数字
[StringToNumber](./StringToNumber.js)

3. 找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的
  - 1. 基本对象
    - 基本对象是定义或使用其他对象的基础，包括一般对象、函数对象和错误对象
    - `Object`, `Function`, `Boolean`, `Symbol`
    - 错误对象是一种特殊的基本对象。它们拥有基本的 `Error` 类型，同时也有多种具体的错误类型
      - `Error`, `AggregateError`, `EvalError`, `InternalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`

  - 2. 数字和日期对象
    - 用来表示数字、日期和执行数学计算的对象
      - `Number`, `BigInt`, `Math`, `Date`

  - 3. 字符串
    - 用来表示和操作字符串的对象
      - `String`, `RegExp`

  - 4. 可索引的集合对象
    - 这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象
    - `Array`, `Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`, `BigInt64Array`, `BigUint64Array`

  - 5. 使用键的集合对象
    - 这些集合对象在存储数据时会使用到键，包括可迭代的 `Map` 和 `Set`，支持按照插入顺序来迭代元素
    - `Map`, `Set`, `WeakMap`, `WeakSet`

  - 6. 结构化数据
    - 这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON （JavaScript Object Notation）编码的数据
    - `ArrayBuffer`, `SharedArrayBuffer`, `Atomics`, `DataView`, `JSON`

  - 7. 控制抽象对象
    - `Promise`, `Generator`, `GeneratorFunction`, `AsyncFunction`, `Iterator`, `AsyncIterator`

  - 8. 反射
    - `Reflect`, `Proxy`

  - 9. 国际化
    - ECMAScript核心的附加功能，用于支持多语言处理
    - `Intl`, `Intl.Collator`, `Intl.DateTimeFormat`, `Intl.ListFormat`, `Intl.NumberFormat`, `Intl.PluralRules`, `Intl.RelativeTimeFormat`, `Intl.Locale`

  - 10. WebAssembly
    - `WebAssembly`, `WebAssembly.Module`, `WebAssembly.Instance`, `WebAssembly.Memory`, `WebAssembly.Table`, `WebAssembly.CompileError`, `WebAssembly.LinkError`, `WebAssembly.RuntimeError`
  
  - 11. 其他
    - `arguments`