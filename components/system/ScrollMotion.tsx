"use client";

import { useEffect, useRef } from "react";
import "./ScrollMotion.css";

export function ScrollMotion() {
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
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
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const centered = Math.max(-1, Math.min(1, progress * 2 - 1));
        element.style.setProperty("--motion-y", `${centered * -48}px`);
        element.style.setProperty("--motion-progress", `${progress}`);
      });
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };

    let cursorFrame = 0;
    let cursorX = -100;
    let cursorY = -100;

    const getCursorLabel = (target: HTMLElement) => {
      if (target.closest("[data-cursor='view'], img, picture")) return "VIEW";
      const link = target.closest<HTMLAnchorElement>("a");
      if (link?.href?.startsWith("mailto:")) return "CONTACT";
      if (link) return "OPEN";
      return "";
    };

    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate3d(-50%, -50%, 0)`;
      }
      cursorFrame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer.matches) return;
      cursorX = event.clientX;
      cursorY = event.clientY;
      const label = getCursorLabel(event.target as HTMLElement);
      cursorRef.current?.classList.toggle("is-active", Boolean(label));
      if (cursorLabelRef.current) cursorLabelRef.current.textContent = label;
      if (!cursorFrame) cursorFrame = window.requestAnimationFrame(updateCursor);
    };

    const onPointerLeave = () => cursorRef.current?.classList.remove("is-visible");
    const onPointerEnter = () => cursorRef.current?.classList.add("is-visible");

    updateMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    if (finePointer.matches) {
      document.documentElement.classList.add("has-custom-cursor");
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
      document.documentElement.addEventListener("pointerenter", onPointerEnter);
    }

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.removeEventListener("pointerenter", onPointerEnter);
      document.documentElement.classList.remove("has-custom-cursor");
      if (frame) window.cancelAnimationFrame(frame);
      if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><div ref={progressRef} /></div>
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true"><span ref={cursorLabelRef} /></div>
    </>
  );
}
