"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("utility types in TS");
// 1. use partial utility.
// isse partial bana diya, agar partial na hota to interface ke saare key use mendatory tha.
const mumbai = {
    id: 101,
    name: "IIT Bombay",
};
console.log(mumbai);
// partial utility ka use functions lke saath.
function myCollege(data) {
    return data;
}
const p1 = myCollege({ id: 101 });
console.log(p1);
