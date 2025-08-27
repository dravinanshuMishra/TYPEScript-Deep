// function ka type batao, koi bhi function jo data type return karti hai wo us  function ka data type hota hai.

// 1. sring type ka function.
function name(): string {
    return "Ashu"
}

name();

// 2. number type ka function.
function age(): number {
    return 25;
}

age();

// 3. boolean type ka function.
function isStudent(): boolean {
    return true;
}
isStudent();

// 4. any type ka function.
function getData(): any {
    return "Hello World";
}

getData();


// 5. void type ka function, aisa function jo kuch return nahi karta.
function logMessage(): void {
    console.log("Hello World");
}

logMessage();

// 6. never type ka function, aisa function jo kabhi return nahi hota.
function throwError(): never {
    throw new Error("This is an error");
}

// throwError();