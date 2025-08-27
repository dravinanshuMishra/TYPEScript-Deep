"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is a tuple data type array.
console.log("Tuple Array in Typescript");
// jis jis  type ka data add karna hai pahle us type ka data defined karo ye fixed length hoti hai, agar data 5 hai to 5 data type define karo.
const tupleData = ["Apple", 5, true, "Mango"];
console.log(tupleData);
// readOnly banao isse.
const tupleData1 = ["Mango", 5, true];
console.log(tupleData1);
// tupleData1.push("aman"); // cannot push because readOnly hai.
