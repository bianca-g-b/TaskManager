// Import pg
import pg from "pg";

// Get connection string to database
// const connectionString = process.env.REACT_APP_CONNECTION_STRING;


// Throw error if connection string not found
if (!connectionString) {
    throw new Error("No database connection string found.");
}

// Define and export pool
export const pool = new pg.Pool({
    connectionString,
})