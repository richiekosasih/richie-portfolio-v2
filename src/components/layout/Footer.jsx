export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-neutral-500 sm:flex-row sm:px-8">
        <p>© {year} Richie Kosasih. All rights reserved.</p>
        <p>Built with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
