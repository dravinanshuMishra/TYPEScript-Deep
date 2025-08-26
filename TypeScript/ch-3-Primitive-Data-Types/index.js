// syntax: var variable_name: data_type = Value;
// step: 1. declare variables
var num = 5;
console.log(num);
var num2 = 10;
var totalNumber = num + num2;
console.log("the total number is: " + totalNumber);
// step: 2. type conversion.
var num3 = 15;
var num4 = "345";
var totalNum = num3 + Number(num4);
console.log("the total number is: " + totalNum);
// step: 4. Type inference (anuman lagana, type ka andaza lagana, num5 pr hover karo typescript ne andaza lagaya).
var num5 = 20; // type inferred as number.
