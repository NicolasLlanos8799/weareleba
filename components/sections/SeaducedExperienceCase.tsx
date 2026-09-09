"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./SeaducedExperienceCase.module.css";

const base = "/assets/seaducedexperience";

const websiteImages = [
  "seaduced-experience-1.png",
  "seaduced-experience-2.png",
  "seaduced-experience-3.png",
  "seaduced-experience-4.png",
];

const dashboardImages = [
  "dashboard-complete.png",
  "dashboard-bookings.png",
  "dashboard-calendar.png",
  "dashboard-analytics.png",
];

function HorizontalGallery({ images, label }: { images: string[]; label: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (window.innerWidth <= 800) {
        track.style.transform = "translate3d(0,0,0)";
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewport = window.innerWidth;
      const travel = Math.max(0, track.scrollWidth - viewport + 80);
      const distance = section.offsetHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      track.style.transform = `translate3d(${-travel * progress}px,0,0)`;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.galleryScroll} ref={sectionRef}>
      <div className={styles.gallerySticky}>
        <div className={styles.galleryTrack} ref={trackRef}>
          {images.map((image, index) => (
            <figure className={styles.galleryCard} key={image}>
              <Image
                src={`${base}/${image}`}
                alt={`${label} ${index + 1}`}
                fill
                sizes="(max-width: 800px) 84vw, 72vw"
                quality={100}
                priority={index === 0}
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SeaducedExperienceCase() {
  return (
    <main className={styles.caseStudy}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span>01 / SEADUCED EXPERIENCE</span>
          <h1>One experience.<br />One connected system.</h1>
          <p>A digital ecosystem connecting the customer journey, business operations and automated follow-up.</p>
        </div>
        <div className={styles.systemLabels}><span>WEBSITE</span><b>↓</b><span>DASHBOARD</span><b>↓</b><span>AUTOMATION</span></div>
      </section>

      <section className={styles.chapter}>
        <div className={styles.chapterHeader}>
          <div><span>02 / WEBSITE</span><h2>Where the journey begins.</h2></div>
          <p>Discover, explore and book private experiences through a clear and premium digital journey.</p>
        </div>
        <HorizontalGallery images={websiteImages} label="Seaduced Experience website view" />
      </section>

      <section className={`${styles.chapter} ${styles.dashboardChapter}`}>
        <div className={styles.chapterHeader}>
          <div><span>03 / DASHBOARD</span><h2>The business,<br />in control.</h2></div>
          <p>Bookings, cancellations, recent activity, calendar, channels and analytics — all in one operational view.</p>
        </div>
        <HorizontalGallery images={dashboardImages} label="Seaduced Experience dashboard view" />
      </section>

      <section className={styles.automation}>
        <div className={styles.automationIntro}>
          <div><span>04 / AUTOMATION</span><h2>The system keeps working.</h2></div>
          <p>Review requests, booking recovery and proactive support — automatically triggered when the right moment happens.</p>
        </div>
        <div className={styles.automationCards}>
          <article><span>01</span><h3>After the experience</h3><p>Experience ends → Email sent → Review requested</p></article>
          <article><span>02</span><h3>Unfinished booking</h3><p>Booking started → Payment incomplete → Follow-up sent</p></article>
          <article><span>03</span><h3>Booking error</h3><p>Error detected → Customer contacted → Help offered</p></article>
        </div>
      </section>

      <section className={styles.closing}><span>ONE CONNECTED SYSTEM</span><h2>Website <b>↓</b> Dashboard <b>↓</b> Automation</h2></section>
    </main>
  );
}
