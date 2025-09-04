console.log("Async Programming...");

// interface.
interface userData {
    id: number;
    name: string;
    email: string;
    status: boolean;
}

// step: 1. create a function with promise.
function fetchUser(): Promise<userData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // ye apiSuccess api ka aayega, api 200 success otherwise false.
      const apiSuccess = Math.random() > 0.5; // randomly true/false

      if (apiSuccess) {
        resolve({
          id: 101,
          name: "Dravinanshu Mishra",
          email: "dravinanshu98@gmail.com",
          status: true
        });
      } else {
        reject("❌ API request failed");
      }
    }, 2000);
  });
}

// step: 2. pending ke case me.
console.log("⏳ Pending...");

// step: 3. call the functions.
fetchUser()
  .then((data) => console.log("Then:", data))
  .catch((error) => console.log("Catch:", error))
  .finally(() => console.log("Done ✅"));

