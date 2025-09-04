console.log("requiredUtility.ts");
interface College1 {
    id: number,
    name: string,
    location: string,
    isActive?:boolean 
    // isActive here is an optional but when we use required then we should pass also isActive.
}


function myCollege2(data: College1) {
    return data;
}

const p2 = myCollege2({id:101,name:"ashu", location: "Bombay"});
console.log(p2);

// required example.
function myCollege3(data: Required<College1>) {
    return data;
}

const p3 = myCollege3({id:101,name:"ashu", location: "Bombay", isActive: true});
console.log(p3);
