console.log("extractUtility.ts");
// 1. create type.
type APIStatus2 = "loading" | "error" | "Pending" | "success";


// Extract means, APICall2 me ab hum sirf success, error hi use kr sakte hai loading ya pending nahi kr sakte.
let APICall2: Extract<APIStatus2, 'success' | "error">;
console.log(APICall2="success");
console.log(APICall2="error");