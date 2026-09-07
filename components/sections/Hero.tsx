import { HeroReferenceVisual } from "@/components/hero/HeroReferenceVisual";

export function Hero() {
  return (
    <section id="top" className="hero hero-cinematic" aria-labelledby="hero-title">
      <HeroReferenceVisual />

      <div className="hero-cinematic-shade" aria-hidden="true" />
      <div className="hero-cinematic-vignette" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy-cinematic">
          <h1 id="hero-title" className="hero-title">
            Ideas<br />
            that build<br />
            what&apos;s next
          </h1>

          <p className="hero-body">
            We design, develop and scale digital products<br />
            for a brighter tomorrow.
          </p>

          <div className="hero-actions">
            <a className="button-primary focusable" href="#contact">
              <span>Let&apos;s talk</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-line" />
          <div>
            <span className="technical">SCROLL TO EXPLORE</span>
            <span className="hero-scroll-arrow">↓</span>
          </div>
        </div>

        <div className="hero-system-caption" aria-hidden="true">
          <span className="technical hero-system-copy">FROM IDEA<br />TO IMPACT</span>
          <span className="hero-caption-rule" />
          <span className="technical">01 / 04</span>
        </div>
      </div>
    </section>
  );
}
