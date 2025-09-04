console.log("omitUtility.ts");
// 1. create an interface.
interface College {
    id: number,
    name: string,
    address: string,
    location: string,
    isActive: true,
}


// 2. omit me hum jo pass karnege usse chhod kar hum saare key yaha de sakte hai.
const myCollege: Omit<College, 'location' | "isActive"> = {
   id: 101,
   name: "NGBU",
   address: "Prayagraj"
}

console.log(myCollege);