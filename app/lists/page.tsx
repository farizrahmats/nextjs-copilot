import type { Metadata } from "next";
import { getShoppingLists } from "@/lib/getShoppingLists";
import ListsClient from "@/components/ListsClient";

export const metadata: Metadata = {
  title: "My Lists — ShopaShop",
  description: "All your saved shopping lists.",
};

export default async function ListsPage() {
  let lists: Awaited<ReturnType<typeof getShoppingLists>> = [];
  let fetchError: string | null = null;

  try {
    lists = await getShoppingLists();
  } catch (err) {
    fetchError = err instanceof Error ? err.message : "Something went wrong.";
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-12">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Lists</h1>
        <p className="mt-1 text-sm" style={{ color: "var(--foreground-muted)" }}>
          All your saved shopping lists, newest first.
        </p>
      </div>

      {/* Error state */}
      {fetchError && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-(--radius) border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#991b1b] dark:border-[#7f1d1d] dark:bg-[#2d0a0a] dark:text-[#fca5a5]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
          Failed to load lists: {fetchError}
        </div>
      )}

      {/* Empty state — no lists at all */}
      {!fetchError && lists.length === 0 && (
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <div
            className="flex size-16 items-center justify-center rounded-full"
            style={{ backgroundColor: "var(--background-subtle)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ color: "var(--foreground-muted)" }}
            >
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
            </svg>
          </div>
          <div>
            <p className="font-medium" style={{ color: "var(--foreground)" }}>
              No lists saved yet
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--foreground-muted)" }}>
              Head back to the home page and save your first list.
            </p>
          </div>
          <a href="/" className="btn btn-primary btn-sm mt-2">
            Create a list
          </a>
        </div>
      )}

      {/* Lists with search + infinite scroll */}
      {!fetchError && lists.length > 0 && (
        <ListsClient allLists={lists} />
      )}
    </main>
  );
}
