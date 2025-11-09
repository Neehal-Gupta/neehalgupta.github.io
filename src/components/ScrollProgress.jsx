import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScroll(scrolled);
      setVisible(scrollTop > 50); // fade in after 50px
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[4px] z-[9999] transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 shadow-[0_0_6px_#6366f1]"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
