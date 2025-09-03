// Keyof operator in TS is used to get the keys of an object type as a union of string literals.
type Person  = {
    id: number,
    name: string,
    isActive: boolean
}

const userData: Person = {
    id: 101,
    name: "Rajni Kanth",
    isActive: true
}

// keyOf example. yaha pr hum wahi key define kr sakte hai jo Person ke andar deined key hai.
let myPerson: keyof Person;
myPerson="id";
myPerson="isActive";
myPerson="name"
console.log(myPerson);

// how to use object keys with keyof. 
let user: keyof typeof userData="id";
console.log(user);