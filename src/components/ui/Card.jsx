/**
 * Card
 * Reusable container with subtle border and rounded corners.
 */
export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-colors duration-200 hover:border-neutral-700 ${className}`}
    >
      {children}
    </div>
  );
}
