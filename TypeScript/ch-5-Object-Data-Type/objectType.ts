console.log("Object Data Type");

// step: 1. BASIC OBJECT CODE.
const person:{name: String, age: Number, company: String} = {name: "Ashu Mishra", age: 30, company: "TCS"};

// this person we can override.
person.name = "Dravinanshu Mishra";
person.age = 31;
person.company = "Infosys";

console.log(person);


// step: 2. OBJECT TYPE ALIAS.
type Person = {
    name: String;
    age: Number;
    company: String;
};

const person2: Person = { name: "Amit Sharma", age: 35, company: "TCS" };

// this person we can override.
person2.name = "Dravinanshu Mishra";
person2.age = 31;
person2.company = "Infosys";

console.log(person2);


// step: 3. agar aap nahi jaante kya kya key rahe wale hai to ye tarika use kare.
const person3: {
    [key: string]: string | number | boolean
} = {
    name: "dravinanshu mishra",
    age: 31,
    company: "Infosys",
    isActive: true
}

console.log(person3);

// step: 4. nested object examples
const person4: {
    name: string;
    age: number;
    company: string;
    isActive: boolean;
    address: {
        street: string;
        city: string;
        state: string;
    }
} = {
    name: "dravinanshu mishra",
    age: 31,
    company: "Infosys",
    isActive: true,
    address: {
        street: "123 Main St",
        city: "Sunnyvale",
        state: "CA"
    }
}


console.log(person4);