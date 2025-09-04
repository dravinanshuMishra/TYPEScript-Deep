// NAMESPACE IN TS.
/*
 * A namespace is a way to group related code (classes, functions, interfaces, variables)
   under a single name to avoid naming conflicts.
	Members inside a namespace are private by default.
	Use export to make them accessible outside.
 */

// 1. userNameSpace.
namespace userAuthentication {
  export class Auth {
    login(name: string): string {
      return name + ` is loggedin`;
    }

    logout(name: string): string {
      return name + ` is loggedout`;
    }
  }

  export function getList(): string[] {
    return ["Ashu Mishra", "Mishra Alok", "Ravi", "Aman"];
  }
}

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
namespace adminAuthentication {
    export class Auth {
        login(name: string): string {
            return name+ `is loggedin`;
        }
        logout(name: string): string {
            return name+ `is loggedout`;
        }
    }

    export function  adminList(): string[] {
       return ["Dravinanshu Mishra", "Abhishek Srivastav"];
    }
}

// use of namespace.
const admin = new adminAuthentication.Auth();
const adminlogin = admin.login("Dravinanshu Mishra");
const adminlogout = admin.logout("Dravinanshu Mishra");
console.log(adminlogin);
console.log(adminlogout);
const adminlist = adminAuthentication.adminList();
console.log(adminlist);
