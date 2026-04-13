export default function TypographySection() {
  return (
    <section className="space-y-6" id="typography">
      <div>
        <h2 className="text-2xl font-bold">Typography</h2>
        <p className="text-[--foreground-muted] mt-1">
          Base heading and text styles applied globally via <code>@layer base</code>.
        </p>
      </div>

      {/* Headings */}
      <div className="card card-body space-y-4">
        <p className="label">Headings</p>
        <div className="space-y-3 divide-y divide-[--border]">
          {(["h1", "h2", "h3", "h4", "h5", "h6"] as const).map((Tag) => (
            <div key={Tag} className="flex items-baseline gap-4 pt-3 first:pt-0">
              <span className="w-8 shrink-0 font-mono text-xs text-[--foreground-muted]">
                {Tag}
              </span>
              <Tag>The quick brown fox</Tag>
            </div>
          ))}
        </div>
      </div>

      {/* Paragraph */}
      <div className="card card-body space-y-3">
        <p className="label">Paragraph</p>
        <p>
          This is a base paragraph. It uses <code>--foreground-muted</code> for
          colour and a generous line-height of <code>1.75</code> to aid
          readability across both light and dark themes.
        </p>
        <p>
          A second paragraph to show the default bottom margin resets to zero on
          the last child.
        </p>
      </div>

      {/* Links */}
      <div className="card card-body space-y-3">
        <p className="label">Links</p>
        <p>
          Inline{" "}
          <a href="#">anchor elements</a> use the accent colour with an animated
          underline on hover and a visible focus ring for keyboard users.
        </p>
      </div>

      {/* Inline elements */}
      <div className="card card-body space-y-3">
        <p className="label">Inline elements</p>
        <p>
          Inline code: <code>const answer = 42</code>
        </p>
        <blockquote>
          "Good design is as little design as possible." — Dieter Rams
        </blockquote>
        <hr />
        <ul>
          <li>Unordered list item one</li>
          <li>Unordered list item two</li>
          <li>Unordered list item three</li>
        </ul>
        <ol>
          <li>Ordered list item one</li>
          <li>Ordered list item two</li>
          <li>Ordered list item three</li>
        </ol>
      </div>
    </section>
  );
}
