"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Resume", href: profile.resumeUrl },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-md bg-ink px-8 py-12 text-paper sm:px-10"
          >
            <h2 className="max-w-[20ch] font-serif text-2xl font-medium sm:text-3xl">
              Open to full-time Data Science and AI/ML roles.
            </h2>
            <p className="mt-3 max-w-[52ch] text-[15.5px] text-paper/75">
              If you're hiring for something that mixes analytics with applied ML or agentic AI,
              I'd like to hear about it. Reach out directly or grab my resume below.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  whileHover={{ scale: 1.05, backgroundColor: "#233026" }}
                  whileTap={{ scale: 0.96 }}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="rounded-sm border border-paper/25 px-4 py-2 text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="mx-auto flex max-w-5xl flex-wrap gap-2 justify-between px-4 sm:px-6 pb-10 text-[13px] text-inkfaint">
        <span>{profile.name}</span>
        <span>© 2026</span>
      </footer>
    </>
  );
}
