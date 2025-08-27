"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo() {
    console.log("Hello World");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const name = nameInput.value;
    const email = emailInput.value;
    const age = parseInt(ageInput.value);
    if (name.trim() === "" || email.trim() === "" || isNaN(age)) {
        return alert("Please fill in all fields correctly.");
    }
    // agar sab valid hai to print karo
    console.log(name);
    console.log(email);
    console.log(age);
    alert("Data submitted successfully !!");
    // ab fields ko reset kar do
    nameInput.value = "";
    emailInput.value = "";
    ageInput.value = "";
}
//# sourceMappingURL=index.js.map