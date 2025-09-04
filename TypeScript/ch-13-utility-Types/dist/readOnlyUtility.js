"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("readOnlyUtility.ts");
// readOnly means object ke bahar we cannot change the name.
const mySchool1 = {
    id: 101,
    name: "M D Inter College",
    location: "Prayagraj"
};
// mySchool1.name= "Nehru Gram" //Cannot assign to 'name' because it is a read-only property
console.log(mySchool1);
