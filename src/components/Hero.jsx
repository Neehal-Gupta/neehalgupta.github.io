import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import TypedHeading from "./TypedHeading";

export default function Hero() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  return (
    <section id="hero" className="max-w-6xl mx-auto px-4 py-12 flex flex-col sm:flex-row items-center gap-8">
      <div className="flex-shrink-0">
        <img
          src="https://github.com/Neehal-Gupta.png"
          alt="Neehal Raj Gupta"
          className="w-40 h-40 rounded-full shadow-2xl object-cover border-4 border-white dark:border-slate-700"
        />
      </div>

      <div className="flex-1">
        <TypedHeading
          lines={[
            "Neehal Raj Gupta",
            "Software Engineer — Java, Cloud & Generative AI",
            "I build production-ready web & cloud applications"
          ]}
        />

        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
          Experienced in building cloud-native applications and implementing AI-powered solutions. I focus on clean code, scalable systems and fast iteration.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="/NeehalRajGupta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
          >
            View Resume
          </a>

          {/* <a
            href="#certifications"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
          >
            View Certifications
          </a> */}
        </div>
      </div>

      {/* <div className="ml-auto flex items-start gap-3">
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 transition transform hover:scale-105"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div> */}
    </section>
)
}
