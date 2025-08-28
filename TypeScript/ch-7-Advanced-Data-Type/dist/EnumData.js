"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Enum Data: Defines a set of named constants.");
// 1. create enum., role ke andar ho hum koi ek choose kr sakte hai.
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
// Example usage
const myRole = Role.Admin;
console.log("myRole:", myRole);
// 2. Accessing enum Role.
console.log("another role", Role.Guest);
