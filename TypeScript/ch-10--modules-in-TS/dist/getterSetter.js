console.log("Getter and Setter in TypeScript");
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    // getter method
    getName() {
        return `Name is default is ${this.name}`;
    }
    // setter method
    setName(name) {
        this.name = name;
    }
}
const p1 = new Person("Initial Name");
console.log(p1.getName());
p1.setName("New Name");
console.log(p1.getName());
// example 2.
console.log("Getter and Setter in TypeScript");
class Persons {
    _name;
    constructor(name) {
        this._name = name;
    }
    // getter (property जैसा access होगा)
    get name() {
        return `Name is: ${this._name}`;
    }
    // setter (property assign करने जैसा लगेगा)
    set name(value) {
        this._name = value;
    }
}
const ps1 = new Persons("Initial Name");
console.log(ps1.name); // "Name is: Initial Name"
ps1.name = "New Name";
console.log(ps1.name); // "Name is: New Name"
export {};
