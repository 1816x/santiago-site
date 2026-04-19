import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import FadeIn from "./components/FadeIn.jsx";

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent-yellow border-t-transparent" />
        <p className="animate-pulse font-mono text-xl">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return <Loader />;

  return (
    <div className="grid-bg min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <main className="pt-16">
        <FadeIn><Hero /></FadeIn>
        <FadeIn><About /></FadeIn>
        <FadeIn><TechStack /></FadeIn>
        <FadeIn><Services /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Footer /></FadeIn>
      </main>
    </div>
  );
}
