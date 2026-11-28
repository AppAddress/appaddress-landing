import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { WhatWeDo } from "@/components/WhatWeDo";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Products />
        <WhatWeDo />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
