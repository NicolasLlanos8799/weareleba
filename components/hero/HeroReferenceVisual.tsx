import Image from "next/image";

export function HeroReferenceVisual() {
  return (
    <div className="hero-reference-visual" aria-label="WE ARE LEBA system visual">
      <div className="hero-reference-frame">
        <Image
          src="/assets/generated/portada.png"
          alt="Visual arquitectónico del sistema digital de WE ARE LEBA"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 88vw, 54vw"
          className="hero-reference-image"
        />
      </div>

      <div className="hero-reference-overlay hero-reference-overlay-top technical" aria-hidden="true">
        <span>LEBA-ASSET-001</span>
        <span>MASTER VISUAL</span>
      </div>

      <div className="hero-reference-overlay hero-reference-overlay-bottom technical" aria-hidden="true">
        <span>01 / HERO SYSTEM</span>
        <span>EXPLODED VIEW</span>
      </div>

      <div className="hero-reference-rule hero-reference-rule-a" aria-hidden="true" />
      <div className="hero-reference-rule hero-reference-rule-b" aria-hidden="true" />
    </div>
  );
}
