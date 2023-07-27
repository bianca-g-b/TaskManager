// Import dependencies
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// Import router
import {router} from "./routes/tasksRoute.js";

// Create app
const app = express();
app.use(cors());

// Get port
const port  = process.env.REACT_APP_PORT || 5432;

// Parse JSON
app.use(express.json())

// Define a route handler for the root URL ("/")
app.get("/", (req, res) => {
    res.send("Hello, World!"); // Send a response to the client
  });
  

app.use("/api/tasks", router)

// Listen to port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
