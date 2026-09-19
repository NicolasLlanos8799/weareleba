"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./BookeaCaseStudy.module.css";

export const base = "/assets/bookea";

// Scroll-reveal helper: elements fade/rise in once, staggered by index.
export const rv = (i = 0) => ({ "data-r": "", style: { "--d": `${i * 90}ms` } as CSSProperties });

export function useScrollEffects(root: React.RefObject<HTMLElement | null>, language: string) {
  useEffect(() => {
    const main = root.current;
    if (!main || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    main.classList.add(styles.armed);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add(styles.in); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    main.querySelectorAll("[data-r]").forEach(el => observer.observe(el));

    // Scroll-linked progress (0 -> 1 as an element travels into view) for depth.
    const par = Array.from(main.querySelectorAll<HTMLElement>("[data-par]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      par.forEach(el => {
        const rect = el.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)));
        el.style.setProperty("--p", p.toFixed(3));
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, [root, language]); // re-observe on language change: keyed lists remount their nodes
}


export type Group = { label: string; items: [title: string, text: string][] };
export type CustomItem = { key: string; url?: string; highlights?: [title: string, text: string, tag: string][]; name: string; type: string; text: string; bg: string; fit: "cover" | "contain"; colors: string[]; list: string[]; lead: string; groups: Group[] };
// Extra screens shown in the detail sheet (cover first).
export const customGallery: Record<string, string[]> = {};
export const customImages: Record<string, string> = { bombon: `${base}/custom/bombon-cover.jpg`, franco: `${base}/custom/franco-cover.webp`, marea: `${base}/custom/marea-cover.jpg` };

export function CustomDetail({ items, index, labels, onClose, onNav }: { items: CustomItem[]; index: number; labels: { visit: string; close: string; basedOn: string; inherits: string[]; prev: string; next: string; tag: string }; onClose: () => void; onNav: (i: number) => void }) {
  const item = items[index];
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [shot, setShot] = useState(0);
  useEffect(() => setShot(0), [item.key]);
  const gallery = customGallery[item.key] ?? [customImages[item.key]];
  const portrait = gallery[shot].endsWith("-email.webp"); // tall screenshot: show whole, not cropped

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.body.style.overflow = overflow; previous?.focus?.(); };
  }, []);

  useEffect(() => {
    sheetRef.current?.scrollTo({ top: 0 });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNav((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onNav]);

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div className={styles.sheet} ref={sheetRef} role="dialog" aria-modal="true" aria-label={item.name} onClick={e => e.stopPropagation()}>
        <button type="button" className={styles.sheetClose} onClick={onClose} ref={closeRef} aria-label={labels.close}>{labels.close} ✕</button>
        <div className={styles.sheetTop} key={item.key}>
          <div className={styles.sheetMedia} style={{ background: portrait ? "#0d0b09" : item.bg }}>
            <Image key={gallery[shot]} className={styles.swap} src={gallery[shot]} alt={item.name} fill sizes="(max-width: 900px) 92vw, 40vw" style={{ objectFit: portrait ? "contain" : item.fit, padding: portrait ? "3%" : item.fit === "contain" ? "12%" : 0 }} />
            {gallery.length > 1 && <div className={styles.thumbs}>{gallery.map((g, i) => <button type="button" key={g} className={i === shot ? styles.thumbOn : ""} onClick={() => setShot(i)} aria-label={`${item.name} ${i + 1}`}><Image src={g} alt="" fill sizes="80px" /></button>)}</div>}
            <span className={styles.customTag}>{labels.tag}</span>
          </div>
          <div className={styles.sheetIntro}>
            <div className={styles.swatches}>{item.colors.map(c => <i key={c} style={{ background: c }} />)}</div>
            <span className={styles.customType}>{item.type}</span>
            <h3>{item.name}</h3>
            <p>{item.lead}</p>
            {item.url && <a className={styles.visitLink} href={item.url} target="_blank" rel="noreferrer">{labels.visit} <b>↗</b><span>{item.url.replace(/^https?:\/\//, "")}</span></a>}
          </div>
        </div>
        {item.highlights && (
          <div className={styles.highlights} key={`h-${item.key}`}>
            {item.highlights.map(([title, text, tag]) => (
              <div className={styles.highlight} key={title}><span className={styles.highlightTag}>{tag}</span><b>{title}</b><p>{text}</p></div>
            ))}
          </div>
        )}
        <div className={styles.groups} key={`g-${item.key}`}>
          {item.groups.map(group => (
            <section className={styles.group} key={group.label}>
              <span className={styles.eyebrow}>{group.label}</span>
              <ul>{group.items.map(([title, text]) => <li key={title}><b>{title}</b><span>{text}</span></li>)}</ul>
            </section>
          ))}
        </div>
        <div className={styles.sheetFoot}>
          <div className={styles.inherits}><span className={styles.eyebrow}>{labels.basedOn}</span><div>{labels.inherits.map(x => <em key={x}>{x}</em>)}</div></div>
          <div className={styles.sheetNav}>
            <button type="button" onClick={() => onNav((index - 1 + items.length) % items.length)}>← {labels.prev}</button>
            <button type="button" onClick={() => onNav((index + 1) % items.length)}>{labels.next} →</button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

