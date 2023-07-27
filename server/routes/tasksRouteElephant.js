// ROUTES

// router.get("/", tasksController.getTaskByTitle); // Get task by title
// router.get("/", tasksController.searchTaskByWord); // Search task content by word

// router.get("/supabase", tasksController.getAllTasksFromSupabase); // Get all tasks from Supabase 

// router.get("/supabase/pool", tasksController.getAllTasksFromSupabaseUsingPool); // Get all tasks from Supabase using pool

/* PATCH */
// router.patch("/", tasksController.markTaskAsCompletedByDate); // Mark task as done by date


// from db.jd - not used anymore

// Import pg
// import pg from "pg";

// Get connection string to database
// const connectionString = process.env.REACT_APP_CONNECTION_STRING;
// const supabaseConnectionString = process.env.REACT_APP_SUPABASE_CONNECTION_STRING;


// Throw error if connection string not found
// if (!supabaseConnectionString) {
//     throw new Error("No database connection string found.");
// }

// // Define and export pool
// export const pool = new pg.Pool({
//     // connectionString,
//     connectionString: supabaseConnectionString,
// })
