"use client";

export function HeroReferenceVisual() {
  return (
    <div className="hero-system" aria-hidden="true">
      <style>{`
        .hero-system {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          background:
            radial-gradient(circle at 73% 47%, rgba(191, 139, 76, .055), transparent 25%),
            radial-gradient(circle at 86% 72%, rgba(255,255,255,.025), transparent 28%);
        }

        .hero-system-glow {
          position: absolute;
          width: min(54vw, 780px);
          aspect-ratio: 1;
          left: 57%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(196,145,82,.075), transparent 62%);
          filter: blur(22px);
        }

        .hero-system-haze {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(5,7,8,.98) 0%, rgba(5,7,8,.94) 29%, rgba(5,7,8,.68) 49%, rgba(5,7,8,.08) 76%, rgba(5,7,8,0) 100%);
        }

        .hero-orbit-svg {
          position: absolute;
          width: min(72vw, 980px);
          height: auto;
          right: -3vw;
          top: 50%;
          transform: translateY(-50%);
          overflow: visible;
          opacity: .98;
        }

        .hero-orbit-svg-line {
          stroke: rgba(214, 202, 181, .17);
          stroke-width: 1;
          vector-effect: non-scaling-stroke;
        }
        .hero-orbit-svg-line--2 { stroke-dasharray: 3 7; opacity: .8; }
        .hero-orbit-svg-line--3 { stroke: rgba(214, 202, 181, .1); }
        .hero-orbit-svg-line--4 { stroke: rgba(197, 145, 82, .2); }

        .hero-connection {
          stroke: rgba(194, 143, 80, .25);
          stroke-width: 1;
          vector-effect: non-scaling-stroke;
          stroke-dasharray: 1 5;
          animation: heroConnection 8s linear infinite;
        }
        .hero-connection--2 { animation-delay: -2.5s; }
        .hero-connection--3 { animation-delay: -5s; }

        .hero-core-glow { opacity: .72; }
        .hero-core { stroke: rgba(221, 180, 120, .16); stroke-width: 1.2; }
        .hero-core-edge { stroke: rgba(214, 160, 91, .42); stroke-width: 1; opacity: .9; }
        .hero-core-shadow { fill: rgba(0,0,0,.22); opacity: .82; }

        .hero-node-halo {
          fill: rgba(198, 145, 80, .08);
          animation: heroPulse 4.5s ease-in-out infinite;
        }
        .hero-node-dot {
          fill: #d19a59;
          filter: drop-shadow(0 0 7px rgba(209,154,89,.65));
        }
        .hero-node--design .hero-node-halo { animation-delay: -1.1s; }
        .hero-node--development .hero-node-halo { animation-delay: -2.3s; }
        .hero-node--growth .hero-node-halo { animation-delay: -3.4s; }

        .hero-floating-node {
          fill: rgba(221, 172, 106, .78);
          filter: drop-shadow(0 0 5px rgba(221,172,106,.45));
          animation: heroFloat 6s ease-in-out infinite;
        }
        .hero-floating-node--2 { animation-delay: -2s; }
        .hero-floating-node--3 { animation-delay: -4s; }

        .hero-system-label {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(245,242,235,.72);
          font-size: 9px;
          line-height: 1;
          letter-spacing: .18em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .hero-system-label span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #d09a5c;
          box-shadow: 0 0 10px rgba(208,154,92,.6);
        }
        .hero-system-label strong { font-weight: 500; color: rgba(255,255,255,.42); }
        .hero-system-label em { font-style: normal; font-weight: 500; }
        .hero-system-label--strategy { top: 23%; left: 51%; }
        .hero-system-label--design { top: 31%; right: 6%; }
        .hero-system-label--development { bottom: 29%; left: 49%; }
        .hero-system-label--growth { bottom: 19%; right: 13%; }

        .hero-system-meta {
          position: absolute;
          right: 5.5vw;
          bottom: 5.5vh;
          display: flex;
          align-items: center;
          gap: 14px;
          color: rgba(255,255,255,.34);
          font-size: 8px;
          letter-spacing: .2em;
          text-transform: uppercase;
        }
        .hero-system-meta i { width: 52px; height: 1px; background: rgba(255,255,255,.2); }
        .hero-system-meta b { font-weight: 500; color: rgba(205,157,99,.58); }

        @keyframes heroPulse {
          0%, 100% { transform: scale(.82); opacity: .45; }
          50% { transform: scale(1.35); opacity: .95; }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translate(0, 0); opacity: .5; }
          50% { transform: translate(0, -7px); opacity: 1; }
        }
        @keyframes heroConnection {
          to { stroke-dashoffset: -80; }
        }

        @media (max-width: 1024px) {
          .hero-orbit-svg { width: 78vw; right: -15vw; }
          .hero-system-haze { background: linear-gradient(90deg, rgba(5,7,8,.98) 0%, rgba(5,7,8,.9) 34%, rgba(5,7,8,.5) 62%, rgba(5,7,8,.12) 100%); }
          .hero-system-label--strategy { left: 49%; }
          .hero-system-label--development { left: 43%; }
        }

        @media (max-width: 700px) {
          .hero-system { z-index: 0; }
          .hero-orbit-svg {
            width: 122vw;
            max-width: none;
            right: -42vw;
            top: 49%;
            opacity: .8;
          }
          .hero-system-glow { width: 100vw; left: 72%; top: 48%; }
          .hero-system-haze { background: linear-gradient(90deg, rgba(5,7,8,.99) 0%, rgba(5,7,8,.91) 43%, rgba(5,7,8,.42) 77%, rgba(5,7,8,.08) 100%); }
          .hero-system-label { font-size: 7px; gap: 7px; letter-spacing: .14em; }
          .hero-system-label--strategy { top: 24%; left: 51%; }
          .hero-system-label--design { top: 34%; right: 5%; }
          .hero-system-label--development { bottom: 31%; left: 43%; }
          .hero-system-label--growth { bottom: 22%; right: 8%; }
          .hero-system-meta { display: none; }
        }

        @media (max-width: 390px) {
          .hero-orbit-svg { width: 132vw; right: -49vw; }
          .hero-system-label--development { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-connection, .hero-node-halo, .hero-floating-node { animation: none !important; }
        }
      `}</style>

      <div className="hero-system-glow" />
      <div className="hero-system-haze" />
      <svg className="hero-orbit-svg" viewBox="0 0 920 780" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="heroCore" cx="38%" cy="32%" r="72%">
            <stop offset="0" stopColor="#3a3834" stopOpacity=".44" />
            <stop offset=".42" stopColor="#17191a" stopOpacity=".74" />
            <stop offset="1" stopColor="#090b0c" stopOpacity=".98" />
          </radialGradient>
          <radialGradient id="heroCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#c89454" stopOpacity=".2" />
            <stop offset="1" stopColor="#c89454" stopOpacity="0" />
          </radialGradient>
          <filter id="heroBlur" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="18" /></filter>
        </defs>
        <ellipse className="hero-orbit-svg-line hero-orbit-svg-line--1" cx="500" cy="390" rx="350" ry="154" transform="rotate(-18 500 390)" />
        <ellipse className="hero-orbit-svg-line hero-orbit-svg-line--2" cx="500" cy="390" rx="320" ry="236" transform="rotate(24 500 390)" />
        <ellipse className="hero-orbit-svg-line hero-orbit-svg-line--3" cx="500" cy="390" rx="395" ry="286" transform="rotate(-34 500 390)" />
        <ellipse className="hero-orbit-svg-line hero-orbit-svg-line--4" cx="500" cy="390" rx="278" ry="118" transform="rotate(54 500 390)" />
        <path className="hero-connection hero-connection--1" d="M140 514 C290 455 410 410 620 258" />
        <path className="hero-connection hero-connection--2" d="M225 166 C360 235 500 295 785 520" />
        <path className="hero-connection hero-connection--3" d="M344 690 C420 565 515 468 742 362" />
        <circle className="hero-core-glow" cx="500" cy="390" r="205" fill="url(#heroCoreGlow)" filter="url(#heroBlur)" />
        <circle className="hero-core" cx="500" cy="390" r="142" fill="url(#heroCore)" />
        <circle className="hero-core-edge" cx="500" cy="390" r="142" />
        <path className="hero-core-shadow" d="M413 304 C462 250 566 237 621 284 C670 326 653 430 596 492 C536 558 434 535 397 465 C369 411 375 345 413 304Z" />
        <g className="hero-node hero-node--strategy"><circle className="hero-node-halo" cx="205" cy="162" r="16" /><circle className="hero-node-dot" cx="205" cy="162" r="5.5" /></g>
        <g className="hero-node hero-node--design"><circle className="hero-node-halo" cx="790" cy="286" r="16" /><circle className="hero-node-dot" cx="790" cy="286" r="5.5" /></g>
        <g className="hero-node hero-node--development"><circle className="hero-node-halo" cx="184" cy="532" r="16" /><circle className="hero-node-dot" cx="184" cy="532" r="5.5" /></g>
        <g className="hero-node hero-node--growth"><circle className="hero-node-halo" cx="720" cy="592" r="16" /><circle className="hero-node-dot" cx="720" cy="592" r="5.5" /></g>
        <circle className="hero-floating-node hero-floating-node--1" cx="350" cy="284" r="4" />
        <circle className="hero-floating-node hero-floating-node--2" cx="652" cy="224" r="3" />
        <circle className="hero-floating-node hero-floating-node--3" cx="610" cy="615" r="4" />
      </svg>
      <div className="hero-system-label hero-system-label--strategy"><span /><strong>01</strong><em>STRATEGY</em></div>
      <div className="hero-system-label hero-system-label--design"><span /><strong>02</strong><em>DESIGN</em></div>
      <div className="hero-system-label hero-system-label--development"><span /><strong>03</strong><em>DEVELOPMENT</em></div>
      <div className="hero-system-label hero-system-label--growth"><span /><strong>04</strong><em>GROWTH</em></div>
      <div className="hero-system-meta"><span>CONNECTED DIGITAL SYSTEM</span><i /><b>LEBA / 01</b></div>
    </div>
  );
}
