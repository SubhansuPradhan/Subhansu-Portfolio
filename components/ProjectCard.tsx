"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectCard({
                                      project,
                                      index,
                                      onExpandAction,
                                    }: {
  project: Project;
  index: number;
  onExpandAction: (p: Project) => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const isFlagship = project.status === "Flagship";

  return (
      <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
          className={`${isFlagship ? "sm:col-span-2" : ""} h-64`}
          style={{ perspective: 1200 }}
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
      >
        <motion.div
            className="relative h-full w-full cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.55, ease: [0.4, 0.2, 0.2, 1] }}
            onClick={() => setFlipped((f) => !f)}
            role="button"
            tabIndex={0}
            aria-label={`${project.name} — press to flip, then view details`}
            onKeyDown={(e) => e.key === "Enter" && onExpandAction(project)}
        >
          {/* front */}
          <div
              className="absolute inset-0 flex flex-col justify-between rounded-md border border-rule bg-card p-5"
              style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-serif text-lg">{project.name}</h3>
              {project.status && (
                  <span
                      className={`whitespace-nowrap rounded-sm px-2 py-0.5 font-mono text-[11px] ${
                          project.status === "In progress"
                              ? "bg-highlight/40 text-[#7A5D06]"
                              : "bg-pen/15 text-pendeep"
                      }`}
                  >
                {project.status}
              </span>
              )}
            </div>
            <p className="text-sm text-inksoft line-clamp-3">{project.summary}</p>
            <span className="font-mono text-xs text-inkfaint">Tap or hover to flip →</span>
          </div>

          {/* back */}
          <div
              className="absolute inset-0 flex flex-col justify-between rounded-md border border-pen bg-ink p-5 text-paper"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div>
            <span className="font-mono text-[13px] text-paper/90">
              {project.metric}
            </span>
            </div>
            <div className="flex flex-wrap gap-1.5 overflow-y-auto">
              {project.tags.map((tag) => (
                  <span
                      key={tag}
                      className="rounded-sm border border-paper/25 px-2 py-0.5 font-mono text-[11px] text-paper/85"
                  >
                {tag}
              </span>
              ))}
            </div>
            <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onExpandAction(project);
                }}
                className="self-start rounded-sm border border-paper/40 px-3 py-1.5 text-xs text-paper transition-colors hover:bg-paper/10"
            >
              View details →
            </button>
          </div>
        </motion.div>
      </motion.div>
  );
}