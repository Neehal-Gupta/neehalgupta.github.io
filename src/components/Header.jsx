import React, { useState, useEffect } from 'react'

export default function Header() {
  // initialize state from current document class (set by index.html early script)
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // keep state in sync if other code changes document.documentElement directly
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const isNowDark = !document.documentElement.classList.contains('dark')
    if (isNowDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    setIsDark(isNowDark)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-white/70 dark:bg-slate-900/70 shadow-md py-2' : 'bg-white/90 dark:bg-slate-900/90 py-4'
      }`}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className={`font-bold text-indigo-600 transition-all ${scrolled ? 'text-lg' : 'text-xl'}`}>
          Neehal Raj Gupta
        </h1>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#experience" className="hover:text-indigo-600">Experience</a>
          <a href="#skills" className="hover:text-indigo-600">Skills</a>
          <a href="#education" className="hover:text-indigo-600">Education</a>
          <a href="#certifications" className="hover:text-indigo-600">Certifications</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>

        <button
          onClick={toggleTheme}
          className="ml-4 text-lg border rounded-full w-9 h-9 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition"
          title="Toggle dark/light mode"
        >
          {isDark ? (
            <i className="fa-solid fa-sun text-yellow-400"></i>
          ) : (
            <i className="fa-solid fa-moon text-slate-700"></i>
          )}
        </button>
      </div>
    </header>
  )
}
