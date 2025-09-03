"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myUserData = {
    id: 101,
    name: "Ashu Mishra",
    email: "dravinanshu98@gmail.com"
};
let myUserInfo = {
    address: "Prayagraj",
    location: "Jhunsi Nayay nagar"
};
// check type.
function checkDataInterfaceType(data) {
    if (data.id != undefined && data.name != undefined) {
        console.log("This is userData");
    }
    else if (data.location != undefined) {
        console.log("This is userInfo");
    }
}
checkDataInterfaceType(myUserData);
// checkDataInterfaceType(myUserInfo);
