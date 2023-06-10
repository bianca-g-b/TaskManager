// Import dependencies
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Import router
import {router} from "./routes/tasksRoute.js";

// Create app
const app = express();

// Get port
const port  = process.env.REACT_APP_PORT || 5001;

// Parse JSON
app.use(express.json())

app.use("/tasks", router)

// Listen to port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
