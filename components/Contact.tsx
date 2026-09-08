"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "CV", href: profile.cvUrl },
];

export default function Contact() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setShowTop(window.scrollY > 500);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

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

            <div className="flex justify-center py-2">
                {showTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-rule bg-card text-ink transition-colors hover:border-pen hover:text-pendeep"
                    >
                        ↑
                    </motion.button>
                )}
            </div>

            <footer className="mx-auto flex max-w-5xl flex-wrap gap-2 justify-between px-4 sm:px-6 pb-10 text-[13px] text-inkfaint">
                <span>{profile.name}</span>
                <span>© 2026</span>
            </footer>
        </>
    );
}