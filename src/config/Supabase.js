import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://libhndflkyotnmegmnkw.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const serviceKey = process.env.REACT_APP_SUPABASE_SERVICE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
// export const supabaseService = createClient(supabaseUrl, serviceKey);

