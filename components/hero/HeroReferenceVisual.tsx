import Image from "next/image";

export function HeroReferenceVisual() {
  return (
    <div className="hero-reference-visual" aria-hidden="true">
      <Image
        src="/assets/generated/portada.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-reference-image"
      />

      <div className="hero-reference-vignette" />

      <div className="hero-reference-overlay hero-reference-overlay-top technical">
        <span>WE ARE LEBA / DIGITAL SYSTEMS STUDIO</span>
        <span>CPH — 2026</span>
      </div>

      <div className="hero-reference-overlay hero-reference-overlay-bottom technical">
        <span>OBSERVATION → STRUCTURE → EXECUTION</span>
        <span>01 / MASTER VISUAL</span>
      </div>

      <div className="hero-reference-rule hero-reference-rule-a" />
      <div className="hero-reference-rule hero-reference-rule-b" />
    </div>
  );
}
