import { motion } from "framer-motion";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section id="services" className="page-section">
      <div className="flex flex-col gap-3 max-w-2xl mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Services <span className="text-accent-red">&amp;</span> Expertise
        </h2>
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          From concept to production. I handle the full cycle so you can focus
          on running your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card rounded-xl border border-border p-6 group hover:border-accent-red/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(139,0,0,0.1)]"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-red/10 border border-accent-red/20 flex items-center justify-center text-accent-red mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-base mb-2">{svc.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {svc.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {svc.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted border border-border rounded-full px-3 py-1 group-hover:border-accent-red/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
