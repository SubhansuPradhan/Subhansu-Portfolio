"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-rule py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-medium sm:text-3xl">Experience</h2>
          <span className="font-mono text-sm text-inkfaint">2026</span>
        </div>

        <div>
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid grid-cols-1 gap-4 py-6 sm:grid-cols-[150px_1fr] ${
                i > 0 ? "border-t border-rule" : ""
              }`}
            >
              <div className="pt-0.5 font-mono text-sm text-inksoft">{item.when}</div>
              <div>
                <div className="font-serif text-lg">{item.role}</div>
                <div className="mb-3 text-sm text-pendeep">{item.org}</div>
                <ul className="ml-4 list-disc space-y-1.5 text-[15px]">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
