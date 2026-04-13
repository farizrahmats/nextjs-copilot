export default function InputsSection() {
  return (
    <section className="space-y-6" id="inputs">
      <div>
        <h2 className="text-2xl font-bold">Inputs</h2>
        <p className="text-[--foreground-muted] mt-1">
          Form controls built on CSS custom properties — they automatically
          adapt to light and dark mode.
        </p>
      </div>

      {/* Text input */}
      <div className="card">
        <div className="card-header">
          <p className="label mb-0">Text input</p>
        </div>
        <div className="card-body space-y-4 max-w-md">
          <div>
            <label className="label" htmlFor="sg-default">Default</label>
            <input id="sg-default" className="input" type="text" placeholder="Enter some text…" />
            <p className="field-hint">This is a helpful hint below the field.</p>
          </div>
          <div>
            <label className="label" htmlFor="sg-filled">Filled</label>
            <input id="sg-filled" className="input" type="text" defaultValue="Already filled in" />
          </div>
          <div>
            <label className="label" htmlFor="sg-error">Error state</label>
            <input id="sg-error" className="input input-error" type="text" defaultValue="bad@val" />
            <p className="field-error">That email address is not valid.</p>
          </div>
          <div>
            <label className="label" htmlFor="sg-disabled">Disabled</label>
            <input id="sg-disabled" className="input" type="text" placeholder="Cannot edit this" disabled />
          </div>
        </div>
      </div>

      {/* Textarea */}
      <div className="card">
        <div className="card-header">
          <p className="label mb-0">Textarea</p>
        </div>
        <div className="card-body max-w-md space-y-4">
          <div>
            <label className="label" htmlFor="sg-textarea">Message</label>
            <textarea id="sg-textarea" className="textarea" placeholder="Write your message here…" />
          </div>
        </div>
      </div>

      {/* Select */}
      <div className="card">
        <div className="card-header">
          <p className="label mb-0">Select</p>
        </div>
        <div className="card-body max-w-md space-y-4">
          <div>
            <label className="label" htmlFor="sg-select">Category</label>
            <select id="sg-select" className="select">
              <option value="">Choose an option…</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
