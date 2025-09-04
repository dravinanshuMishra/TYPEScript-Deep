"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /step: 2.
async function APICalls() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        // check HTTP status
        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
        }
        const result = await res.json();
        return result;
    }
    catch (error) {
        // rethrow so caller can handle it
        throw new Error(`API Call Failed: ${error.message}`);
    }
}
// usage
APICalls()
    .then((data) => console.log("✅ Data:", data))
    .catch((error) => console.error("❌ Error:", error.message))
    .finally(() => console.log("🎯 Finally done"));
