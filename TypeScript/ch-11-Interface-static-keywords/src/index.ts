console.log("Interface with Class in TypeScript?");

// step: 1. define interface.
interface CollegeDataType{
   collegeName: string;
    displayStudentsName(): void;
    displayTeachersName(): string[];
}

// step: 2.
class CollegeData implements CollegeDataType {
    public collegeName: string;
    constructor(collegeName: string) {
        this.collegeName = collegeName;
    }

    displayStudentsName(): void {
        console.log("Ashu", "Anurag", "Anshuman", "Aman", "Akash");
    }

    displayTeachersName(): string []{
        return ["Mr. Sam", "Dr.Dravinanshu Mishra", "Dr.Vikash Divyakirtiman", "Dr. Ruby Tiwari"];
    }
}

// step: 3. 
const NGBU = new CollegeData("Nehru Gram Bharti University");
console.log("College:", NGBU.collegeName);
NGBU.displayStudentsName();
console.log(NGBU.displayTeachersName());