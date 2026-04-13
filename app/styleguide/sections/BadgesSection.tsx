const badges: { label: string; className: string; description: string }[] = [
  { label: "Default", className: "badge badge-default", description: ".badge-default" },
  { label: "Accent",  className: "badge badge-accent",  description: ".badge-accent"  },
  { label: "Success", className: "badge badge-success", description: ".badge-success" },
  { label: "Warning", className: "badge badge-warning", description: ".badge-warning" },
  { label: "Danger",  className: "badge badge-danger",  description: ".badge-danger"  },
];

export default function BadgesSection() {
  return (
    <section className="space-y-6" id="badges">
      <div>
        <h2 className="text-2xl font-bold">Badges</h2>
        <p className="text-[--foreground-muted] mt-1">
          Small inline labels. Add <code>.badge</code> plus one variant class.
          Dark mode overrides are included for semantic colours.
        </p>
      </div>

      {/* All variants */}
      <div className="card">
        <div className="card-header">
          <p className="label mb-0">Variants</p>
        </div>
        <div className="card-body flex flex-wrap gap-3 items-center">
          {badges.map(({ label, className }) => (
            <span key={label} className={className}>{label}</span>
          ))}
        </div>
      </div>

      {/* In context */}
      <div className="card">
        <div className="card-header">
          <p className="label mb-0">In context</p>
        </div>
        <div className="card-body space-y-3">
          {badges.map(({ label, className, description }) => (
            <div key={label} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={className}>{label}</span>
                <span className="text-sm text-[--foreground-muted]">
                  Short description text alongside a badge
                </span>
              </div>
              <code className="text-xs text-[--foreground-muted]">{description}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
