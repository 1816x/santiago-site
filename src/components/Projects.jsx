import { motion } from "framer-motion";
import { projects } from "../data/projects.js";

function ExternalLink() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="page-section" id="projects">
      <div className="flex flex-col gap-3 max-w-2xl mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Featured <span className="text-accent-yellow">Projects</span>
        </h2>
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          A selection of recent builds across SaaS, automation, and client work.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border overflow-hidden group hover:border-accent-yellow/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(202,138,4,0.1)]"
          >
            {/* Placeholder image area */}
            <div className="aspect-video w-full overflow-hidden bg-background flex items-center justify-center">
              <div className="text-muted/30 text-6xl font-bold select-none">
                {project.title.charAt(0)}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted border border-border rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent-yellow transition-colors"
                  >
                    <ExternalLink /> Live Demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent-yellow transition-colors"
                  >
                    <ExternalLink /> Source
                  </a>
                )}
                {!project.demo && !project.repo && (
                  <span className="text-xs text-muted/50 italic">
                    Links coming soon
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
