// Get request - to view all tasks
export async function getTasks() {
    try {
        const response = await fetch("api/tasks");
            if (!response.ok) {
                throw new Error ("Request failed!");
            }
            else {
        const data = await response.json();
            return data
        }}
        catch (error) {
            console.log(error);
            return [];
        }
    }

// Post request - to create a new task
export async function createTask(details) {
    try {
        await fetch("api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        });
        const updatedTasks = await getTasks();
        return updatedTasks;
    } 
    catch (error) {
    console.error('Error:', error);
    return null;
    }
}

// Patch request - to edit a task
export async function editTask(id, details) {
    try {
        await fetch(`api/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        });
        const updatedTasks = await getTasks();
        return updatedTasks;
    }
    catch (error) {
        console.error("Error:",error);
        return null;
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

// Delete request - to delete a task by id
export async function deleteTask(id) {
    try {
        const response = await fetch(`api/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("Delete task failed!")
        }
        const data = await response.json();
        return data;
        // return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}