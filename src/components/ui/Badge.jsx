/**
 * Badge
 * Small reusable tag for tech stack, status, etc.
 */
export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1 text-xs font-medium text-cream/70 ${className}`}
    >
      {children}
    </span>
  );
}
