"use client";

const nodes = [
  { number: "01", label: "Strategy", className: "hero-orbit-card--strategy" },
  { number: "02", label: "Design", className: "hero-orbit-card--design" },
  { number: "03", label: "Development", className: "hero-orbit-card--development" },
  { number: "04", label: "Growth", className: "hero-orbit-card--growth" },
];

export function HeroReferenceVisual() {
  return (
    <div className="hero-system" aria-hidden="true">
      <div className="hero-system-glow" />
      <div className="hero-orbit hero-orbit--outer" />
      <div className="hero-orbit hero-orbit--middle" />
      <div className="hero-orbit hero-orbit--inner" />

      <div className="hero-system-core">
        <span />
      </div>

      <div className="hero-system-path hero-system-path--one" />
      <div className="hero-system-path hero-system-path--two" />
      <div className="hero-system-path hero-system-path--three" />

      <div className="hero-system-screen hero-system-screen--strategy">
        <span className="hero-screen-topline">01 / DISCOVER</span>
        <strong>Discover<br />what&apos;s next</strong>
        <i />
        <b />
      </div>

      <div className="hero-system-screen hero-system-screen--design">
        <span className="hero-screen-topline">02 / EXPERIENCE</span>
        <strong>Build<br />better<br />experiences</strong>
        <em />
      </div>

      <div className="hero-system-screen hero-system-screen--development">
        <span className="hero-screen-topline">03 / PRODUCT</span>
        <div className="hero-code-lines"><i /><i /><i /><i /><i /><i /></div>
        <b />
      </div>

      <div className="hero-system-screen hero-system-screen--growth">
        <span className="hero-screen-topline">04 / IMPACT</span>
        <strong>+82%</strong>
        <div className="hero-chart"><i /><i /><i /><i /><i /><i /><i /></div>
      </div>

      {nodes.map((node) => (
        <div key={node.number} className={`hero-orbit-card ${node.className}`}>
          <span>{node.number}</span>
          <strong>{node.label}</strong>
          <i>↗</i>
        </div>
      ))}

      <span className="hero-orbit-dot hero-orbit-dot--one" />
      <span className="hero-orbit-dot hero-orbit-dot--two" />
      <span className="hero-orbit-dot hero-orbit-dot--three" />
      <span className="hero-orbit-dot hero-orbit-dot--four" />
    </div>
  );
}
