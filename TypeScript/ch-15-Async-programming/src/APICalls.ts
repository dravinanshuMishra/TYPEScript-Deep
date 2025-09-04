// step: 1. type.
type APIData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// /step: 2.
async function APICalls(): Promise<APIData> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    // check HTTP status
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }

    const result: APIData = await res.json();
    return result;
  } catch (error) {
    // rethrow so caller can handle it
    throw new Error(`API Call Failed: ${(error as Error).message}`);
  }
}

// usage
APICalls()
  .then((data: APIData) => console.log("✅ Data:", data))
  .catch((error) => console.error("❌ Error:", error.message))
  .finally(() => console.log("🎯 Finally done"));
