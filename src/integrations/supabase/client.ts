// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xpottfcqlzhnjsurrmkx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwb3R0ZmNxbHpobmpzdXJybWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MjkyMjcsImV4cCI6MjA2NjIwNTIyN30.BjNaINP4snujLTVRijxix42MWFriV98V_wRWmmhasdY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);