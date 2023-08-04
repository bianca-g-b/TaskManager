import { supabase } from "../db/db.js";

// GET all tasks from Supabase by user_id
export async function getAllTasks(user_id_value) {
    try {
        const {data, error} = await supabase
            .from('tasks') 
            .select('*')
            .eq('user_id', user_id_value)
            .order('status', {ascending: false})
            .order('deadline', {ascending: true});
        
    if (error) {
        throw new Error(error.message);
    }
    return data;
    } catch (error) {
        throw new Error("Failed to get tasks from Supabase.");
    }
}

// GET task from Supabase by id
export async function getTaskByID(id) {
    try {
        const {data, error} = await supabase
            .from('tasks')
            .select('*')
            .eq('id', id)
            .single();
        if (error) {
            throw new Error("Failed to get task by id.");
        }
        return data;
    } catch (error) {
        throw new Error ("Failed to get task by id.")
    }
}

// // POST to create a new task
export async function createTask(details) {
    try {
        const currentDate = new Date().toISOString();
        const {data,error} = await supabase
            .from('tasks')
            .insert([
                {date: currentDate, title: details.title, content: details.content, deadline: details.deadline, status: true, user_id: details.user_id}
            ])
            .select()
        if (error) {
            console.error('Error creating task:', error);
            throw new Error("Failed to create task.")
        }
        return data;
    } catch (error) {
        throw new Error ("Failed to create task.")
    }
}

// // PATCH to edit task
export async function editTask(id, details) {
    try {
        const {data, error} = await supabase
            .from('tasks')
            .update({title: details.title, content: details.content, deadline: details.deadline, status: details.status})
            .eq('id',id)
            .select();
        if (error) {
            throw new Error("Failed to edit task.")
        }
        return data;
    } catch (error) {
        throw new Error("Failed to edit task.")
    }
}

// // DELETE to delete task
export async function deleteTask(id) {
    try {
        const {data, error} = await supabase
            .from('tasks')
            .delete()
            .eq('id', id)
            .select();
        if (error) {
            throw new Error("Failed to delete task.")
        }
        return data;
    } catch (error) {
        throw new Error("Failed to delete task.")
    }
}