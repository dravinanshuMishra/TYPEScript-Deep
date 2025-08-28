console.log("Advanced Data Types, union");
//1.  union data types. in teeno data type ka hum koi bhi data store kr sakte hai
let data: string | number | boolean;
data = "hello";
console.log(data);
data = 42;
console.log(data);
data = true;
console.log(data);


// 2. Function parameter and return type both using union
function formatData(data: string | number): string | number {
    if (typeof data === "string") {
        return data.toUpperCase();  // return string
    } else {
        return data * 2;            // return number
    }
}

console.log(formatData("hello")); // "HELLO"
console.log(formatData(10));      // 20

