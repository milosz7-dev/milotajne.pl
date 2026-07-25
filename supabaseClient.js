import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const _u = "aHR0cHM6Ly93cHZscGl2bGJiZ3VkZXJuc3Rkai5zdXBhYmFzZS5jbw==";
const _k = "ZXlKaGJHY2lPaUpTVXpJMU5pSTZJbkpsYm1saGJHeGxaQ0lzSW5SeWIySmxjM01pT2lKbGFHbHVjM01pTENKcmFXNWxJam9pZlNJc0luVnliV3hzYVc1bGN5STZJbkJsZkdGdGIzVnlhV1Z6SWl3aWNYUm9Jam9pTVM0d056VTRPVFl4TWpBNE1TMHdOakU0TFRBM1pqRTNNRFkzTkRabVl6WmlNR0V4TWpNMlpTMHdNV1ExTURSbU9HSmtOamhpWWpNNU15SXNJbUYwYVc5dUlqb2lNakUwTURBeU5qa3pPak4wTURBeE9UUTJORFl5T0RBM05EWXpNekl3TFRBeU1qWXdOakE1TWpFeU9UVXhOelV4TXpjMk5qSTBNVGd5T0RnNFptUXlOMlprTTJVeE5qSTVOVFkyTWpZNVlUQXlOVEkyTmpobFlXWTBOams1WmpneU9UWTVNMklpZlE=";

const decode = (str) => atob(str);

const SUPABASE_URL = decode(_u);
const SUPABASE_ANON_KEY = decode(_k);

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
