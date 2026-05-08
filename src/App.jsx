import { ReactLenis } from "lenis/react";
import Navbar from "./components/layout/Navbar";
import TubeLightNav from "./components/ui/TubeLightNav";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Work from "./sections/Projects";
import Systems from "./sections/Systems";
import Stack from "./sections/Skills";
import Background from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-neutral-950 text-cream/70">
        <Navbar />
        <TubeLightNav />
        <main>
          <Hero />
          <div className="relative z-10 rounded-t-3xl bg-neutral-950 shadow-[0_-20px_60px_rgba(0,0,0,0.5)]">
            <Work />
            <Systems />
            <Stack />
            <Background />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
