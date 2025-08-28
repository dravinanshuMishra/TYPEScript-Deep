console.log("Enum Data: Defines a set of named constants.")
// 1. create enum., role ke andar ho hum koi ek choose kr sakte hai.
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

// Example usage
const myRole: Role = Role.Admin;
console.log("myRole:", myRole);

// 2. Accessing enum Role.
console.log("another role", Role.Guest);

