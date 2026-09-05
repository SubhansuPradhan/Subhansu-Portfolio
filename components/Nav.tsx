"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#more", label: "Achievements" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const navigateToSection = (
      e: React.MouseEvent<HTMLAnchorElement>,
      href: string
  ) => {
    e.preventDefault();

    const id = href.substring(1);
    const target = document.getElementById(id);

    if (!target) {
      console.error(`Navigation target not found: #${id}`);
      return;
    }

    // Close mobile menu first
    setOpen(false);

    // Wait for the menu state to update, then scroll
    requestAnimationFrame(() => {
      const navHeight = 72;

      const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Update URL hash without reloading the page
      window.history.pushState(null, "", href);
    });
  };

  return (
      <motion.header
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-50 w-full border-b border-rule bg-paper/95 backdrop-blur-md"
      >
        {/* Main navigation bar */}
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">

          {/* Logo / Name */}
          <a
              href="#top"
              className="font-serif text-base font-semibold sm:text-lg"
              onClick={(e) => navigateToSection(e, "#top")}
          >
            {profile.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {links.map((link) => (
                  <li key={link.href}>
                    <a
                        href={link.href}
                        onClick={(e) => navigateToSection(e, link.href)}
                        className="text-sm text-inksoft transition-colors hover:text-pendeep"
                    >
                      {link.label}
                    </a>
                  </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">

            {/* Contact */}
            <a
                href="#contact"
                onClick={(e) => navigateToSection(e, "#contact")}
                className="rounded-sm border border-ink px-3 py-1.5 text-xs transition-colors hover:bg-ink hover:text-paper sm:px-3.5 sm:text-sm"
            >
              Contact
            </a>

            {/* Mobile hamburger */}
            <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="relative z-[60] flex h-8 w-8 touch-manipulation flex-col items-center justify-center gap-1.5 rounded-sm border border-rule md:hidden"
            >
            <span
                className={`h-[1.5px] w-4 bg-ink transition-transform duration-200 ${
                    open ? "translate-y-[3px] rotate-45" : ""
                }`}
            />

              <span
                  className={`h-[1.5px] w-4 bg-ink transition-transform duration-200 ${
                      open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {open && (
            <div className="relative z-[55] border-t border-rule bg-paper md:hidden">
              <ul className="w-full">
                {links.map((link) => (
                    <li
                        key={link.href}
                        className="border-b border-rule last:border-b-0"
                    >
                      <a
                          href={link.href}
                          onClick={(e) => navigateToSection(e, link.href)}
                          className="block min-h-[48px] w-full touch-manipulation px-6 py-4 text-left text-sm text-inksoft active:bg-paper2 active:text-pendeep"
                      >
                        {link.label}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
        )}
      </motion.header>
  );
}