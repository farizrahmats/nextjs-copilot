interface SwatchProps {
  label: string;
  variable: string;
  bg: string;
  textDark?: boolean;
}

function Swatch({ label, variable, bg, textDark }: SwatchProps) {
  return (
    <div className="overflow-hidden rounded-[--radius-lg] border border-[--border] shadow-[--shadow-sm]">
      <div
        className="h-16 w-full"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="bg-[--surface] px-3 py-2">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-[--foreground-muted] font-mono">{variable}</p>
        <p className="text-xs text-[--foreground-muted]">{bg}</p>
      </div>
    </div>
  );
}

const swatches: SwatchProps[] = [
  { label: "Background",        variable: "--background",        bg: "#ffffff / #09090b" },
  { label: "Background Subtle", variable: "--background-subtle", bg: "#f4f4f5 / #18181b" },
  { label: "Surface",           variable: "--surface",           bg: "#ffffff / #18181b" },
  { label: "Surface Raised",    variable: "--surface-raised",    bg: "#f9f9fb / #27272a" },
  { label: "Border",            variable: "--border",            bg: "#e4e4e7 / #3f3f46" },
  { label: "Foreground",        variable: "--foreground",        bg: "#18181b / #fafafa" },
  { label: "Foreground Muted",  variable: "--foreground-muted",  bg: "#71717a / #a1a1aa" },
  { label: "Accent",            variable: "--accent",            bg: "#6366f1 / #818cf8" },
  { label: "Accent Hover",      variable: "--accent-hover",      bg: "#4f46e5 / #6366f1" },
  { label: "Success",           variable: "--success",           bg: "#22c55e" },
  { label: "Warning",           variable: "--warning",           bg: "#f59e0b" },
  { label: "Danger",            variable: "--danger",            bg: "#ef4444" },
];

export default function ColorsSection() {
  return (
    <section className="space-y-6" id="colors">
      <div>
        <h2 className="text-2xl font-bold">Colors</h2>
        <p className="text-[--foreground-muted] mt-1">
          All colours are CSS custom properties that automatically switch between
          light and dark values.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {swatches.map((s) => (
          <Swatch key={s.variable} {...s} />
        ))}
      </div>
    </section>
  );
}
