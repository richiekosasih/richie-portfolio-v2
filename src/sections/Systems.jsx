import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const systems = [
  {
    title: "Business Dashboards",
    body: "Interfaces for tracking products, orders, inventory, expenses, and daily operations.",
  },
  {
    title: "Workflow Tools",
    body: "Small web applications that simplify repetitive tasks and make information easier to manage.",
  },
  {
    title: "AI-assisted Development",
    body: "Using tools like Cursor, Codex, and structured workflows to move faster from idea and requirement into usable interfaces.",
  },
];

export default function Systems() {
  return (
    <Section id="systems">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          Systems
        </h2>
        <p className="mt-3 max-w-2xl text-cream/50">
          I focus on interfaces that make business workflows easier to
          understand, manage, and improve.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {systems.map((item, i) => (
          <motion.div key={item.title} {...fadeUp(i * 0.1)}>
            <Card className="h-full">
              <h3 className="text-lg font-semibold text-cream">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {item.body}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
