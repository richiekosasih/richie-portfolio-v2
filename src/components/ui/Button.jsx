/**
 * Button
 * - variant: "primary" | "secondary"
 * - href:    if provided, renders an <a> tag (anchor link). Otherwise <button>.
 */
export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950";

  const variants = {
    primary:
      "bg-violet-500 text-white hover:bg-violet-600 focus-visible:ring-violet-400",
    secondary:
      "border border-neutral-700 bg-transparent text-neutral-100 hover:bg-neutral-800 hover:border-neutral-600 focus-visible:ring-neutral-500",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
