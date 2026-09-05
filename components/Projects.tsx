"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const INITIAL_COUNT = 4;

export default function Projects() {
    const [active, setActive] = useState<Project | null>(null);
    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT);

    return (
        <section id="projects" className="border-b border-rule py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="mb-10 flex items-baseline justify-between">
                    <h2 className="font-serif text-2xl font-medium sm:text-3xl">Projects</h2>
                    <span className="font-mono text-sm text-inkfaint">github.com/SubhansuPradhan</span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    {visible.map((project, i) => (
                        <ProjectCard key={project.name} project={project} index={i} onExpandAction={setActive} />
                    ))}
                </div>

                {projects.length > INITIAL_COUNT && (
                    <button
                        type="button"
                        onClick={() => setExpanded((e) => !e)}
                        className="mt-8 rounded-sm border border-ink px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-paper"
                    >
                        {expanded ? "Show less" : `Show all`}
                    </button>
                )}
            </div>

            <ProjectModal project={active} onCloseAction={() => setActive(null)} />
        </section>
    );
}