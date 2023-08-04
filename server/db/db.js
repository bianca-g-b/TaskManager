import {createClient} from "@supabase/supabase-js";


// Connect to Supabase database

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase connection details not found.")
}

// const options = {
//     auth: {
//         localStorage,
//         autoRefreshToken: true,
//         persistSession: true,
//         detectSessionInUrl: true,
//     },
//   };
// , {auth:{persistSession: false}}

export const supabase = createClient(supabaseUrl, supabaseKey, {auth:{persistSession: false}});