"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./SiteFooter.module.css";

const content = {
  en: { eyebrow: "LET'S BUILD WHAT'S NEXT", title: <>Have an idea<br />worth building?</>, cta: "START A CONVERSATION", contactLabel: "GET IN TOUCH", navLabel: "EXPLORE", socialLabel: "FOLLOW", nav: [["WHAT WE DO", "/#services"], ["OUR PROCESS", "/#process"], ["THE TEAM", "/#team"]] },
  es: { eyebrow: "LET'S BUILD WHAT'S NEXT", title: <>¿Tienes una idea<br />que vale la pena construir?</>, cta: "INICIEMOS UNA CONVERSACIÓN", contactLabel: "HABLEMOS", navLabel: "EXPLORA", socialLabel: "SÍGUENOS", nav: [["LO QUE HACEMOS", "/#services"], ["NUESTRO PROCESO", "/#process"], ["EL EQUIPO", "/#team"]] },
};

export function SiteFooter() {
  const { language } = useLanguage();
  const copy = content[language];
  return <footer className={styles.footer} id="contact"><div className={styles.inner}><div className={styles.topline}><span className={styles.rule} /><span>{copy.eyebrow}</span></div><div className={styles.hero}><h2>{copy.title}</h2><a className={styles.cta} href="mailto:hello.weareleba@gmail.com"><span>{copy.cta}</span><span aria-hidden="true">↗</span></a></div><div className={styles.infoGrid}><div><span className={styles.label}>{copy.contactLabel}</span><a className={styles.email} href="mailto:hello.weareleba@gmail.com">hello.weareleba@gmail.com</a></div><div><span className={styles.label}>{copy.navLabel}</span><nav className={styles.links} aria-label={copy.navLabel}>{copy.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav></div><div><span className={styles.label}>{copy.socialLabel}</span><div className={styles.links}><a href="https://www.linkedin.com/company/weareleba" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div></div><div className={styles.bottom}><span>© {new Date().getFullYear()} WE ARE LEBA</span></div></div></footer>;
}
