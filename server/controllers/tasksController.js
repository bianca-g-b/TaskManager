// Write helper functions
// WRITE functions that will be exported
// WRITE function that will get all tasks from db
// WRITE function that will get one task from db by id
// WRITE function that will create a task in db
// WRITE function that will update a task in db by id
// WRITE function that will delete a task from db by id


import * as tasksModel from "../models/tasksModel.js";

/* GET */

// Write function to get task by title
export async function getTaskByTitle(req, res,next) {
    if (req.query.title !== undefined) {
        console.log(req.query.search)
        const task = await tasksModel.getTaskByTitle(req.query.title);
        return res.json({result: task})
    }
    next();
}

// Write a function to search task content by word
export async function searchTaskByWord(req, res, next) {
    if (req.query.content !== undefined) {
        const task = await tasksModel.searchTaskByWord(req.query.content);
        return res.json({result: task})
    }
    next();
}

// Write function that will get all tasks from db
export async function getAllTasks(req, res) {
    const tasks = await tasksModel.getAllTasks();
    return res.json(tasks)
}

// Write function that will get a task by ID
export async function getTaskByID(req, res) {
    const task = await tasksModel.getTaskByID(req.params.id);
    return res.json(task)
}

/* POST */
// Write function that will create a task in db
export async function createTask(req, res) {
    const newTask = await tasksModel.createTask(req.body);
    return res.json({result: newTask})
}

/* PATCH */
// Write a function that will update the values of a task by id
export async function updateTask(req, res) {
    const updatedTask = await tasksModel.updateTask(req.params.id, req.body);
    return res.json({result: updatedTask})
}

/* DELETE */
// Write a function that will delete a task by id
export async function deleteTask(req, res) {
    const deletedTask = await tasksModel.deleteTask(req.params.id);
    return res.json({result: deletedTask})
}

/* PATCH */
//Write a function that will mark a task as completed by date
export async function markTaskAsCompletedByDate(req, res) {
    const completedTask = await tasksModel.markTaskAsCompletedbyDate();
    return res.json({result: completedTask})
}
