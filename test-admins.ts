import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function checkAdmins() {
  console.log("Checando tabela admins...");
  const { data, error } = await supabase.from("admins").select("*");
  if (error) {
    console.error("Erro:", error);
  } else {
    console.log("Admins cadastrados:", data);
  }
}

checkAdmins();
