"use client";

import { motion, useReducedMotion } from "motion/react";

type HeroSystemProps = { steps: readonly string[] };

const layers = [
  { name: "EXPERIENCE", x: 2, y: 48, z: 5, width: 82, height: 48 },
  { name: "WEBSITE", x: 11, y: 34, z: 4, width: 74, height: 54 },
  { name: "AUTOMATION", x: 4, y: 17, z: 3, width: 80, height: 48 },
  { name: "SOFTWARE", x: 16, y: 5, z: 2, width: 68, height: 54 },
  { name: "OPERATIONS", x: 8, y: -10, z: 1, width: 78, height: 46 },
];

export function HeroSystem({ steps }: HeroSystemProps) {
  const reducedMotion = useReducedMotion();
  return (
    <div className="hero-system" style={{ position: "absolute", inset: "8% 0 7%", perspective: 1200 }}>
      <svg aria-hidden="true" viewBox="0 0 500 620" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
        <path d="M250 100 L250 520" stroke="rgba(23,23,23,.18)" strokeWidth="1" strokeDasharray="4 7" />
        {[145, 225, 305, 385, 465].map((y, index) => <circle key={y} cx="250" cy={y} r="3" fill="var(--color-accent)" style={{ opacity: 1 - index * .12 }} />)}
      </svg>
      <div style={{ position: "absolute", inset: "8% 4% 6%", transformStyle: "preserve-3d", transform: "rotateX(58deg) rotateZ(-30deg)" }}>
        {layers.map((layer, index) => (
          <motion.div
            key={layer.name}
            initial={reducedMotion ? false : { opacity: 0, x: -20, y: 30, z: -40 }}
            animate={{ opacity: 1, x: 0, y: 0, z: layer.z * 28 }}
            transition={{ duration: reducedMotion ? 0 : .9, delay: reducedMotion ? 0 : .14 + index * .09, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "absolute", left: `${layer.x}%`, top: `${layer.y}%`, width: `${layer.width}%`, height: `${layer.height}%`, border: "1px solid var(--color-line-strong)", background: index === 1 ? "#e4e1da" : index === 3 ? "#dedbd3" : "#ebe8e1", boxShadow: "0 22px 48px rgba(23,23,23,.10)", transformStyle: "preserve-3d", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", inset: 12, borderTop: "1px solid var(--color-line)", borderLeft: "1px solid var(--color-line)" }} />
            <div className="technical" style={{ position: "absolute", top: 12, left: 12, fontSize: 9, color: "var(--color-text-muted)" }}>{layer.name}</div>
            {index === 0 && <div style={{ position: "absolute", right: 14, bottom: 14, width: 36, height: 36, border: "1px solid var(--color-line)", display: "grid", placeItems: "center", fontSize: 10 }}>01</div>}
            {index === 2 && <div style={{ position: "absolute", inset: "32% 12% auto", height: 1, background: "var(--color-text)" }} />}
            {index === 3 && <div style={{ position: "absolute", right: 14, bottom: 14, display: "flex", gap: 4 }}>{[1,2,3,4].map((dot) => <span key={dot} style={{ width: 5, height: 5, background: dot === 4 ? "var(--color-accent)" : "var(--color-text-muted)" }} />)}</div>}
          </motion.div>
        ))}
      </div>
      <div style={{ position: "absolute", right: 0, bottom: 42, display: "grid", gap: 10 }}>
        {steps.map((step, index) => <motion.div key={step} initial={reducedMotion ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reducedMotion ? 0 : .6 + index * .08, duration: .45 }} className="technical" style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ width: 18, height: 1, background: "var(--color-line-strong)" }} />{step}</motion.div>)}
      </div>
      <style jsx>{`@media (max-width:640px){.hero-system{inset:2% -4% 0!important}}`}</style>
    </div>
  );
}