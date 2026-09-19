"use client";

import { useEffect, useState, type FormEvent } from "react";
import styles from "./BookeaCaseStudy.module.css";
import { rv } from "./bookeaShared";

const copy = {
  es: {
    eyebrow: "LISTA DE ESPERA",
    title: <>LLEGA EL<br />1 DE DICIEMBRE.</>,
    body: "Bookea SaaS estará disponible el 1 de diciembre. Apúntate a la lista de espera y sé de las primeras personas en usarlo.",
    offerTag: "OFERTA DE LANZAMIENTO",
    offer: "Plan Pro gratis durante un mes para las 5 primeras personas de la lista.",
    left: (n: number) => (n > 0 ? `Quedan ${n} de 5 plazas` : "Las 5 plazas Pro ya están completas"),
    leftAfter: "Puedes apuntarte igualmente para enterarte del lanzamiento.",
    name: "Tu nombre (opcional)",
    email: "Tu email",
    business: "Tu negocio (opcional)",
    submit: "UNIRME A LA LISTA",
    sending: "ENVIANDO…",
    privacy: "Usaremos tu email solo para avisarte del lanzamiento de Bookea.",
    ok: (p: number) => `¡Estás en la lista! Eres la persona nº ${p}.`,
    okPro: "Tu mes de plan Pro gratis queda reservado.",
    okNoPro: "Te avisaremos antes del lanzamiento.",
    already: (p: number) => `Ya estabas en la lista, con el nº ${p}.`,
    errInvalid: "Revisa que el email sea válido.",
    errServer: "No hemos podido guardarlo. Inténtalo de nuevo en unos minutos.",
  },
  en: {
    eyebrow: "WAITLIST",
    title: <>LAUNCHING<br />DECEMBER 1ST.</>,
    body: "Bookea SaaS will be available on December 1st. Join the waitlist and be among the first people to use it.",
    offerTag: "LAUNCH OFFER",
    offer: "Pro plan free for one month for the first 5 people on the list.",
    left: (n: number) => (n > 0 ? `${n} of 5 spots left` : "All 5 Pro spots are taken"),
    leftAfter: "You can still join to hear about the launch.",
    name: "Your name (optional)",
    email: "Your email",
    business: "Your business (optional)",
    submit: "JOIN THE WAITLIST",
    sending: "SENDING…",
    privacy: "We'll only use your email to tell you about Bookea's launch.",
    ok: (p: number) => `You're on the list! You are person #${p}.`,
    okPro: "Your free month of the Pro plan is reserved.",
    okNoPro: "We'll let you know before launch.",
    already: (p: number) => `You were already on the list, at #${p}.`,
    errInvalid: "Please check that the email is valid.",
    errServer: "We couldn't save it. Please try again in a few minutes.",
  },
};

type Result = { position: number; pro: boolean; already: boolean };

export function BookeaWaitlist({ language, eyebrowNumber }: { language: "es" | "en"; eyebrowNumber: string }) {
  const t = copy[language];
  const [spots, setSpots] = useState<number | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "done" | "invalid" | "error">("idle");
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    fetch("/api/waitlist").then(r => (r.ok ? r.json() : null)).then(d => d && setSpots(d.spotsLeft)).catch(() => {});
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setState("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), name: data.get("name"), business: data.get("business"), website: data.get("website"), language }),
      });
      if (res.status === 400) return setState("invalid");
      if (!res.ok) return setState("error");
      const json = await res.json();
      setResult({ position: json.position, pro: json.pro, already: json.already });
      setState("done");
      if (json.already === false && typeof json.position === "number") setSpots(s => (s === null ? s : Math.max(0, s - 1)));
    } catch {
      setState("error");
    }
  }

  return (
    <section className={styles.waitlist} id="waitlist">
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>{eyebrowNumber} / {t.eyebrow}</span>
        <div className={styles.waitGrid}>
          <div>
            <h2 {...rv()}>{t.title}</h2>
            <p className={styles.waitBody} {...rv(1)}>{t.body}</p>
            <div className={styles.offer} {...rv(2)}>
              <span className={styles.offerTag}>{t.offerTag}</span>
              <b>{t.offer}</b>
              {spots !== null && <em><i className={spots > 0 ? styles.dotLive : styles.dotOff} /> {t.left(spots)}{spots === 0 ? ` · ${t.leftAfter}` : ""}</em>}
            </div>
          </div>
          <div className={styles.waitCard} {...rv(1)}>
            {state === "done" && result ? (
              <div className={styles.waitDone} role="status">
                <span className={styles.waitCheck}>✓</span>
                <b>{result.already ? t.already(result.position) : t.ok(result.position)}</b>
                <p>{result.pro ? t.okPro : t.okNoPro}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <label><span>{t.name}</span><input name="name" type="text" autoComplete="name" maxLength={120} /></label>
                <label><span>{t.email}</span><input name="email" type="email" autoComplete="email" required maxLength={160} /></label>
                <label><span>{t.business}</span><input name="business" type="text" maxLength={160} /></label>
                <input className={styles.hp} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <button type="submit" disabled={state === "sending"}>{state === "sending" ? t.sending : t.submit} <b>→</b></button>
                {(state === "invalid" || state === "error") && <p className={styles.waitError} role="alert">{state === "invalid" ? t.errInvalid : t.errServer}</p>}
                <small>{t.privacy}</small>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
