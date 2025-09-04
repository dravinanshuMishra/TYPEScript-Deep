console.log("picUtility.ts");
interface mySchool2 {
    id: number,
    name: string,
    location: string
}


// pick means koi bhi utility aap pic kr sakte hai according to your needs.
const MDIC: Pick<mySchool2, 'id' | 'name'> = {
    id: 101,
    name: "MDIC"
}

console.log(MDIC)