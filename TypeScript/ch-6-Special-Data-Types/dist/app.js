"use strict";
// function ka type batao, koi bhi function jo data type return karti hai wo us  function ka data type hota hai.
Object.defineProperty(exports, "__esModule", { value: true });
// 1. sring type ka function.
function name() {
    return "Ashu";
}
name();
// 2. number type ka function.
function age() {
    return 25;
}
age();
// 3. boolean type ka function.
function isStudent() {
    return true;
}
isStudent();
// 4. any type ka function.
function getData() {
    return "Hello World";
}
getData();
// 5. void type ka function, aisa function jo kuch return nahi karta.
function logMessage() {
    console.log("Hello World");
}
logMessage();
// 6. never type ka function, aisa function jo kabhi return nahi hota.
function throwError() {
    throw new Error("This is an error");
}
// throwError();
