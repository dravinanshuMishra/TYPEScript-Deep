console.log("Type Creates a custom name for a type to improve readability.")

// step: 1. create an type.
type dataType= {
    id: number,
    name: string,
    isActive: boolean
}

// 2. use type.
const user: dataType = {
    id: 1,
    name: "John Doe",
    isActive: true
}

// 3. user type.
const user2: dataType = {
    id: 2,
    name: "Jane Smith",
    isActive: false
}

console.log(user);
console.log(user2);