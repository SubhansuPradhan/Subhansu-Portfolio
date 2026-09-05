"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectModal({
 project,
 onCloseAction,
}: {
  project: Project | null;
  onCloseAction: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-6 backdrop-blur-sm"
          onClick={onCloseAction}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="w-full max-w-lg rounded-md border border-rule bg-card p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="font-serif text-2xl">{project.name}</h3>
              <button
                onClick={onCloseAction}
                aria-label="Close"
                className="rounded-sm border border-rule px-2.5 py-1 text-sm text-inksoft hover:bg-paper2"
              >
                Close
              </button>
            </div>
            {project.status && (
              <span
                className={`mb-4 inline-block rounded-sm px-2 py-0.5 font-mono text-[11px] ${
                  project.status === "In progress"
                    ? "bg-highlight/40 text-[#7A5D06]"
                    : "bg-pen/15 text-pendeep"
                }`}
              >
                {project.status}
              </span>
            )}
            <p className="mb-4 text-[15px] text-ink">{project.summary}</p>
            <p className="highlight-underline mb-5 inline-block font-mono text-sm">
              {project.metric}
            </p>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-rule px-2.5 py-1 font-mono text-xs text-inksoft"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm border border-ink px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-paper"
              >
                View repository ↗
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
