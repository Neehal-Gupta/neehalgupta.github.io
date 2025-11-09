// src/components/TypedHeading.jsx
import { useEffect, useState } from "react";

export default function TypedHeading({ lines = [], speed = 60, pause = 800 }) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!lines.length) return;
    const currentLine = lines[lineIndex % lines.length];
    let timeout;

    if (!isDeleting && charIndex <= currentLine.length) {
      timeout = setTimeout(() => {
        setText(currentLine.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, speed);
    } else if (!isDeleting && charIndex > currentLine.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentLine.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, Math.max(30, speed / 1.5));
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setLineIndex(i => (i + 1) % lines.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [lines, charIndex, isDeleting, lineIndex, speed, pause]);

  return (
    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
      <span className="block text-slate-900 dark:text-slate-100">{text}</span>
      {/* <span className="inline-block w-1 h-6 bg-slate-900 dark:bg-slate-100 align-middle ml-1 animate-pulse" /> */}
    </h1>
  );
}
