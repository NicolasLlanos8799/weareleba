"use client";

import { useState } from "react";

const links = ["Work", "Capabilities", "Process", "About"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-brand focusable" href="#top" aria-label="WE ARE LEBA">
          WE ARE LEBA
        </a>

        <nav aria-label="Principal" className="desktop-nav site-nav">
          {links.map((link) => (
            <a className="focusable" key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a className="focusable site-header-cta" href="#contact">
            <span>Start a project</span>
            <span aria-hidden="true">↗</span>
          </a>
          <button
            className="focusable menu-toggle"
            type="button"
            aria-label={open ? "Close" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="mobile-nav">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
