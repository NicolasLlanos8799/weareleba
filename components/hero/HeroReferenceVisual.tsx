"use client";

const modules = [
  { number: "01", label: "STRATEGY", detail: "Direction / positioning", className: "is-strategy" },
  { number: "02", label: "DESIGN", detail: "Identity / experience", className: "is-design" },
  { number: "03", label: "BUILD", detail: "Product / technology", className: "is-build" },
  { number: "04", label: "GROWTH", detail: "Launch / evolution", className: "is-growth" },
];

export function HeroReferenceVisual() {
  return (
    <div className="hero-system" aria-hidden="true">
      <style>{`
        .hero-system{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:#090a0b;color:#f4f2ed}
        .hero-system-grid{position:absolute;inset:-10%;opacity:.22;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:80px 80px;transform:perspective(900px) rotateX(58deg) scale(1.35) translateY(12%);transform-origin:center bottom}
        .hero-system-vignette{position:absolute;inset:0;background:linear-gradient(90deg,#090a0b 0%,rgba(9,10,11,.98) 31%,rgba(9,10,11,.72) 48%,rgba(9,10,11,.12) 78%,rgba(9,10,11,.2) 100%),linear-gradient(180deg,rgba(0,0,0,.45),transparent 25%,transparent 72%,rgba(0,0,0,.55))}
        .hero-system-orb{position:absolute;width:min(52vw,760px);aspect-ratio:1;right:5%;top:50%;transform:translateY(-50%);border-radius:50%;background:radial-gradient(circle,rgba(208,157,94,.075),rgba(208,157,94,.018) 38%,transparent 68%);filter:blur(18px)}
        .hero-system-stage{position:absolute;width:min(57vw,820px);height:min(72vh,700px);right:4.5%;top:50%;transform:translateY(-50%)}
        .hero-stage-header{position:absolute;top:0;left:0;right:0;display:flex;justify-content:space-between;font:500 9px/1 var(--font-geist),Arial,sans-serif;letter-spacing:.22em;color:rgba(255,255,255,.34)}
        .hero-system-line{position:absolute;background:rgba(224,213,194,.13)}
        .hero-system-line--top{left:0;right:0;top:25px;height:1px}
        .hero-system-line--vertical{top:25px;bottom:25px;left:48%;width:1px}
        .hero-system-line--diagonal{width:1px;height:88%;left:48%;top:7%;transform:rotate(43deg);transform-origin:center;background:linear-gradient(180deg,transparent,rgba(207,157,96,.3),transparent)}
        .hero-system-core{position:absolute;left:48%;top:50%;width:210px;height:210px;transform:translate(-50%,-50%);border:1px solid rgba(221,201,174,.22);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;background:radial-gradient(circle,rgba(48,45,40,.72),rgba(12,13,14,.9) 68%);box-shadow:0 0 80px rgba(195,143,82,.055),inset 0 0 40px rgba(255,255,255,.025)}
        .core-ring{position:absolute;border:1px solid rgba(220,199,169,.12);border-radius:50%}
        .core-ring--one{inset:17px;animation:heroSpin 24s linear infinite}
        .core-ring--two{inset:34px;border-style:dashed;animation:heroSpinReverse 17s linear infinite}
        .core-cross{position:absolute;background:rgba(221,200,171,.16)}
        .core-cross--h{width:100%;height:1px}.core-cross--v{height:100%;width:1px}
        .core-point{width:7px;height:7px;border-radius:50%;background:#d19a5b;box-shadow:0 0 18px rgba(209,154,91,.7);z-index:2;animation:heroPulse 3.5s ease-in-out infinite}
        .hero-system-core strong{position:absolute;top:50%;transform:translateY(-50%);font:500 10px/1 var(--font-geist),Arial,sans-serif;letter-spacing:.32em;margin-left:.32em;color:rgba(255,255,255,.82)}
        .hero-system-core small{position:absolute;bottom:40px;text-align:center;font:500 6px/1.55 var(--font-geist),Arial,sans-serif;letter-spacing:.2em;color:rgba(255,255,255,.32)}
        .hero-module{position:absolute;width:235px;min-height:72px;border:1px solid rgba(222,211,193,.16);background:rgba(15,16,17,.72);backdrop-filter:blur(8px);display:grid;grid-template-columns:44px 1fr 20px;align-items:center;padding:12px 14px;gap:12px;transition:border-color .3s ease,transform .3s ease}
        .hero-module::before{content:"";position:absolute;width:6px;height:6px;border-radius:50%;background:#d19a5b;box-shadow:0 0 10px rgba(209,154,91,.55);}
        .hero-module.is-strategy::before,.hero-module.is-build::before{right:-3px}.hero-module.is-design::before,.hero-module.is-growth::before{left:-3px}
        .hero-module-index{font:400 25px/1 var(--font-geist),Arial,sans-serif;letter-spacing:-.06em;color:rgba(255,255,255,.3)}
        .hero-module-copy{display:grid;gap:6px}.hero-module-copy strong{font:500 10px/1 var(--font-geist),Arial,sans-serif;letter-spacing:.18em}.hero-module-copy span{font:400 8px/1.3 var(--font-geist),Arial,sans-serif;letter-spacing:.02em;color:rgba(255,255,255,.3)}
        .hero-module i{font:400 16px/1 Arial,sans-serif;color:rgba(255,255,255,.48);font-style:normal}
        .hero-module.is-strategy{left:0;top:15%}.hero-module.is-design{right:0;top:29%}.hero-module.is-build{left:2%;bottom:16%}.hero-module.is-growth{right:2%;bottom:7%}
        .hero-system-micro{position:absolute;font:500 7px/1 var(--font-geist),Arial,sans-serif;letter-spacing:.22em;color:rgba(255,255,255,.27)}
        .hero-system-micro--one{left:4%;top:42%}.hero-system-micro--two{right:8%;top:15%}.hero-system-micro--three{right:9%;bottom:24%}
        .hero-system-footer{position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:space-between;align-items:center;padding-top:18px;border-top:1px solid rgba(255,255,255,.1);font:500 8px/1 var(--font-geist),Arial,sans-serif;letter-spacing:.2em;color:rgba(255,255,255,.28)}
        .hero-system-pulse{display:flex;align-items:center;gap:8px}.hero-system-pulse i{width:5px;height:5px;border-radius:50%;background:#d19a5b;box-shadow:0 0 9px rgba(209,154,91,.7);animation:heroPulse 2s ease-in-out infinite}
        @keyframes heroSpin{to{transform:rotate(360deg)}}@keyframes heroSpinReverse{to{transform:rotate(-360deg)}}@keyframes heroPulse{0%,100%{opacity:.45;transform:scale(.8)}50%{opacity:1;transform:scale(1.25)}}
        @media (max-width:1024px){.hero-system-stage{width:65vw;right:-2%}.hero-module{width:205px}.hero-system-core{width:180px;height:180px}}
        @media (max-width:700px){.hero-system-stage{width:105vw;height:68vh;right:-31%;top:51%;opacity:.86}.hero-system-grid{background-size:52px 52px;opacity:.14}.hero-system-vignette{background:linear-gradient(90deg,#090a0b 0%,rgba(9,10,11,.95) 39%,rgba(9,10,11,.56) 68%,rgba(9,10,11,.2) 100%),linear-gradient(180deg,rgba(0,0,0,.4),transparent 35%,rgba(0,0,0,.55))}.hero-system-core{width:145px;height:145px}.hero-system-core strong{font-size:8px}.hero-system-core small{bottom:27px;font-size:5px}.hero-module{width:174px;min-height:58px;padding:9px 10px;grid-template-columns:34px 1fr 14px;gap:8px}.hero-module-index{font-size:19px}.hero-module-copy strong{font-size:8px}.hero-module-copy span{font-size:6px}.hero-module i{font-size:12px}.hero-module.is-strategy{top:12%;left:5%}.hero-module.is-design{top:27%;right:2%}.hero-module.is-build{bottom:17%;left:6%}.hero-module.is-growth{bottom:5%;right:2%}.hero-system-micro{font-size:5px}.hero-system-footer{font-size:6px}.hero-system-line--vertical{left:47%}}
        @media (max-width:390px){.hero-system-stage{right:-39%;opacity:.72}.hero-module{width:160px}.hero-module.is-strategy{left:4%}.hero-module.is-build{left:5%}.hero-system-footer{display:none}}
        @media (prefers-reduced-motion:reduce){.core-ring--one,.core-ring--two,.core-point,.hero-system-pulse i{animation:none}}
      `}</style>

      <div className="hero-system-grid" />
      <div className="hero-system-vignette" />
      <div className="hero-system-orb" />
      <div className="hero-system-stage">
        <div className="hero-stage-header"><span>LEBA / DIGITAL SYSTEM</span><span>01—04</span></div>
        <div className="hero-system-line hero-system-line--top" />
        <div className="hero-system-line hero-system-line--vertical" />
        <div className="hero-system-line hero-system-line--diagonal" />
        <div className="hero-system-core"><span className="core-ring core-ring--one" /><span className="core-ring core-ring--two" /><span className="core-cross core-cross--h" /><span className="core-cross core-cross--v" /><span className="core-point" /><strong>LEBA</strong><small>CONNECTED<br />SYSTEM</small></div>
        {modules.map((module) => <div key={module.number} className={`hero-module ${module.className}`}><div className="hero-module-index">{module.number}</div><div className="hero-module-copy"><strong>{module.label}</strong><span>{module.detail}</span></div><i>↗</i></div>)}
        <div className="hero-system-micro hero-system-micro--one">INPUT</div><div className="hero-system-micro hero-system-micro--two">EXPERIENCE</div><div className="hero-system-micro hero-system-micro--three">OUTPUT</div>
        <div className="hero-system-footer"><span>IDEA → SYSTEM → IMPACT</span><span className="hero-system-pulse"><i /> LIVE</span></div>
      </div>
    </div>
  );
}
