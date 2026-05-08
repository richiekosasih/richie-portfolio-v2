import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Work", url: "#work" },
  { name: "Systems", url: "#systems" },
  { name: "Stack", url: "#stack" },
  { name: "Background", url: "#background" },
  { name: "Contact", url: "#contact" },
];

export default function TubeLightNav() {
  const [activeTab, setActiveTab] = useState("");
  const [dimmed, setDimmed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY.current) > 5) {
        setDimmed(y > lastY.current && y > 100);
        lastY.current = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navItems.find((n) => n.url === `#${entry.target.id}`);
            if (match) setActiveTab(match.name);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" },
    );
    navItems.forEach((item) => {
      const el = document.querySelector(item.url);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="hidden md:block fixed top-0 left-1/2 -translate-x-1/2 z-200 pt-5"
      style={{
        opacity: dimmed && !hovered ? 0.3 : 1,
        transition: "opacity 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-1 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg bg-black/50">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={`relative cursor-pointer text-xs font-medium px-4 py-2 rounded-full transition-colors lg:text-sm lg:px-5 ${
                isActive ? "text-cream" : "text-cream/50 hover:text-cream"
              }`}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="tube-lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-cream rounded-t-full">
                    <div className="absolute w-12 h-6 bg-cream/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-cream/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-cream/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
