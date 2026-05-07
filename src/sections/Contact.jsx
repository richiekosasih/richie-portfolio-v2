import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-900/40 p-10 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let's get in touch
        </h2>
        <p className="mt-4 text-neutral-300">
          I'm open to junior frontend roles, internships, and collaboration
          opportunities. Feel free to reach out — I'd love to chat.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="mailto:richiekosasih@gmail.com" variant="primary">
            Email Me
          </Button>
          <Button
            href="https://github.com/richiekosasih"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          richiekosasih@gmail.com
        </p>
      </div>
    </Section>
  );
}
