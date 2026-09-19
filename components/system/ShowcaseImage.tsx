"use client";

import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState, type ReactNode, type TouchEvent } from "react";
import styles from "./ShowcaseImage.module.css";

export type ShowcaseItem = { src: string; alt: string };

const labels = {
  en: { enlarge: "Tap to enlarge", close: "Close", prev: "Previous", next: "Next", zoomIn: "Zoom in", zoomOut: "Fit to screen" },
  es: { enlarge: "Toca para ampliar", close: "Cerrar", prev: "Anterior", next: "Siguiente", zoomIn: "Acercar", zoomOut: "Ajustar a pantalla" },
};

function Lightbox({ items, index, onChange, onClose, lang }: { items: ShowcaseItem[]; index: number; onChange: (i: number) => void; onClose: () => void; lang: "en" | "es" }) {
  const t = labels[lang];
  const [zoomed, setZoomed] = useState(true);
  const closeRef = useRef<HTMLButtonElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const item = items[index];
  const go = useCallback((delta: number) => onChange((index + delta + items.length) % items.length), [index, items.length, onChange]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.body.style.overflow = previous; };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // A new screen starts at the top-left, zoomed in enough to read
  useEffect(() => { stageRef.current?.scrollTo({ left: 0, top: 0 }); }, [index, zoomed]);

  return createPortal(
    <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={item.alt}>
      <div className={styles.bar}>
        <span className={styles.count}>{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        <span className={styles.caption}>{item.alt}</span>
        <button type="button" className={styles.iconBtn} onClick={() => setZoomed(z => !z)} aria-label={zoomed ? t.zoomOut : t.zoomIn}>{zoomed ? "−" : "+"}</button>
        <button type="button" className={styles.iconBtn} onClick={onClose} ref={closeRef} aria-label={t.close}>✕</button>
      </div>
      <div className={styles.stage} ref={stageRef}>
        {/* Plain <img>: the viewer needs the full-resolution file, not the responsive one */}
        <img src={item.src} alt={item.alt} className={zoomed ? styles.zoomed : styles.fit} draggable={false} onDoubleClick={() => setZoomed(z => !z)} />
      </div>
      {items.length > 1 && (
        <div className={styles.nav}>
          <button type="button" onClick={() => go(-1)}>← {t.prev}</button>
          <button type="button" onClick={() => go(1)}>{t.next} →</button>
        </div>
      )}
    </div>,
    document.body
  );
}

/**
 * Wraps a case-study screenshot: tap/click opens a zoomable viewer, and
 * swiping sideways on the image moves between screens.
 */
export function ShowcaseImage({ items, active, onChange, className, lang, children }: { items: ShowcaseItem[]; active: number; onChange: (i: number) => void; className?: string; lang: "en" | "es"; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const close = useCallback(() => setOpen(false), []);

  const onTouchStart = (event: TouchEvent) => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; swiped.current = false; };
  const onTouchEnd = (event: TouchEvent) => {
    const start = touch.current; touch.current = null;
    if (!start) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      swiped.current = true;
      onChange((active + (dx < 0 ? 1 : -1) + items.length) % items.length);
    }
  };

  return (
    <div className={className}>
      <div
        className={styles.trigger}
        role="button"
        tabIndex={0}
        aria-label={`${items[active].alt} — ${labels[lang].enlarge}`}
        onClick={() => { if (!swiped.current) setOpen(true); swiped.current = false; }}
        onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setOpen(true); } }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children}
        <span className={styles.hint} aria-hidden="true">⤢ {labels[lang].enlarge}</span>
      </div>
      {open && <Lightbox items={items} index={active} onChange={onChange} onClose={close} lang={lang} />}
    </div>
  );
}
