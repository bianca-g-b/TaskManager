// Import express
import express from "express";

// Import tasksController functions, to use them in routes
import {getTasks} from "../controllers/tasksController";

// Create router
const router = express.Router();

// Create route to get all tasks
router.get("/tasks", getTasks);
