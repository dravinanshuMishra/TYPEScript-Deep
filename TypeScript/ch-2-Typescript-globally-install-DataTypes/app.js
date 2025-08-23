var num = 55;
console.log(num);
// 2. array numbers example
var numA = [1, 2, 3, 4, 5, 6, 7];
console.log(numA);
// 3. array string examples
var strA = ["Hello", "World", "!!"];
console.log(strA);
// 4. array boolean examples
var boolA = [true, false, true];
console.log(boolA);
// 5. tuples examples.
var tuplesA = [1, "Hello", true];
console.log(tuplesA);
// 6. object examples.
var obj = {
    id: 1,
    name: "Ashu",
    isActive: true,
};
console.log(obj);
// 7. special data type example.
// 7.1 any example.
var anyNum = 5;
console.log(anyNum);
var anyStr = "Hello";
console.log(anyStr);
// 7.2 unknow example.
var unknownNum = 7;
console.log(unknownNum);
var y = "test";
if (typeof y === "string")
    console.log(y.toUpperCase());
// 7.4 void.
function logMsg() {
    console.log("Hello");
}
logMsg();
// 7.3 never example.
function throwError(message) {
    throw new Error(message);
}
throwError("This is an error message");
// 8. advanced data types.
// 8.1. union examples, union me hum jo-2 types denge hum wahi wahi type hum de sakte hain.
var unionTypes;
unionTypes = 67;
console.log("number:", unionTypes);
unionTypes = "Hello";
console.log("string:", unionTypes);
var lead = {
    name: "Ashu Mishra",
    department: "IT",
};
console.log(lead);
var userId = "Ashu1234567";
console.log(userId);
// 8.4 enum examples.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.Admin;
console.log("userRole:", userRole);
// 8.5 Literals types.
var direction;
direction = "up";
console.log(direction);
// 9. function types, yaha pr humne function ko type diya hai.
var add = function (a, b) {
    return a + b;
};
console.log(add(5, 10));
