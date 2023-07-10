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

export async function updateTasks() {
    try {
        const response = await fetch("api/tasks", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } 
    catch (error) {
    console.error('Error:', error);
    }
    }
