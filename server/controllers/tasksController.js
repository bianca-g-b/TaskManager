// Write helper functions
// WRITE functions that will be exported
// WRITE function that will get all tasks from db
// WRITE function that will get one task from db by id
// WRITE function that will create a task in db
// WRITE function that will update a task in db by id
// WRITE function that will delete a task from db by id

import {getAllTasks} from "../models/tasksModel";
/*Alternative way
import * as tasksModel from "./tasksController"
*/

// Write function that will get all tasks from db
export async function getTasks(req, res) {
    const tasks = await getAllTasks();
    // const tasks = await tasksModel.getAllTasks // alternative
    return res.json({result: tasks})
}