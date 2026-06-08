const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "X", href: "https://x.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-100 px-6 py-12 sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-neutral-950">Shakeel</span>
          <span className="text-xs text-neutral-400">
            &copy; {year} Shakeel. All rights reserved.
          </span>
        </div>

        <nav className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 transition-colors hover:text-neutral-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
