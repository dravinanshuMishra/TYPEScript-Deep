var num: number = 55;
console.log(num);

// 2. array numbers example
var numA: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(numA);

// 3. array string examples
var strA: string[] = ["Hello", "World", "!!"];
console.log(strA);

// 4. array boolean examples
var boolA: boolean[] = [true, false, true];
console.log(boolA);

// 5. tuples examples.
var tuplesA: [number, string, boolean] = [1, "Hello", true];
console.log(tuplesA);

// 6. object examples.
var obj: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "Ashu",
  isActive: true,
};
console.log(obj);

// 7. special data type example.

// 7.1 any example.
var anyNum: any = 5;
console.log(anyNum);

var anyStr: any = "Hello";
console.log(anyStr);

// 7.2 unknow example.
var unknownNum: unknown = 7;
console.log(unknownNum);
var y: unknown = "test";
if (typeof y === "string") console.log(y.toUpperCase());

// 7.4 void.
function logMsg(): void {
  console.log("Hello");
}
logMsg();

// 7.3 never example.
function throwError(message: string): never {
    throw new Error(message);
}

throwError("This is an error message");

// 8. advanced data types.
// 8.1. union examples, union me hum jo-2 types denge hum wahi wahi type hum de sakte hain.
var unionTypes: number | string;
unionTypes = 67;
console.log("number:", unionTypes);
unionTypes = "Hello";
console.log("string:", unionTypes);

// 8.2 intersection examples, intersection me hum jo-2 types denge unka combination milta hai.
type employee = { name: string };
type manager = { department: string };
type employeeManager = employee & manager;

var lead: employeeManager = {
  name: "Ashu Mishra",
  department: "IT",
};

console.log(lead);

// 8.3 typed alias.
type Id = number | string;
var userId: Id = "Ashu1234567";
console.log(userId);


// 8.4 enum examples.
enum Role {
    Admin,
    user,
    Guest,
}

var userRole: Role = Role.Admin;
console.log("userRole:", userRole);

// 8.5 Literals types.
var direction: "up" | "down" | "left" | "right";
direction = "up";
console.log(direction);

// 9. function types, yaha pr humne function ko type diya hai.
const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(5, 10));