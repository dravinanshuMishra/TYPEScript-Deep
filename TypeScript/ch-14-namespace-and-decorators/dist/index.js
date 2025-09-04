"use strict";
// NAMESPACE IN TS.
/*
 * A namespace is a way to group related code (classes, functions, interfaces, variables)
   under a single name to avoid naming conflicts.
    Members inside a namespace are private by default.
    Use export to make them accessible outside.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 1. userNameSpace.
var userAuthentication;
(function (userAuthentication) {
    class Auth {
        login(name) {
            return name + ` is loggedin`;
        }
        logout(name) {
            return name + ` is loggedout`;
        }
    }
    userAuthentication.Auth = Auth;
    function getList() {
        return ["Ashu Mishra", "Mishra Alok", "Ravi", "Aman"];
    }
    userAuthentication.getList = getList;
})(userAuthentication || (userAuthentication = {}));
// userAuthentication namesapce.
let userAuth = new userAuthentication.Auth();
// 1. loggedin.
const userLoggedIn = userAuth.login("Ashu Mishra");
console.log(userLoggedIn);
// 2. logout.
const userLoggedOut = userAuth.logout("Ashu Mishra");
console.log(userLoggedOut);
// get All user getList.
const userList = userAuthentication.getList();
console.log(userList);
// 2. AdminNameSpace.
var adminAuthentication;
(function (adminAuthentication) {
    class Auth {
        login(name) {
            return name + `is loggedin`;
        }
        logout(name) {
            return name + `is loggedout`;
        }
    }
    adminAuthentication.Auth = Auth;
    function adminList() {
        return ["Dravinanshu Mishra", "Abhishek Srivastav"];
    }
    adminAuthentication.adminList = adminList;
})(adminAuthentication || (adminAuthentication = {}));
// use of namespace.
const admin = new adminAuthentication.Auth();
const adminlogin = admin.login("Dravinanshu Mishra");
const adminlogout = admin.logout("Dravinanshu Mishra");
console.log(adminlogin);
console.log(adminlogout);
const adminlist = adminAuthentication.adminList();
console.log(adminlist);
