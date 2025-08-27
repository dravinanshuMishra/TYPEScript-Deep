console.log("Array in Typescript");

// 1. string type. Array Declaration
let fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// 2. number type. Array Declaration
let num: number[] = [1,2,3,4,5,6,7];
console.log(num);

// 3. mixed type wala.
let mixed: (string | number)[] = ["Apple", 7, "Grapes", 12];
console.log(mixed);

// 4. another way syntax defined array.
let anotherFruits: Array<string> = ["Apple", "Banana", "Cherry"];
console.log(anotherFruits);


// 5. readonly array.
let readonlyFruits: readonly string[] = ["Apple", "Banana", "Cherry"];
console.log(readonlyFruits);

// readonlyFruits.push("Mango"); // Error: Cannot modify a readonly array
