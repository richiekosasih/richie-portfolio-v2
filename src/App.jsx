import { ReactLenis } from "lenis/react";
import Navbar from "./components/layout/Navbar";
import TubeLightNav from "./components/ui/TubeLightNav";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
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
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
