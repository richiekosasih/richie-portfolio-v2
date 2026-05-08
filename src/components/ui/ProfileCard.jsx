import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/richiekosasih",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    url: "mailto:richiekosasih@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ProfileCard({
  name = "Richie Kosasih",
  title = "Frontend Developer · MIT Student",
  description = "I'm Richie — a Master of Information Technology student based in Melbourne, transitioning into IT after years of operational and logistics experience. I focus on frontend development with React, JavaScript, and Tailwind CSS. I learn best by building practical projects like internal dashboards and tools that solve real business problems. I care about clean code, clear UI, and shipping things that actually work.",
  imageUrl = "/images/richie.png",
}) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Desktop */}
      <div className="hidden md:flex relative items-center">
        <motion.div
          {...fadeUp(0)}
          className="w-[420px] h-[420px] lg:w-[470px] lg:h-[470px] rounded-3xl overflow-hidden bg-neutral-800 shrink-0"
        >
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
            draggable={false}
            loading="eager"
          />
        </motion.div>

        <motion.div
          {...fadeUp(0.2)}
          className="bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-cream mb-2">{name}</h2>
            <p className="text-sm font-medium text-cream/50">{title}</p>
          </div>

          <p className="text-cream/70 text-base leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex gap-3">
            {socialLinks.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-cream/60 transition-all hover:bg-white/20 hover:text-cream hover:scale-105"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="md:hidden max-w-sm mx-auto text-center">
        <motion.div
          {...fadeUp(0)}
          className="w-full aspect-square bg-neutral-800 rounded-3xl overflow-hidden mb-6"
        >
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
            draggable={false}
            loading="eager"
          />
        </motion.div>

        <motion.div {...fadeUp(0.15)} className="px-2">
          <h2 className="text-xl font-bold text-cream mb-2">{name}</h2>
          <p className="text-sm font-medium text-cream/50 mb-4">{title}</p>
          <p className="text-cream/70 text-sm leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex justify-center gap-3">
            {socialLinks.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-cream/60 transition-all hover:bg-white/20 hover:text-cream"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
