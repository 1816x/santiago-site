import { coreConcepts, techStack } from "../data/tech.js";
import { techIcons } from "../data/techIcons.jsx";

export default function TechStack() {
  return (
    <section className="page-section" id="skills">
      <div className="flex flex-col gap-3 max-w-2xl mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Skills <span className="text-accent-red">&amp;</span> Tech Stack
        </h2>
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          Tools and technologies I use to ship production-ready products.
        </p>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 mb-8 hover:border-accent-red/40 hover:shadow-[0_4px_15px_rgba(139,0,0,0.05)] transition-all duration-300">
        <h3 className="font-semibold text-lg mb-4">Core Focus</h3>
        <div className="flex flex-wrap gap-3">
          {coreConcepts.map((c) => (
            <span
              key={c}
              className="text-sm text-muted border border-border rounded-full px-4 py-1.5 hover:bg-accent-red/10 hover:border-accent-red/40 hover:text-accent-red transition-all duration-300"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {techStack.map((t) => (
          <div
            key={t.name}
            className="w-24 h-24 flex flex-col justify-center items-center border border-border rounded-xl gap-2 bg-card hover:border-accent-yellow/40 hover:shadow-[0_4px_15px_rgba(202,138,4,0.1)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              {techIcons[t.name] || (
                <div
                  className="w-8 h-8 rounded-md"
                  style={{ backgroundColor: t.color + "22", border: `1px solid ${t.color}44` }}
                />
              )}
            </div>
            <p className="text-xs text-center leading-tight">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
