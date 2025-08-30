"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Static Keyword in TypeScript");
class Person {
    static personName;
    static getName(name) {
        return `This is my ${name}`;
    }
}
// Accessing static members without creating object
console.log(Person.getName("Dravinanshu Mishra"));
Person.personName = "Aman"; // assigning value
console.log(Person.personName);
