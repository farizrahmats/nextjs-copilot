import { ShoppingList } from "@/lib/types";

interface ShoppingListCardProps {
  list: ShoppingList;
}

/**
 * Displays a single saved shopping list — its name, creation date,
 * and all items as a bullet-pointed list.
 */
export default function ShoppingListCard({ list }: ShoppingListCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(list.created_at));

  return (
    <article className="card flex flex-col">
      <div className="card-header flex items-start justify-between gap-2">
        <h2 className="text-base font-semibold leading-snug">{list.name}</h2>
        <span
          className="shrink-0 text-xs"
          style={{ color: "var(--foreground-muted)" }}
        >
          {formattedDate}
        </span>
      </div>

      <div className="card-body flex-1">
        {list.items.length === 0 ? (
          <p
            className="text-sm italic"
            style={{ color: "var(--foreground-muted)" }}
          >
            No items in this list.
          </p>
        ) : (
          <ul className="flex flex-col gap-1" role="list">
            {list.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                {/* Bullet */}
                <span
                  className="mt-1.5 size-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                  aria-hidden="true"
                />
                <span style={{ color: "var(--foreground)" }}>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="card-footer">
        <span className="text-xs" style={{ color: "var(--foreground-muted)" }}>
          {list.items.length} {list.items.length === 1 ? "item" : "items"}
        </span>
      </div>
    </article>
  );
}
