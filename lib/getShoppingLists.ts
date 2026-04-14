import { supabase } from "@/lib/supabase/client";
import { ShoppingList } from "@/lib/types";

/**
 * Fetches all saved shopping lists from Supabase, ordered newest first.
 */
export async function getShoppingLists(): Promise<ShoppingList[]> {
  const { data, error } = await supabase
    .from("shopping_lists")
    .select("id, name, items, created_at, updated_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
