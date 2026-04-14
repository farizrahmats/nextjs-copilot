import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * A lightweight Supabase client scoped to database operations only.
 * Authentication is not configured — use this for direct DB queries.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
