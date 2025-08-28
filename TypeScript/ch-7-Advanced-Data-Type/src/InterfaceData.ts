// An interface in TypeScript is a way to define the structure (shape) of an object. It specifies the properties and methods that an object must have, without providing the actual implementation.
console.log("Interface Example:");

// 1. create an interface.
interface Person {
    name: string;
    age: number;
    college: string
}


// 2. use this interface.
const Student: Person = {
    name: "Dravinanshu Mishra",
    age: 26,
    college: "Integral University"
}

console.log("Student Details:", Student)

// 4. extends Person interface, it means person ke saara properties teacher ko mil jayenge aur teacher ke andar hum aur bhi property define kr sakte hain.
interface Teacher extends Person {
    subject: string,
    department: string
}

// 3. Teacher.
const Teacher: Teacher = {
    name: "Dr. Smith",
    age: 40,
    college: "Harvard University",
    subject: "Mathematics",
    department: "Science"
}

console.log("Teacher Details:", Teacher)
