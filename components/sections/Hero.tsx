import { homeContent } from "@/content/home";
import { HeroReferenceVisual } from "@/components/hero/HeroReferenceVisual";

export function Hero() {
  const { hero } = homeContent;

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <HeroReferenceVisual />

      <div className="container hero-shell">
        <div className="hero-index technical" aria-hidden="true">
          <span>01</span>
          <span>LAND / UNDERSTAND / STRUCTURE</span>
        </div>

        <div className="grid-12 hero-layout">
          <div className="hero-copy">
            <p className="technical hero-eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title" className="hero-title">
              {hero.headline}
            </h1>

            <div className="hero-bottom">
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
                </a>
                <a className="button-secondary focusable" href="#work">
                  {hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-system-meta" aria-hidden="true">
          <span className="technical">{hero.systemLabel}</span>
          <span className="technical">SYSTEM / 01</span>
        </div>
      </div>
    </section>
  );
}
