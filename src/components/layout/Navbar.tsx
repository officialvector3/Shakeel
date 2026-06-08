"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Case Study", href: "#case-studies" },
  { label: "Services", href: "#services" },
  { label: "Blogs", href: "#blogs" },
  { label: "Research", href: "#research" },
  { label: "Tech Talk", href: "#tech-talk" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const backdrop = useTransform(scrollY, [0, 80], [0.72, 0.95]);
  const backgroundColor = useTransform(
    backdrop,
    (v) => `rgba(250,247,242,${v})`,
  );
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 8px 32px rgba(28,26,24,0.06)"],
  );

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:px-6">
      <motion.nav
        style={{
          backgroundColor,
          boxShadow: shadow,
        }}
        className="pointer-events-auto flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-[#e0d5c8]/90 px-3 py-2 pl-5 backdrop-blur-xl sm:px-4 sm:pl-6"
      >
        <Link
          href="/"
          className="shrink-0 font-serif text-sm font-medium tracking-tight text-[#1c1a18]"
        >
          Shakeel
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-xs font-medium text-[#5c564e] transition-colors hover:text-[#0d5c5c]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <MagneticButton
          href="#let-me-fix"
          className="bg-[#0d5c5c] hover:bg-[#0a4a4a]"
        >
          Let me fix
        </MagneticButton>
      </motion.nav>
    </header>
  );
}
