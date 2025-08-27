"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Special Data Types");
// 1. any data type
let value;
value = 5;
console.log(value); // 5
value = "Hello";
console.log(value); // Hello
value = true;
console.log(value); // true
// 2. unknown data types.
let unknownValue = "Dravinanshu Mishra";
// koi bhi operation kar sakte hain to unnown data type me hum us data ka type check karwate hai.
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // DRAVINANSHU MISHRA
}
