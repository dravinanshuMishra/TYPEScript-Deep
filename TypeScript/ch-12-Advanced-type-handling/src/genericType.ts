// Generic Types examples.
function genericType<T>(data: T): T {
    return data;
}

const str = genericType("ashu");
const num = genericType(120);
const bool = genericType(true);

console.log(typeof str);
console.log(str);
console.log(typeof num);
console.log(num);
console.log(typeof bool);
console.log(bool);