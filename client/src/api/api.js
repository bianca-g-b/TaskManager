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

export async function createTask(details) {
    try {
        const response = await fetch("api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        });
        const data = await response.json();
        return data.result;
    } 
    catch (error) {
    console.error('Error:', error);
    throw new Error("Create task failed");
    }
    }
