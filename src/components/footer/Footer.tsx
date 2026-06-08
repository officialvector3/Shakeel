import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Email", href: "mailto:hello@shakeel.dev" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e8e8e8] px-6 pb-12 pt-28 sm:px-10 lg:px-16 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="font-serif text-[clamp(2.5rem,8vw,7rem)] font-normal leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Let&apos;s build
            <br />
            together.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-[#111111]">Shakeel</span>
            <span className="text-xs text-[#6b6b6b]">
              &copy; {year} — Product Manager &amp; Tech Founder
            </span>
          </div>

          <nav className="flex flex-wrap gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-[#111111]"
              >
                {link.label}
                <ArrowUpRight
                  className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </nav>
        </FadeIn>
      </div>
    </footer>
  );
}
