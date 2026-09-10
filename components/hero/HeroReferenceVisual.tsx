"use client";

export function HeroReferenceVisual() {
  return (
    <div className="hero-system" aria-hidden="true">
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
