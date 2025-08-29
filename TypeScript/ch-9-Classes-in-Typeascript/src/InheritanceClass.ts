console.log("Inheritance :: Inheritance allows one class (child) to use properties & methods of another class (parent) using the extends");

// step : 1. Base class.
class Authentication {
    private isLoggedIn: boolean = false;

    // login .
    public login(name: string): void {
        if(this.isLoggedIn) {
            console.log(`User ${name} is already logged in.`);
        } else {
            this.isLoggedIn = true;
            console.log(`User ${name} logged in successfully.`);
        }
    }
}


// 2. Student class.
class Student extends Authentication {
    // additional properties and methods can be added here.
    private marks: number[] = [];

    public addMarks(mark: number): void {
        this.marks.push(mark);
    }

    public getAverageMarks(): number {
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
    public teach(subject: string): void {
        console.log(`Teaching ${subject}`);
    }
}

const MrSmith = new Teacher();
MrSmith.login("Mr. Smith");
MrSmith.teach("Mathematics");
