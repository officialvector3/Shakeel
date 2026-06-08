"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Case Study", href: "#case-studies" },
  { label: "Blogs", href: "#blogs" },
  { label: "Research", href: "#research" },
  { label: "Tech Talk", href: "#tech-talk" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const backdrop = useTransform(scrollY, [0, 80], [0.6, 0.92]);
  const backgroundColor = useTransform(
    backdrop,
    (v) => `rgba(255,255,255,${v})`,
  );
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 8px 32px rgba(0,0,0,0.06)"],
  );

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:px-6">
      <motion.nav
        style={{
          backgroundColor,
          boxShadow: shadow,
        }}
        className="pointer-events-auto flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-[#e8e8e8]/80 px-3 py-2 pl-5 backdrop-blur-xl sm:px-4 sm:pl-6"
      >
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-tight text-[#111111]"
        >
          Shakeel
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-xs font-medium text-[#6b6b6b] transition-colors hover:text-[#111111]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <MagneticButton href="#let-me-fix" variant="primary">
          Let me fix
        </MagneticButton>
      </motion.nav>
    </header>
  );
}
