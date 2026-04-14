"use client";

import { useState, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase/client";

type SaveStatus = "idle" | "loading" | "success" | "error";

interface UseSaveShoppingListReturn {
  save: (name: string, items: string[]) => Promise<void>;
  status: SaveStatus;
  errorMessage: string | null;
}

/**
 * Reusable hook for saving a shopping list to Supabase.
 * - Tracks loading, success, and error states.
 * - Auto-resets the success state after 5 seconds.
 */
export function useSaveShoppingList(): UseSaveShoppingListReturn {
  const [status, setStatus] = useState<SaveStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const save = useCallback(async (name: string, items: string[]) => {
    // Clear any existing success timer
    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current);
    }

    setStatus("loading");
    setErrorMessage(null);

    const { error } = await supabase.from("shopping_lists").insert({
      name,
      items,
    });

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
      return;
    }

    setStatus("success");

    // Auto-reset to idle after 5 seconds
    successTimerRef.current = setTimeout(() => {
      setStatus("idle");
      setErrorMessage(null);
    }, 5000);
  }, []);

  return { save, status, errorMessage };
}
