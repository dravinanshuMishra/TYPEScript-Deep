"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Type Guard in TS");
/**
 Type Guard in TypeScript knows exactly what type (data type) you are working with.

 * There are 3 ways we can check at runtime.
   1. typeof: normal variable type check.
   2. instanceof: check class type and
   3. Custom type: interface type check.
 */
// fist example of typeof with union types.
let data = "Ashu Mishra";
data = 20;
data = true;
if (typeof data === "number") {
    console.log(typeof data);
    console.log(data);
}
else if (typeof data === "string") {
    console.log(typeof data);
    console.log(data);
}
else if (typeof data === "boolean") {
    console.log(typeof data);
    console.log(data);
}
//  2. typeof, example with function.
function checkDataType(data) {
    if (typeof data === "string") {
        console.log("string data type hai");
    }
    else {
        console.log("number data type hai");
    }
}
checkDataType(2);
// 3. example instanceof, we can use through calss.
class Person {
}
const p1 = new Person();
class Empolyee {
}
const emp = new Empolyee();
// check here.
function checkInstance(data) {
    if (data instanceof Person) {
        console.log("This is instance of Person");
    }
    else {
        console.log("This is instance of Employee");
    }
}
checkInstance(p1);
// 4. example. custom type.
// open App.js
