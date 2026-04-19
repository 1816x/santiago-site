import { motion } from "framer-motion";
import { certifications, credlyUrl } from "../data/certifications.js";

const issuerColors = {
  "Universidad Tecmilenio": { bg: "rgba(202,138,4,0.1)", border: "rgba(202,138,4,0.3)", text: "#ca8a04" },
  "IBM SkillsBuild": { bg: "rgba(0,98,255,0.1)", border: "rgba(0,98,255,0.3)", text: "#0062ff" },
  IBM: { bg: "rgba(0,98,255,0.1)", border: "rgba(0,98,255,0.3)", text: "#0062ff" },
  Cisco: { bg: "rgba(4,156,219,0.1)", border: "rgba(4,156,219,0.3)", text: "#049cdb" },
  "Amazon Web Services": { bg: "rgba(247,168,13,0.1)", border: "rgba(247,168,13,0.3)", text: "#f7a80d" },
};

function AwardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

export default function Achieve() {
  return (
    <section className="page-section" id="achievements">
      <div className="flex flex-col gap-3 max-w-2xl mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Achievements <span className="text-accent-yellow">&amp;</span>{" "}
          <span className="text-accent-red">Certifications</span>
        </h2>
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          Formal credentials across cloud, development, networking, and data
          science.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, i) => {
          const colors = issuerColors[cert.issuer] || issuerColors["Universidad Tecmilenio"];
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-card rounded-xl border border-border p-5 hover:border-accent-yellow/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(202,138,4,0.1)]"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-medium text-sm leading-snug">
                  {cert.title}
                </h3>
                {cert.distinction && (
                  <span className="shrink-0 text-accent-yellow">
                    <AwardIcon />
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: colors.bg,
                    border: `1px solid ${colors.border}`,
                    color: colors.text,
                  }}
                >
                  {cert.issuer}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">{cert.date}</span>
                {cert.distinction && (
                  <span className="text-xs text-accent-yellow/80 font-medium">
                    {cert.distinction}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={credlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted border border-border rounded-lg px-5 py-2.5 hover:text-accent-yellow hover:border-accent-yellow/40 hover:bg-accent-yellow/5 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          View all badges on Credly
        </a>
      </div>
    </section>
  );
}
