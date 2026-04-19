import { useEffect, useState } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center tracking-wider md:tracking-widest px-4 lg:px-8 py-4 max-w-[1440px] mx-auto">
        <h1 className="text-base lg:text-lg font-bold">SANTIAGO</h1>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="text-muted text-sm font-mono whitespace-nowrap">
          {time}
        </div>
      </div>
    </header>
  );
}
