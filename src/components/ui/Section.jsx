/**
 * Section
 * Wrapper for each page section. Provides consistent vertical spacing
 * and a max-width container.
 */
export default function Section({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`w-full px-6 py-20 sm:px-8 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
