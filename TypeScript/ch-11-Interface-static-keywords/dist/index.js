"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Interface with Class in TypeScript?");
// step: 2.
class CollegeData {
    collegeName;
    constructor(collegeName) {
        this.collegeName = collegeName;
    }
    displayStudentsName() {
        console.log("Ashu", "Anurag", "Anshuman", "Aman", "Akash");
    }
    displayTeachersName() {
        return ["Mr. Sam", "Dr.Dravinanshu Mishra", "Dr.Vikash Divyakirtiman", "Dr. Ruby Tiwari"];
    }
}
// step: 3. 
const NGBU = new CollegeData("Nehru Gram Bharti University");
console.log("College:", NGBU.collegeName);
NGBU.displayStudentsName();
console.log(NGBU.displayTeachersName());
