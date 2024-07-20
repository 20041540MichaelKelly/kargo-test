// Importing the createClient function from the supabase-js library
import { createClient } from '@supabase/supabase-js';

// Retrieving the Supabase URL and anonymous key from the environment variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// If either the Supabase URL or anonymous key is not provided, throw an error
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Missing Supabase environment variables');
}

// Creating a new Supabase client using the URL and anonymous key
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Exporting the Supabase client as the default export
export default supabase;