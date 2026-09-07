import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeDo />
      </main>
    </>
  );
}
