"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ShoppingList } from "@/lib/types";
import ShoppingListCard from "@/components/ShoppingListCard";

const PAGE_SIZE = 5;

interface ListsClientProps {
  allLists: ShoppingList[];
}

/**
 * Client component that handles:
 * - Live search filtering (client-side, instant)
 * - Infinite scroll — loads PAGE_SIZE more items when the sentinel enters the viewport
 */
export default function ListsClient({ allLists }: ListsClientProps) {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Filter by name or any item text
  const filtered = allLists.filter((list) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      list.name.toLowerCase().includes(q) ||
      list.items.some((item) => item.toLowerCase().includes(q))
    );
  });

  const visibleLists = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Reset pagination whenever search query changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query]);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  }, []);

  // Intersection observer — triggers loadMore when sentinel scrolls into view
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "120px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore, hasMore]);

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: "var(--foreground-muted)" }}
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="search"
          className="input pl-9"
          placeholder="Search by list name or item…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search shopping lists"
        />
      </div>

      {/* No results state */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center gap-3 py-20 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ color: "var(--foreground-muted)" }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <p className="font-medium" style={{ color: "var(--foreground)" }}>
            No lists match &ldquo;{query}&rdquo;
          </p>
          <p className="text-sm" style={{ color: "var(--foreground-muted)" }}>
            Try a different name or item keyword.
          </p>
          <button
            className="btn btn-secondary btn-sm mt-1"
            onClick={() => setQuery("")}
          >
            Clear search
          </button>
        </div>
      )}

      {/* Results count */}
      {filtered.length > 0 && (
        <p className="mb-4 text-sm" style={{ color: "var(--foreground-muted)" }}>
          {query.trim()
            ? `${filtered.length} ${filtered.length === 1 ? "result" : "results"} for "${query}"`
            : `${allLists.length} ${allLists.length === 1 ? "list" : "lists"} total`}
        </p>
      )}

      {/* Responsive grid */}
      {visibleLists.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleLists.map((list) => (
            <ShoppingListCard key={list.id} list={list} />
          ))}
        </div>
      )}

      {/* Infinite scroll sentinel */}
      {hasMore && (
        <div ref={sentinelRef} className="mt-8 flex items-center justify-center gap-2 py-4" aria-live="polite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="animate-spin"
            style={{ color: "var(--foreground-muted)" }}
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          <span className="text-sm" style={{ color: "var(--foreground-muted)" }}>
            Loading more…
          </span>
        </div>
      )}

      {/* End-of-list message */}
      {!hasMore && filtered.length > PAGE_SIZE && (
        <p className="mt-8 text-center text-sm" style={{ color: "var(--foreground-muted)" }}>
          You&apos;ve seen all {filtered.length} lists.
        </p>
      )}
    </div>
  );
}
