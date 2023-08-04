import * as tasksModel from "../models/tasksModel.js";

// GET - all tasks
export async function getAllTasks(req, res) {
    try {
        const user_id = req.headers.authorization.replace("Bearer ", "");    
        if (!user_id) {
            return res.status(401).json({error: "Unauthorized"});
        }
        const tasks = await tasksModel.getAllTasks(user_id);
        return res.json(tasks);             
    } catch (error) {
        return res.json({error: error.message});
    }
}

// GET - task by id
export async function getTaskByID(req,res) {
    try {
        const task = await tasksModel.getTaskByID(req.params.id);
        return res.json(task);
    } catch (error) {
        return res.json({error: error.message});
    }
}

// POST - create new task
export async function createTask(req, res) {
    try {
        const newTask = await tasksModel.createTask(req.body);
        return res.json(newTask);
    } catch (error) {
        return res.json({error: error.message})
    }
}

// PATCH - edit task
export async function editTask(req,res) {
    try {
        const editedTask = await tasksModel.editTask(req.params.id, req.body);
        return res.json(editedTask);
    } catch (error) {
        return res.json ({error: error.message});
    }
}

// DELETE - delete task
export async function deleteTask(req,res) {
    try {
        const deletedTask = await tasksModel.deleteTask(req.params.id);
        return res.json(deletedTask);
    } catch (error) {
        return res.json({error: error.message});
    }
}