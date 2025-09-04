console.log("excludeType.ts");
// 1. create type.
type APIStatus = "loading" | "error" | "Pending" | "success";


// exclude ka matalab ye hua, yaha pr main Pending ko chhod kar loading, error, success APICall me add kr sakata hu isake alawa aur kuchha bhi nahi.
let APICall: Exclude<APIStatus, 'Pending'> = "success";
console.log(APICall); // success.
console.log(APICall="error");
console.log(APICall="loading");
console.log(APICall="success");
// console.log(APICall="Pending"); // not valid.

