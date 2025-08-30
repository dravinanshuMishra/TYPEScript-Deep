import type { TeacherInfo, UserInfoType } from "./types/type.js";

const userData: UserInfoType = {
    id: "u001",
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    password: "securepassword",
    department: "Engineering"
};

console.log(userData);


const TeacherData: TeacherInfo = {
    id: "t001",
    name: "Jane Smith",
    age: 40,
    email: "jane.smith@example.com",
    password: "securepassword",
    department: "Mathematics",
    subject: "Algebra",
    yearsOfExperience: 10
};

console.log(
    TeacherData
);