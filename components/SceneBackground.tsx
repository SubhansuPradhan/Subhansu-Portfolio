"use client";

import Image from "next/image";

const ICONS = [
  "/icons/python.png", "/icons/r.png", "/icons/javascript.png", "/icons/html5.png",
  "/icons/css3.png", "/icons/git.png", "/icons/postgresql.png", "/icons/mysql.png",
  "/icons/numpy.png", "/icons/pandas.png", "/icons/scikit-learn.png", "/icons/tensorflow.png",
  "/icons/pytorch.png", "/icons/langchain.png", "/icons/langgraph.png", "/icons/streamlit.png",
  "/icons/jupyter.png", "/icons/powerbi.png", "/icons/pycharm.png", "/icons/ollama.png",
  "/icons/claude.png", "/icons/chatgpt.png", "/icons/n8n.png",
];

// Duplicated so the track can loop seamlessly (animate 0% -> -50%, then it
// snaps invisibly back to a position that looks identical to the start).
const COLUMN = [...ICONS, ...ICONS];

export default function SceneBackground() {
  return (
      <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="scene-col scene-col-left absolute top-0 flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
          {COLUMN.map((src, i) => (
              <div
                  key={`l-${src}-${i}`}
                  className="scene-icon pointer-events-auto relative h-5 w-5 opacity-60 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9"
              >
                <Image src={src} alt="" fill sizes="36px" className="object-contain" />
              </div>
          ))}
        </div>

        <div className="scene-col scene-col-right absolute top-0 flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
          {COLUMN.map((src, i) => (
              <div
                  key={`r-${src}-${i}`}
                  className="scene-icon pointer-events-auto relative h-5 w-5 opacity-60 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9"
              >
                <Image src={src} alt="" fill sizes="36px" className="object-contain" />
              </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper/70" />

        <style jsx>{`
          .scene-col {
            width: 40px;
            will-change: transform;
          }
          /* Below xl there's no room to hug the 1024px content column without
             overlapping it, so both columns sit near the viewport edge instead.
             From xl up, there's enough width that hugging the content edge
             looks intentional rather than cramped. */
          .scene-col-left {
            left: 2%;
            animation: scrollUp 60s linear infinite;
          }
          .scene-col-right {
            right: 2%;
            animation: scrollDown 60s linear infinite;
          }
          @media (min-width: 1280px) {
            .scene-col-left {
              left: calc(50% - 576px);
            }
            .scene-col-right {
              right: calc(50% - 576px);
            }
          }
          @keyframes scrollUp {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }
          @keyframes scrollDown {
            from { transform: translateY(-50%); }
            to { transform: translateY(0); }
          }
          .scene-icon {
            transition: transform 0.2s ease, opacity 0.2s ease;
          }
          .scene-icon:hover {
            transform: scale(1.15);
            opacity: 0.85;
          }
        `}</style>
      </div>
  );
}