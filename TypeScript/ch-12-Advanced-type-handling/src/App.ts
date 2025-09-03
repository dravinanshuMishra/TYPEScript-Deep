// Type Gaurd in TS, 4. Custom type: interface type check.
interface userData {
    id: number,
    name: string,
    email: string,
}

interface userInfo {
    address: string,
    location: string,
}

let myUserData: userData | userInfo = {
    id: 101,
    name: "Ashu Mishra",
    email: "dravinanshu98@gmail.com"
};

let myUserInfo: userData | userInfo = {
    address: "Prayagraj",
    location: "Jhunsi Nayay nagar"
}

// check type.
function checkDataInterfaceType(data: userData | userInfo) {
   if((data as userData).id!=undefined && (data as userData).name!=undefined) {
    console.log("This is userData");
   } else if((data as userInfo).location!=undefined) {
    console.log("This is userInfo");
   }
}

checkDataInterfaceType(myUserData);
// checkDataInterfaceType(myUserInfo);
