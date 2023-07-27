// Old functions used with Elephant database and other attempts to connect to Supabase

// Import pool from db.js
// import {pool} from "../db/db.js";

// Connect to pool
// pool.connect();

/*  GET */ //tested
// Write function to get task by title
// export async function getTaskByTitle(title) {
//     const value = [title];
//     const query = `SELECT * FROM tasks WHERE title ILIKE $1`;
//     const task = await pool.query(query, value);
//     // console.log(task)
//     return {task: task.rows[0]};
// }

/*  GET */ //tested
// Write function to search task content by word
// export async function searchTaskByWord(word) {
//     const value = [word+'%', '%'+word, '%'+word+'%'];
//     const query = `SELECT * FROM tasks WHERE content ILIKE $1 OR content ILIKE $2 OR content ILIKE $3;`;
//     // works with: http://www.localhost:5000/tasks?content=buy
//     const task = await pool.query(query, value);
//     return {task: task.rows[0]};
// }

/*  GET */ //tested
// Write function to get all tasks
// export async function getAllTasks() {
//     const query = `SELECT * FROM tasks`;
//     const tasks = await pool.query(query);
//     return tasks.rows;
// }


/*  GET */ //tested
// Write function to get a single task by ID
// export async function getTaskByID(id) {
//     const value = [id];
//     const query = `SELECT * FROM tasks WHERE id = $1;`;
//     const task = await pool.query(query, value);
//     return task.rows[0];
// }

/* POST */ //tested
// Write function to create a new task
// export async function createTask(details) {
//     const value = [details.title, details.content, details.deadline, true];
//     const query = `INSERT INTO tasks (title, content, deadline, active) VALUES($1, $2, $3, $4) RETURNING *;`;
//     const newTask = await pool.query(query, value)
//     return {task: newTask.rows[0]}
// }

/* PATCH */ //tested
// Write function to update values of a task
// export async function updateTask(id, details) {
//     const value = [details.title, details.content, details.deadline, details.active, id];
//     const query = `UPDATE tasks SET title = $1, content = $2, deadline = $3, active = $4 WHERE id = $5 RETURNING *;`;
//     const updatedTask = await pool.query(query, value);
//     return updatedTask.rows[0];
// }

/* DELETE */ //tested
// Write function to delete a task
// export async function deleteTask(id) {
//     const value = [id];
//     const query = `DELETE FROM tasks where id = $1 RETURNING *;`;
//     const deletedTask = await pool.query(query, value);
//     return {task: deletedTask.rows[0]};
// }

// to do: change active to false when deadline is passed
// to do: add a function that will get all active tasks
// to do: add a function that will get all completed tasks
// to do: add a function that will get all tasks that are due today
// to do: add a function that will get all tasks that are due this week
// to do: add a function that will get all tasks that are due this month

/* PATCH */ //tested
// export async function markTaskAsCompletedbyDate() {
//     const query = `UPDATE tasks SET active = false WHERE deadline < CURRENT_DATE RETURNING *;`;
//     const completedTask = await pool.query(query);
//     return {tasks: completedTask.rows};
// }

// GET FROM SUPABASE
// FUNCTION TO GET ALL TASKS FROM SUPABASE
// export async function getAllTasksFromSupabase() {
//     try {
// const {data, error} = await supabase.from('tasks').select('*')
//     // .order('date', {ascending: true});
//     if (error) {
//         throw new Error(error.message);
//     }
//     console.log("test supabase");
//     return data;
//     } catch (error) {
//         throw new Error("Failed to get tasks from Supabase");
//     }
// }


// GET all tasks from Supabase using pool
// export async function getAllTasks() {
//     try {
//         const query = `SELECT * FROM tasks`;
//         const tasks = await pool.query(query);
//         console.log("testing poll db");
//         return tasks.rows;
//     } catch (error) {
//         throw new Error("Failed to get tasks from Supabase");
//     }
// }
