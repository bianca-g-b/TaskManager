export async function getTasks() {
    try {
        const response = await fetch("api/tasks");
            if (!response.ok) {
                throw new Error ("Request failed!");
            }
        const data = await response.json();
            return data
        }
        catch (error) {
            console.log(error);
        }
    }
