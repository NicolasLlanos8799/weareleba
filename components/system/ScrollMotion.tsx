"use client";

import { useEffect, useRef } from "react";
import "./ScrollMotion.css";

export function ScrollMotion() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    let frame = 0;
    const updateMotion = () => {
      const viewportHeight = window.innerHeight;
      const scrollable = document.documentElement.scrollHeight - viewportHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      progressRef.current?.style.setProperty("transform", `scaleX(${Math.min(1, Math.max(0, progress))})`);

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const centered = Math.max(-1, Math.min(1, elementProgress * 2 - 1));
        element.style.setProperty("--motion-y", `${centered * -48}px`);
        element.style.setProperty("--motion-progress", `${elementProgress}`);
      });
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true"><div ref={progressRef} /></div>;
}
