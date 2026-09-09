import Image from "next/image";
import styles from "./SeaducedExperienceCase.module.css";

const base = "/assets/seaducedexperience";

export function SeaducedExperienceCase() {
  return (
    <main className={styles.caseStudy}>
      <section className={styles.hero}>
        <div className={styles.heroIntro}>
          <div className={styles.kickerRow}><span>01 / WEBSITE</span><span>SEADUCED EXPERIENCE</span></div>
          <h1>Private experiences.<br />A seamless digital journey.</h1>
          <p>Seaduced Experience is a premium tourism website designed to present and sell private boat experiences through clarity, atmosphere and an effortless path to enquiry.</p>
          <div className={styles.services}><span>WEB DESIGN</span><span>DEVELOPMENT</span><span>UX</span></div>
        </div>
        <div className={styles.heroImage}><Image src={`${base}/seaduced-experience-1-1280.webp`} alt="Seaduced Experience website" fill priority sizes="100vw" /></div>
      </section>

      <section className={styles.intro}>
        <div className={styles.sectionNumber}>02 / THE EXPERIENCE</div>
        <div className={styles.introGrid}>
          <h2>Designed to make the experience feel simple.</h2>
          <div><p>From the first interaction to the final enquiry, the website was structured to help visitors understand the offer, explore each experience and move naturally towards action.</p><p>Clarity and atmosphere work together, creating a digital journey that feels premium without becoming complicated.</p></div>
        </div>
        <div className={styles.fullImage}><Image src={`${base}/seaduced-experience-2-1280.webp`} alt="Seaduced Experience digital interface" fill sizes="100vw" /></div>
      </section>

      <section className={styles.journey}>
        <div className={styles.sectionNumber}>03 / THE JOURNEY</div>
        <div className={styles.journeyHeader}><h2>Discover.<br />Explore.<br />Choose.</h2><p>A clear content hierarchy makes it easy to move through the experience without losing the sense of discovery.</p></div>
        <div className={styles.imagePair}>
          <figure><Image src={`${base}/seaduced-experience-1-1280.webp`} alt="Discovering Seaduced experiences" width={1280} height={800} sizes="(max-width: 800px) 100vw, 55vw" /></figure>
          <figure><Image src={`${base}/seaduced-experience-3-1280.webp`} alt="Exploring a Seaduced experience" width={1280} height={800} sizes="(max-width: 800px) 100vw, 40vw" /></figure>
        </div>
      </section>

      <section className={styles.editorial}>
        <div className={styles.editorialImage}><Image src={`${base}/seaduced-experience-3-1280.webp`} alt="Premium visual experience" fill sizes="100vw" /></div>
        <div className={styles.editorialCopy}><span>04 / THE DIGITAL EXPERIENCE</span><h2>A premium experience, from the first interaction.</h2><p>The visual system gives the website room to breathe, balancing large imagery with clear typography and purposeful moments of interaction.</p></div>
      </section>

      <section className={styles.conversion}>
        <div className={styles.conversionCopy}><span>05 / FROM INTEREST TO ACTION</span><h2>Built to guide, not to push.</h2><p>Every section has a role in helping visitors understand what is available and take the next step with confidence.</p><div className={styles.steps}><span><b>01</b> DISCOVER</span><span><b>02</b> EXPLORE</span><span><b>03</b> ENQUIRE</span></div></div>
        <div className={styles.conversionImage}><Image src={`${base}/seaduced-experience-2-1280.webp`} alt="Seaduced conversion journey" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
      </section>

      <section className={styles.responsive}>
        <div className={styles.sectionNumber}>06 / RESPONSIVE BY DESIGN</div>
        <h2>Designed for every part of the journey.</h2>
        <p>The experience adapts across screens without losing the clarity, atmosphere or simplicity of the original journey.</p>
        <div className={styles.responsiveVisuals}><div className={styles.desktop}><Image src={`${base}/seaduced-experience-1-1280.webp`} alt="Seaduced Experience desktop view" fill sizes="100vw" /></div><div className={styles.mobile}><Image src={`${base}/seaduced-experience-3-800.webp`} alt="Seaduced Experience mobile view" fill sizes="35vw" /></div></div>
      </section>

      <section className={styles.closing}>
        <div className={styles.closingImage}><Image src={`${base}/seaduced-experience-2-1280.webp`} alt="Seaduced Experience final view" fill sizes="100vw" /></div>
        <div className={styles.next}><span>END OF CASE STUDY</span><a href="/work">BACK TO OUR WORK <b>⟶</b></a></div>
      </section>
    </main>
  );
}
