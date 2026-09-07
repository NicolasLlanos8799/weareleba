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
    </div>
  );
}
