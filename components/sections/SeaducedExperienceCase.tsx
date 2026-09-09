import Image from "next/image";
import styles from "./SeaducedExperienceCase.module.css";

const base = "/assets/seaducedexperience";

export function SeaducedExperienceCase() {
  return (
    <main className={styles.caseStudy}>
      <section className={styles.hero}>
        <div className={styles.heroIntro}>
          <div className={styles.kickerRow}><span>01 / SEADUCED EXPERIENCE</span><span>WEBSITE · DASHBOARD · AUTOMATION</span></div>
          <h1>One experience.<br />One connected system.</h1>
          <p>Seaduced Experience is a complete digital ecosystem for private boat experiences — connecting the customer journey, business operations and automated follow-up into one seamless system.</p>
          <div className={styles.services}><span>WEB DESIGN</span><span>DEVELOPMENT</span><span>DASHBOARD</span><span>AUTOMATION</span></div>
        </div>
        <div className={styles.heroImage}><Image src={`${base}/seaduced-experience-1-1280.webp`} alt="Seaduced Experience website" fill priority sizes="100vw" /></div>
      </section>

      <section className={styles.intro}>
        <div className={styles.sectionNumber}>02 / THE WEBSITE</div>
        <div className={styles.introGrid}>
          <h2>Where the customer journey begins.</h2>
          <div><p>The public experience was designed to make discovering and booking private experiences feel clear, premium and effortless.</p><p>From the first interaction to payment, every step helps visitors understand the offer and move naturally towards a reservation.</p></div>
        </div>
        <div className={styles.fullImage}><Image src={`${base}/seaduced-experience-2-1280.webp`} alt="Seaduced Experience digital interface" fill sizes="100vw" /></div>
      </section>

      <section className={styles.journey}>
        <div className={styles.sectionNumber}>03 / THE JOURNEY</div>
        <div className={styles.journeyHeader}><h2>Discover.<br />Explore.<br />Book.</h2><p>A clear content hierarchy makes it easy to move through the experience without losing the sense of discovery.</p></div>
        <div className={styles.imagePair}>
          <figure><Image src={`${base}/seaduced-experience-1-1280.webp`} alt="Discovering Seaduced experiences" width={1280} height={800} sizes="(max-width: 800px) 100vw, 55vw" /></figure>
          <figure><Image src={`${base}/seaduced-experience-3-1280.webp`} alt="Exploring a Seaduced experience" width={1280} height={800} sizes="(max-width: 800px) 100vw, 40vw" /></figure>
        </div>
      </section>

      <section className={styles.dashboardReveal}>
        <span>04 / THE SYSTEM BEHIND THE EXPERIENCE</span>
        <h2>The website is only half the system.</h2>
        <p>The customer journey continues behind the scenes, where bookings, availability and business operations come together in one clear workspace.</p>
      </section>

      <section className={styles.dashboardHero}>
        <div className={styles.dashboardHeroCopy}><span>05 / THE DASHBOARD</span><h2>Where the business stays in control.</h2><p>One operational view for new bookings, cancellations, recent activity, calendars, booking channels and performance.</p></div>
        <div className={styles.dashboardComplete}><Image src={`${base}/dashboard-complete.png`} alt="Seaduced Experience operations dashboard" fill sizes="100vw" /></div>
      </section>

      <section className={styles.dashboardSection}>
        <div className={styles.sectionNumber}>06 / EVERYTHING, AT A GLANCE</div>
        <div className={styles.dashboardSplit}>
          <div><h2>Stay on top of what&apos;s happening.</h2><p>The dashboard brings recent activity into focus, making new bookings, cancellations and the latest changes from the last 48 hours immediately visible.</p></div>
          <div className={styles.dashboardImage}><Image src={`${base}/dashboard-bookings.png`} alt="Recent bookings and activity dashboard" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
        </div>
      </section>

      <section className={styles.calendarSection}>
        <div className={styles.sectionNumber}>07 / EVERY BOOKING, ONE CLEAR VIEW</div>
        <h2>One calendar.<br />The whole operation.</h2>
        <div className={styles.calendarImage}><Image src={`${base}/dashboard-calendar.png`} alt="Seaduced Experience booking calendar" fill sizes="100vw" /></div>
      </section>

      <section className={styles.channels}>
        <div className={styles.channelsCopy}><span>08 / MULTIPLE CHANNELS, ONE SYSTEM</span><h2>Direct or external.<br />Everything connects.</h2><p>Bookings from the website and external platforms such as GetYourGuide can be viewed together in one operational system, creating a clearer picture of the entire business.</p></div>
        <div className={styles.channelsImage}><Image src={`${base}/dashboard-bookings.png`} alt="Direct and external bookings in one dashboard" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
      </section>

      <section className={styles.analytics}>
        <div className={styles.sectionNumber}>09 / SEE THE BIGGER PICTURE</div>
        <div className={styles.analyticsGrid}><div><h2>From activity to insight.</h2><p>Analytics turn daily operations into a clearer understanding of booking performance and business activity.</p></div><div className={styles.analyticsImage}><Image src={`${base}/dashboard-analytics.png`} alt="Seaduced Experience analytics dashboard" fill sizes="(max-width: 800px) 100vw, 52vw" /></div></div>
      </section>

      <section className={styles.automationIntro}>
        <span>10 / AUTOMATION</span>
        <h2>The system keeps working.</h2>
        <p>The experience does not end when someone leaves the website. The system reacts to key moments in the customer journey and helps the business follow up at the right time.</p>
      </section>

      <section className={styles.automationFlows}>
        <article><span>01</span><h3>After the experience</h3><div className={styles.flow}>EXPERIENCE ENDS <b>↓</b> EMAIL SENT <b>↓</b> REVIEW REQUESTED</div><p>After an experience is completed, an automated email invites the customer to share their feedback.</p></article>
        <article><span>02</span><h3>When a booking is left unfinished</h3><div className={styles.flow}>BOOKING STARTED <b>↓</b> PAYMENT NOT COMPLETED <b>↓</b> FOLLOW-UP SENT</div><p>If someone begins a reservation but does not complete payment, the system follows up and guides them back to finish where they left off.</p></article>
        <article><span>03</span><h3>When friction happens</h3><div className={styles.flow}>ERROR DETECTED <b>↓</b> CUSTOMER CONTACTED <b>↓</b> HELP OFFERED</div><p>When a reservation attempt encounters an error, the process creates an opportunity for proactive support instead of leaving the customer without help.</p></article>
      </section>

      <section className={styles.systemClosing}>
        <span>ONE CONNECTED SYSTEM</span>
        <h2>Website <b>↓</b> Dashboard <b>↓</b> Automation</h2>
        <p>One connected ecosystem designed to support the customer journey, give the business more control and keep important processes moving.</p>
      </section>

      <section className={styles.closing}>
        <div className={styles.closingImage}><Image src={`${base}/seaduced-experience-4-1280.webp`} alt="Seaduced Experience final view" fill sizes="100vw" /></div>
        <div className={styles.next}><span>END OF CASE STUDY</span><a href="/work">BACK TO OUR WORK <b>⟶</b></a></div>
      </section>
    </main>
  );
}
