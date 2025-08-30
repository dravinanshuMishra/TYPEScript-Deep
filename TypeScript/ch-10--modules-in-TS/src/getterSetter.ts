console.log("Getter and Setter in TypeScript");

class Person {
   private name: string;
    constructor(name: string) {
        this.name = name;
    }
    // getter method
    public getName(): string {
        return `Name is default is ${this.name}`;
    }

    // setter method
    public setName(name: string): void {
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
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // getter (property जैसा access होगा)
  public get name(): string {
    return `Name is: ${this._name}`;
  }

  // setter (property assign करने जैसा लगेगा)
  public set name(value: string) {
    this._name = value;
  }
}

const ps1 = new Persons("Initial Name");

console.log(ps1.name);  // "Name is: Initial Name"
ps1.name = "New Name";
console.log(ps1.name);  // "Name is: New Name"
