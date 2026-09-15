import Image from "next/image";

export function HeroReferenceVisual() {
  return (
    <div className="hero-reference-visual" data-scroll-motion="hero">
      <Image
        src="/assets/generated/portada.png"
        alt="WE ARE LEBA — Digital Systems Studio"
        title="WE ARE LEBA — Digital Systems Studio"
        fill
        priority
        sizes="100vw"
        className="hero-reference-image"
        style={{ filter: "none" }}
      />
    </div>
  );
}
