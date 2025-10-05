import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rdbnkvbwbmgsafodmrms.supabase.co";   // from Supabase dashboard
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkYm5rdmJ3Ym1nc2Fmb2Rtcm1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1ODkyMjMsImV4cCI6MjA3NTE2NTIyM30.hKnYV74IRdE-b09Pzs7sTlazuh_P2dIyuzQ5qqdFH48";                         // from API settings
export const supabase = createClient(supabaseUrl, supabaseKey);
