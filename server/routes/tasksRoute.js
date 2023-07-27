// Import express
import express from "express";

// Import tasksController functions, to use them in routes
import * as tasksController from "../controllers/tasksController.js";

// Create router
export const router = express.Router();

// Create routes

/* GET */
router.get("/", tasksController.getAllTasks); // Get all tasks
router.get("/:id", tasksController.getTaskByID); // Get task by ID
/* POST */
router.post("/", tasksController.createTask); // Create a task
/* PATCH */
router.patch("/:id", tasksController.editTask); // Update a task by ID
/* DELETE */
router.delete("/:id", tasksController.deleteTask) // Delete a task by ID



