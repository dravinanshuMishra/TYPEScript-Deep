// string and boolean data types.
// Syntax: var variable_name: data_type = Value;

var str1: string = "Hello, world!";
console.log(str1);
var str2: string = 'Hello, TypeScript';
console.log(str2);
var str3: string = `Hello`;
console.log(str3);

// boolean data types
var isActive: boolean = true;
console.log(isActive);
var isLoggedIn: boolean = false;
console.log(isLoggedIn);


// string type conversion
var num: number = 123;
var str4: string = String(num);
console.log(typeof str4);