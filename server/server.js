// Import dependencies
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Create app
const app = express();

// Get port
const port  = process.env.REACT_APP_PORT

// Parse JSON
app.use(express.json())


// Listen to port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
