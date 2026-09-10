"use client";

const modules = [
  { number: "01", label: "STRATEGY", detail: "Direction / positioning", className: "is-strategy" },
  { number: "02", label: "DESIGN", detail: "Identity / experience", className: "is-design" },
  { number: "03", label: "BUILD", detail: "Product / technology", className: "is-build" },
  { number: "04", label: "GROWTH", detail: "Launch / evolution", className: "is-growth" },
];

export function HeroReferenceVisual() {
  return (
    <div className="hero-system" aria-hidden="true">
      <div className="hero-system-grid" />
      <div className="hero-system-vignette" />
      <div className="hero-system-orb" />

      <div className="hero-system-stage">
        <div className="hero-stage-header">
          <span>LEBA / DIGITAL SYSTEM</span>
          <span>01—04</span>
        </div>

        <div className="hero-system-line hero-system-line--top" />
        <div className="hero-system-line hero-system-line--vertical" />
        <div className="hero-system-line hero-system-line--diagonal" />

        <div className="hero-system-core">
          <span className="core-ring core-ring--one" />
          <span className="core-ring core-ring--two" />
          <span className="core-cross core-cross--h" />
          <span className="core-cross core-cross--v" />
          <span className="core-point" />
          <strong>LEBA</strong>
          <small>CONNECTED<br />SYSTEM</small>
        </div>

        {modules.map((module) => (
          <div key={module.number} className={`hero-module ${module.className}`}>
            <div className="hero-module-index">{module.number}</div>
            <div className="hero-module-copy">
              <strong>{module.label}</strong>
              <span>{module.detail}</span>
            </div>
            <i>↗</i>
          </div>
        ))}

        <div className="hero-system-micro hero-system-micro--one">INPUT</div>
        <div className="hero-system-micro hero-system-micro--two">EXPERIENCE</div>
        <div className="hero-system-micro hero-system-micro--three">OUTPUT</div>

        <div className="hero-system-footer">
          <span>IDEA → SYSTEM → IMPACT</span>
          <span className="hero-system-pulse"><i /> LIVE</span>
        </div>
      </div>
    </div>
  );
}
