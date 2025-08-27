function getInfo() {
    console.log("Hello World");
    const nameInput  = (document.getElementById("name") as HTMLInputElement);
    const emailInput = (document.getElementById("email") as HTMLInputElement);
    const ageInput = (document.getElementById("age") as HTMLInputElement);

    const name: string = nameInput.value;
    const email: string = emailInput.value;
    const age: number = parseInt(ageInput.value);

    if(name.trim() === "" || email.trim() === "" || isNaN(age)) {
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
