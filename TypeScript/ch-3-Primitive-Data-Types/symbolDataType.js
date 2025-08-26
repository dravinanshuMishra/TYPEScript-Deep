var _a;
console.log("Symbol Data Type");
// Symbol data types examples.
// symbol every time generate uniques ids
var sym1 = Symbol("description");
var sym2 = Symbol("description");
console.log(sym1 === sym2); // false
// real use case generate dynamic id.
var sym3 = Symbol("description" + Math.random());
var sym4 = Symbol("description" + Math.random());
console.log(sym3 === sym4); // false
// Why Use Symbols? To create unique object property keys (avoids accidental overwriting).
var uniqueKey = Symbol("id");
var obj = (_a = {}, _a[uniqueKey] = 123, _a);
console.log(obj[uniqueKey]); // 123
// Used in well-known symbols like Symbol.iterator, Symbol.toPrimitive, etc.
var arr = [1, 2, 3];
console.log(arr[Symbol.iterator]); // function
