export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center page-section">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-2">
        I&apos;m <span className="text-accent-yellow">Santiago</span>
      </h1>
      <p className="max-w-[700px] text-lg sm:text-xl text-muted leading-relaxed">
        Full-stack engineer from Mexico. I build SaaS products, automate
        business operations, and ship production-ready apps for clients who
        need things done right and fast.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all bg-white text-black hover:bg-neutral-200 h-11 px-8 py-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all bg-accent-yellow text-black hover:bg-accent-yellow-hover h-11 px-8 py-2 shadow-[0_0_15px_rgba(202,138,4,0.3)] hover:shadow-[0_0_20px_rgba(202,138,4,0.5)]"
        >
          Work With Me
        </a>
      </div>
    </section>
  );
}
