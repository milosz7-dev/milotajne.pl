import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Wpisz tutaj dane ze swojego panelu Supabase (Settings -> API)
const SUPABASE_URL = 'https://twoj-projekt.supabase.co'
const SUPABASE_ANON_KEY = 'twój-klucz-anon'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
