// indexSignature.ts
console.log("indexSignature.ts");
// dynamic key and value define here.
type userInfo = {
    id: number,
    readonly [key: string]: string | number | boolean;
}

const P1: userInfo = {
    id: 101,
    name: "Dravinanshu Mishra",
    email: "dravinanshu98@gmail.com",
    isActive: true,
    age:27,
    address: "Prayagraj"
}

console.log(P1);
// readOnly hai, we can define inside P1 object outside nahi kr sakate define because it is readOnly.
// P1.homeTown = "Prayagraj";
console.log(P1);