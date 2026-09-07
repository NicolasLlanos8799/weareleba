import { homeContent } from "@/content/home";
import { HeroSystem } from "@/components/system/HeroSystem";

export function Hero() {
  const { hero } = homeContent;
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-shell">
        <div className="grid-12 hero-layout">
          <div className="hero-copy">
            <p className="technical hero-eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title" className="hero-title">{hero.headline}</h1>
            <div className="hero-bottom">
              <p className="hero-body">{hero.body.split("\n\n").map((paragraph, index) => <span key={index}>{paragraph}{index === 0 && <><br /><br /></>}</span>)}</p>
              <div className="hero-actions">
                <a className="button-primary focusable" href="#contact">{hero.primaryCta}</a>
                <a className="button-secondary focusable" href="#work">{hero.secondaryCta}</a>
              </div>
            </div>
          </div>
          <div className="hero-system-wrap" aria-label="Sistema digital compuesto por capas conectadas">
            <div className="system-meta">
              <span className="technical system-id">{hero.systemLabel}</span>
              <span className="technical system-axis">ASSEMBLY</span>
            </div>
            <HeroSystem steps={hero.systemSteps} />
          </div>
        </div>
      </div>
    </section>
  );
}