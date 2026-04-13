export default function CardsSection() {
  return (
    <section className="space-y-6" id="cards">
      <div>
        <h2 className="text-2xl font-bold">Cards</h2>
        <p className="text-[--foreground-muted] mt-1">
          Use <code>.card</code> as the wrapper. Optionally pair with{" "}
          <code>.card-header</code>, <code>.card-body</code>, and{" "}
          <code>.card-footer</code>.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Simple card */}
        <div className="card card-body space-y-2">
          <h3 className="text-lg">Simple card</h3>
          <p className="text-sm">
            Just a <code>.card</code> with a <code>.card-body</code> inside.
            Hover to see the subtle lift effect.
          </p>
        </div>

        {/* Card with header & footer */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-base font-semibold">With header &amp; footer</h3>
          </div>
          <div className="card-body space-y-2">
            <p className="text-sm">
              Separate sections divided by a <code>--border</code> line.
            </p>
          </div>
          <div className="card-footer flex justify-end gap-2">
            <button className="btn btn-ghost btn-sm">Cancel</button>
            <button className="btn btn-primary btn-sm">Confirm</button>
          </div>
        </div>

        {/* Project-style card */}
        <div className="card">
          <div className="h-32 bg-[--background-subtle] flex items-center justify-center text-[--foreground-muted] text-sm">
            Image / Preview
          </div>
          <div className="card-body space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold leading-tight">Project card</h3>
              <span className="badge badge-accent shrink-0">New</span>
            </div>
            <p className="text-sm">
              A typical project card layout with a preview area, title, badge
              and a call-to-action.
            </p>
            <a href="#" className="btn btn-secondary btn-sm w-full justify-center">
              View project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
