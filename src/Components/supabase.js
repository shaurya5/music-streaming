import { createClient } from '@supabase/supabase-js';

const ANNON_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTU2Njc1MSwiZXhwIjoxOTU3MTQyNzUxfQ.0tr-Oh36CPQrxskN_DVc-nmBPdmY8bdaRkfQD17Z3yo";
const URL = "https://yuqmiwnbiiuijihxzdfv.supabase.co";

export const supabase = createClient(URL, ANNON_SECRET);
