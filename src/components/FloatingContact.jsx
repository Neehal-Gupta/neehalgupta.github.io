// src/components/FloatingContact.jsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      <a
        href="https://github.com/Neehal-Gupta"
        target="_blank"
        rel="noreferrer"
        className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow hover:scale-105 transition"
      >
        <Github size={18} />
      </a>

      <a
        href="https://www.linkedin.com/in/neehal-raj-gupta"
        target="_blank"
        rel="noreferrer"
        className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow hover:scale-105 transition"
      >
        <Linkedin size={18} />
      </a>

      <a
        href="mailto:neehal@example.com"
        className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow hover:scale-105 transition"
      >
        <Mail size={18} />
      </a>
    </div>
  );
}
