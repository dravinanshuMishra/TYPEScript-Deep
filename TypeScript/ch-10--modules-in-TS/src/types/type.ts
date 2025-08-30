interface CommonInfo {
    id: string;
    name: string;
    age: number;
    email: string;
}

export interface UserInfoType extends CommonInfo {
    password: string;
    department: string;
}

export interface TeacherInfo extends UserInfoType {
    subject: string;
    yearsOfExperience: number;
}
