import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const points = [
  "Master of IT student",
  "ICT support exposure",
  "Operations & logistics background",
  "Business workflow mindset",
];

export default function Background() {
  return (
    <Section id="background" className="bg-[#0d0b08]">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
        {/* Photo */}
        <motion.div
          {...fadeUp(0)}
          className="lg:col-span-4 mx-auto w-full max-w-xs lg:max-w-none"
        >
          <div className="aspect-square overflow-hidden rounded-3xl bg-neutral-800">
            <img
              src="/images/richie.png"
              alt="Richie Kosasih"
              className="h-full w-full object-cover"
              draggable={false}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Copy + points */}
        <div className="lg:col-span-8">
          <motion.div {...fadeUp(0.1)}>
            <h2 className="text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              Background
            </h2>

            <div className="mt-6 space-y-4 max-w-2xl text-sm leading-relaxed text-cream/70 sm:text-base">
              <p>
                My background combines IT study, frontend development, and real
                operational experience. I'm currently based in Melbourne and
                building practical web tools that connect clean interfaces with
                real business workflows.
              </p>
              <p>
                Before moving deeper into IT, I worked around operations and
                logistics, where clear processes and reliable systems matter.
                That experience shapes how I approach software: simple flows,
                useful screens, and tools people can actually use.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {points.map((p) => (
              <Card key={p} className="!p-4 text-center">
                <p className="text-xs font-medium text-cream/70 sm:text-sm">
                  {p}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
