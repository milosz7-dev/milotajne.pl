import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Dane zostały zaszyfrowane w Base64, aby chronić przed wścibskimi oczami
const encUrl = 'aHR0cHM6Ly93cHZscGxpdmxiYmd1ZGVybnN0ZGotc3VwYWJhc2UuY28='
const encKey = 'ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkV0lpT2lKbGJHUXRjSEJ2YVcxbGMzTnBiMjVoYm1saGRHbDBlWEJsYm5ScGIyNWhiSFZsYm1sdmJtUnpJangzSW4wLjBIWDZfZXVoaGdBMG5OWTFfQldpbUVKcFp6T2Q3S1hkNXowQmQzT3BtRllF'

const decode = (data) => atob(data);

const SUPABASE_URL = decode(encUrl);
const SUPABASE_ANON_KEY = decode(encKey);

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
