console.log("readOnlyUtility.ts");
interface mySchool {
  id: number,
  name: string,
  location: string
}

// readOnly means object ke bahar we cannot change the name.
const mySchool1: Readonly<mySchool> = {
    id: 101,
    name: "M D Inter College",
    location: "Prayagraj"
}

// mySchool1.name= "Nehru Gram" //Cannot assign to 'name' because it is a read-only property
console.log(mySchool1);