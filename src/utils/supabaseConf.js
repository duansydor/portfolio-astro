
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(import.meta.env.SUPABASE_API, import.meta.env.SUPABASE_ANON_KEY)