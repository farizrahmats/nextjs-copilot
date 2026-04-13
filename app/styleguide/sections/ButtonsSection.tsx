export default function ButtonsSection() {
  return (
    <section className="space-y-6" id="buttons">
      <div>
        <h2 className="text-2xl font-bold">Buttons</h2>
        <p className="text-[--foreground-muted] mt-1">
          Use <code>.btn</code> as the base class, then add a variant and
          optional size modifier.
        </p>
      </div>

      {/* Variants */}
      <div className="card">
        <div className="card-header">
          <p className="label mb-0">Variants</p>
        </div>
        <div className="card-body flex flex-wrap gap-3">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-danger">Danger</button>
        </div>
      </div>

      {/* Sizes */}
      <div className="card">
        <div className="card-header">
          <p className="label mb-0">Sizes</p>
        </div>
        <div className="card-body flex flex-wrap items-center gap-3">
          <button className="btn btn-primary btn-sm">Small</button>
          <button className="btn btn-primary">Default</button>
          <button className="btn btn-primary btn-lg">Large</button>
        </div>
      </div>

      {/* Disabled state */}
      <div className="card">
        <div className="card-header">
          <p className="label mb-0">Disabled</p>
        </div>
        <div className="card-body flex flex-wrap gap-3">
          <button className="btn btn-primary" disabled>Primary</button>
          <button className="btn btn-secondary" disabled>Secondary</button>
          <button className="btn btn-ghost" disabled>Ghost</button>
          <button className="btn btn-danger" disabled>Danger</button>
        </div>
      </div>

      {/* As anchor */}
      <div className="card">
        <div className="card-header">
          <p className="label mb-0">As link</p>
        </div>
        <div className="card-body flex flex-wrap gap-3">
          <a href="#" className="btn btn-primary">Primary link</a>
          <a href="#" className="btn btn-secondary">Secondary link</a>
        </div>
      </div>
    </section>
  );
}
