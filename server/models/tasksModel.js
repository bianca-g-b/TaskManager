// Import pool from db.js
import {pool} from "../db/db.js";

// Connect to pool
pool.connect();

/*  GET */
// Write function to get all tasks
export async function getAllTasks() {
    const query = `SELECT * FROM tasks`;
    const tasks = await pool.query(query);
    return [tasks.rows];
}

// Write function to get a single task by ID
export async function getTaskByID(id) {
    const value = [id];
    const query = `SELECT * FROM tasks WHERE id = $1;`;
    const task = await pool.query(query, value);
    return {task: task.rows[0]};
}

// Write function to get task by title
export async function getTaskByTitle(title) {
    const value = [title];
    const query = `SELECT * FROM tasks where title LIKE $1;`;
    const task = await pool.query(query, value);
    return [task.rows][0];
}

// Write function to search task content by word ??
export async function searchTaskByWord(word) {
    const value = [word];
    const query = `SELECT * FROM tasks where content ~* $1;`;
    const task = await pool.query(query, value);
    return [task.rows];
}

/* POST */
// Write function to create a new task
export async function createTask(details) {
    const value = [details.title, details.content, details.deadline, true];
    const query = `INSERT INTO tasks (title, content, deadline, active) VALUES($1, $2, $3, $4) RETURNING *;`;
    const newTask = await pool.query(query, value)
    return [task.rows]
}

/* PATCH */
// Write function to update values of a task
export async function updateTask(id, details) {
    const value = [details.title, details.content, details.deadline, id];
    const query = `UPDATE tasks SET title = $1, content = $2, deadline = $3 WHERE id = $4 RETURNING *;`;
    const updatedTask = await pool.query(query, value);
    return [updatedTask.rows];
}

/* DELETE */
// Write function to delete a task
export async function deleteTask(id) {
    const value = [id];
    const query = `DELETE FROM tasks where id = $1 RETURNING *;`;
    const deletedTask = await pool.query(query, value);
    return [deletedTask.rows];

}
