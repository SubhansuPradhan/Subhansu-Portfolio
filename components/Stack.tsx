"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="border-b border-rule py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-10 font-serif text-2xl font-medium sm:text-3xl">Stack</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {stack.map((group, gi) => (
            <div key={group.group}>
              <h3 className="mb-3 font-mono text-[13px] text-inkfaint">{group.group}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2, borderColor: "#33604F" }}
                    transition={{ duration: 0.3, delay: gi * 0.05 + i * 0.03 }}
                    className="flex items-center gap-1.5 rounded-sm border border-rule bg-card px-3 py-1.5 text-[13.5px]"
                  >
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 object-contain"
                      />
                    )}
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
