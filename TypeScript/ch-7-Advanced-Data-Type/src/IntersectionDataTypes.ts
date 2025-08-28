console.log("Intersection: Intersection Combines multiple types into one, requiring all properties.")

// 1. Create Intersection.
type PersonName = {
    firstName: string,
    lastName: string
}

// 2. create another intersection.
type PersonAge = {
    age: number
}

// 3. create another intersection.
type PersonContact = {
    email: string,
    phone: string
}

// 4. combine all Intersection, it is intersection khasiyat.
type PersonDetails = PersonName & PersonAge & PersonContact;

// 5. use this intersection
const person: PersonDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    phone: "123-456-7890"
};

console.log(person);
