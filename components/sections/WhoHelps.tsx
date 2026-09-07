"use client";

import { CSSProperties, useEffect, useRef } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./WhoHelps.module.css";

type Member = { name: string; role: string; image: string };

const images = {
  nicolas: "/assets/equipo/nicolas-llanos-b.png",
  marlene: "/assets/equipo/marlene-morrone-b.png",
  mariano: "/assets/equipo/mariano-oggier-b.png",
};

const content = {
  en: {
    kicker: "WHO'S BEHIND IT",
    title: <>Technical expertise<br />in service of your vision.</>,
    intro: "Different perspectives, one shared purpose: turning ambitious ideas into digital products that move businesses forward.",
    members: [
      { name: "Nicolás Llanos", role: "Founder · Development & Technology", image: images.nicolas },
      { name: "Marlene Morrone", role: "Owner · Commercial & Operations", image: images.marlene },
      { name: "Mariano Oggier", role: "Strategic Development & Growth", image: images.mariano },
    ] as Member[],
    footer: "PEOPLE, PURPOSE AND POSSIBILITIES.",
  },
  es: {
    kicker: "WHO'S BEHIND IT",
    title: <>Expertos técnicos<br />al servicio de tu visión.</>,
    intro: "Diferentes perspectivas, un mismo propósito: transformar ideas ambiciosas en productos digitales que hacen avanzar a los negocios.",
    members: [
      { name: "Nicolás Llanos", role: "Fundador · Desarrollo y Tecnología", image: images.nicolas },
      { name: "Marlene Morrone", role: "Propietaria · Comercial y Operaciones", image: images.marlene },
      { name: "Mariano Oggier", role: "Desarrollo Estratégico y Crecimiento", image: images.mariano },
    ] as Member[],
    footer: "PERSONAS, PROPÓSITO Y POSIBILIDADES.",
  },
};

export function WhoHelps() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const copy = content[language];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll(`.${styles.reveal}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add(styles.visible); });
    }, { threshold: 0.18 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <section ref={sectionRef} className={styles.team} id="team" aria-labelledby="team-title">
    <div className={styles.inner}>
      <div className={`${styles.kicker} ${styles.reveal}`}><span /> {copy.kicker}</div>
      <header className={`${styles.header} ${styles.reveal}`}>
        <h2 id="team-title">{copy.title}</h2><p>{copy.intro}</p>
      </header>
      <div className={styles.members}>
        {copy.members.map((member, index) => <article className={`${styles.member} ${styles.reveal} ${index % 2 === 1 ? styles.memberRight : styles.memberLeft}`} key={member.name} style={{ transitionDelay: `${index * 120}ms` }}>
          <div className={styles.memberImageWrap} data-parallax style={{ "--parallax-speed": `${0.08 + index * 0.025}` } as CSSProperties}>
            <span className={styles.index}>0{index + 1}</span>
            <img className={styles.memberImage} src={member.image} alt={member.name} />
          </div>
          <div className={styles.memberMeta}><h3>{member.name}</h3><p>{member.role}</p></div>
        </article>)}
      </div>
      <footer className={styles.footer}><span><i /> {copy.footer}</span><span>WE ARE LEBA</span></footer>
    </div>
  </section>;
}
