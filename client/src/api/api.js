// Get request - to view all tasks
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

// Patch request - to update tasks by deadline    
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
    throw new Error ("Failed to update tasks.")
    }
    }

// Post request - to create a new task
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

// Patch request - to edit a task
export async function editTask(id, details) {
    try {
        const response = await fetch(`api/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        });
        const data = await response.json();
        return data.result;
    }
    catch (error) {
        console.error("Error:",error);
        throw new Error ("Edit task failed.")
    }
}

// Get request - to get a task by id
export async function getTaskByID(id) {
    try {
        const response = await fetch(`api/tasks/${id}`);
        if (!response.ok) {
            throw new Error ("Request failed!");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

