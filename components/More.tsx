"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { certifications, education } from "@/lib/data";

function List({ items }: { items: { title: string; detail: string }[] }) {
    return (
        <ul>
            {items.map((item, i) => (
                <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className={`py-3.5 ${i > 0 ? "border-t border-rule" : ""}`}
                >
                    <div className="text-[15.5px]">{item.title}</div>
                    <div className="text-[13.5px] text-inksoft">{item.detail}</div>
                </motion.li>
            ))}
        </ul>
    );
}
function CertGrid({ items }: { items: { title: string; detail: string }[] }) {
    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? items : items.slice(0, 4);

    return (
        <div>
            <div className="grid gap-4 sm:grid-cols-2">
                {visible.map((item, i) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
                        className="rounded-md border border-rule bg-card p-4"
                    >
                        <div className="text-[15.5px]">{item.title}</div>
                        <div className="text-[13.5px] text-inksoft">{item.detail}</div>
                    </motion.div>
                ))}
            </div>

            {items.length > 4 && (
                <button
                    type="button"
                    onClick={() => setExpanded((e) => !e)}
                    className="mt-6 rounded-sm border border-ink px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-paper"
                >
                    {expanded ? "Show less" : `Show all`}
                </button>
            )}
        </div>
    );
}

export default function More() {
    return (
        <>
            <section id="education" className="border-b border-rule py-16 md:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6">
                    <h2 className="mb-10 font-serif text-2xl font-medium sm:text-3xl">Education</h2>
                    <List items={education} />
                </div>
            </section>

            <section id="more" className="border-b border-rule py-16 md:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6">
                    <h2 className="mb-10 font-serif text-2xl font-medium sm:text-3xl">
                        Certifications &amp; achievements
                    </h2>
                    <CertGrid items={certifications} />
                </div>
            </section>
        </>
    );
}