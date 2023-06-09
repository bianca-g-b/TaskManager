// Import pool from db.js
import {pool} from "../db/db";

// Connect to pool
pool.connect()

// Write function to get all tasks
export async function getAllTasks() {
    const query = `SELECT * FROM tasks`
    const result = await pool.query(query);
    return [result.rows];
}