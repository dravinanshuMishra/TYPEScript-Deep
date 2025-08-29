"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Inheritance :: Inheritance allows one class (child) to use properties & methods of another class (parent) using the extends");
// step : 1. Base class.
class Authentication {
    isLoggedIn = false;
    // login .
    login(name) {
        if (this.isLoggedIn) {
            console.log(`User ${name} is already logged in.`);
        }
        else {
            this.isLoggedIn = true;
            console.log(`User ${name} logged in successfully.`);
        }
    }
}
// 2. Student class.
class Student extends Authentication {
    // additional properties and methods can be added here.
    marks = [];
    addMarks(mark) {
        this.marks.push(mark);
    }
    getAverageMarks() {
        const total = this.marks.reduce((acc, curr) => acc + curr, 0);
        return total / this.marks.length;
    }
}
const Ashu = new Student();
Ashu.login("Ashu");
Ashu.addMarks(85);
Ashu.addMarks(90);
console.log(Ashu.getAverageMarks());
// class Teacher.
class Teacher extends Authentication {
    // additional properties and methods can be added here.
    teach(subject) {
        console.log(`Teaching ${subject}`);
    }
}
const MrSmith = new Teacher();
MrSmith.login("Mr. Smith");
MrSmith.teach("Mathematics");
