export default function About() {
  return (
    <section className="page-section" id="about">
      <div className="flex flex-col gap-3 max-w-2xl mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          About<span className="text-accent-red">.</span>
        </h2>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 sm:p-8 hover:border-accent-red/40 hover:shadow-[0_4px_15px_rgba(139,0,0,0.05)] transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
          <div className="w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 rounded-xl bg-accent-yellow/10 border border-accent-yellow/20 flex items-center justify-center text-4xl sm:text-5xl font-bold text-accent-yellow shrink-0">
            S
          </div>
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug">
              Santiago
            </h3>
            <p className="text-muted text-sm sm:text-base mt-2">
              Freelance Full-Stack Engineer · Monterrey, Mexico
            </p>
            <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed max-w-2xl">
              I don&apos;t write code by hand anymore. I architect systems, prompt AI,
              and review the output. My workflow runs on Claude, and it lets me
              handle SaaS development, client work, and automation simultaneously.
              Stack-agnostic, but I default to TypeScript + Next.js when there&apos;s
              no strong reason to pick something else.
            </p>
            <p className="text-muted text-sm sm:text-base mt-3 leading-relaxed max-w-2xl">
              Currently building a multi-agent WhatsApp system for small businesses
              while studying at Universidad Tecmilenio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
