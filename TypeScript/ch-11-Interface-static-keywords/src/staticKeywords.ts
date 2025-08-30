console.log("Static Keyword in TypeScript");

class Person {
    static personName: string;

    static getName(name: string): string {
        return `This is my ${name}`;
    }
}

// Accessing static members without creating object
console.log(Person.getName("Dravinanshu Mishra"));

Person.personName = "Aman";   // assigning value
console.log(Person.personName);
