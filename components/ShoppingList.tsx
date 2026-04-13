"use client";

import { useState } from "react";

interface ShoppingItem {
  id: number;
  name: string;
}

export default function ShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setItems((prev) => [...prev, { id: Date.now(), name: trimmed }]);
    setInputValue("");
  }

  function deleteItem(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") addItem();
  }

  return (
    <div className="card w-full max-w-md">
      <div className="card-header">
        <h2 className="text-lg font-semibold">Shopping List</h2>
      </div>

      <div className="card-body flex flex-col gap-4">
        {/* Add item row */}
        <div className="flex gap-2">
          <input
            type="text"
            className="input"
            placeholder="Add an item…"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="New shopping list item"
          />
          <button
            className="btn btn-primary shrink-0"
            onClick={addItem}
            aria-label="Add item"
          >
            Add
          </button>
        </div>

        {/* List */}
        {items.length === 0 ? (
          <p className="text-center text-sm" style={{ color: "var(--foreground-muted)" }}>
            Your list is empty. Add something above!
          </p>
        ) : (
          <ul className="flex flex-col gap-1" role="list">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded-(--radius) border border-(--border) bg-(--surface-raised) px-3 py-2 transition-colors"
              >
                <span className="text-sm">{item.name}</span>
                <button
                  className="btn btn-ghost btn-sm ml-2 shrink-0 text-(--danger) hover:bg-[color-mix(in_srgb,var(--danger)_10%,transparent)]"
                  onClick={() => deleteItem(item.id)}
                  aria-label={`Delete ${item.name}`}
                >
                  {/* Trash icon */}
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
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {items.length > 0 && (
        <div className="card-footer flex items-center justify-between">
          <span className="text-sm" style={{ color: "var(--foreground-muted)" }}>
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setItems([])}
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
