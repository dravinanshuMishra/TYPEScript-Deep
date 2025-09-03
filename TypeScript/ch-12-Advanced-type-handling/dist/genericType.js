"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic Types examples.
function genericType(data) {
    return data;
}
const str = genericType("ashu");
const num = genericType(120);
const bool = genericType(true);
console.log(typeof str);
console.log(str);
console.log(typeof num);
console.log(num);
console.log(typeof bool);
console.log(bool);
