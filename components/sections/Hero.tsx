import { homeContent } from "@/content/home";
import { HeroReferenceVisual } from "@/components/hero/HeroReferenceVisual";

export function Hero() {
  const { hero } = homeContent;

  return (
    <section id="top" className="hero hero-cinematic" aria-labelledby="hero-title">
      <HeroReferenceVisual />

      <div className="hero-cinematic-shade" aria-hidden="true" />
      <div className="hero-cinematic-vignette" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy-cinematic">
          <p className="technical hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-title">
            {hero.headline}
          </h1>

          <p className="hero-body">
            {hero.body.split("\n\n").map((paragraph, index) => (
              <span key={index}>
                {paragraph}
                {index === 0 && <><br /><br /></>}
              </span>
            ))}
          </p>

          <div className="hero-actions">
            <a className="button-primary focusable" href="#contact">
              {hero.primaryCta}
              <span aria-hidden="true">↗</span>
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
          <span className="technical">{hero.systemLabel}</span>
          <span className="hero-caption-rule" />
          <span className="technical">01 / 04</span>
        </div>
      </div>
    </section>
  );
}
