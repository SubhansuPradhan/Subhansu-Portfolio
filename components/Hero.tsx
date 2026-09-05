"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";

const name = profile.name.split("");

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};
const letter = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

export default function Hero() {
  return (
    <section className="border-b border-rule py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:gap-12 sm:px-6 md:grid-cols-[1fr_260px] md:items-start">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-3 flex items-center gap-2 text-sm text-pendeep"
          >
            <span className="h-2 w-2 rounded-full bg-pen" />
            Available for full-time roles — graduating 2027
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            aria-label={profile.name}
          >
            {name.map((char, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-4 max-w-[52ch] text-lg text-inksoft"
          >
            {profile.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            className="mt-5 max-w-[58ch] space-y-3"
          >
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${profile.email}`}
              className="rounded-sm border border-ink bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-pendeep hover:border-pendeep"
            >
              Get in touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-ink px-5 py-2.5 text-sm transition-colors hover:bg-paper2"
            >
              Resume
            </motion.a>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            whileHover={{ rotateY: 8, rotateX: -4, scale: 1.02 }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ transformStyle: "preserve-3d", perspective: 800 }}
            className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-md border border-rule bg-card shadow-sm"
          >
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="220px"
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:flex md:flex-col">
            {stats.map((s, i) => (
                <motion.div
                    key={s.num}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + i * 0.15, duration: 0.5 }}
                    className="border-l-2 border-pen pl-3.5"
                >
                  <span className="highlight-underline font-mono text-xl font-medium">
                    {s.num}
                  </span>
                  <span className="mt-1 block text-[13px] text-inksoft">{s.label}</span>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
