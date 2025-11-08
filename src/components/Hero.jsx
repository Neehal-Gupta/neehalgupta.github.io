import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden
                 bg-gradient-to-br from-indigo-100 via-white to-purple-100
                 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800
                 transition-colors px-4 sm:px-6 lg:px-8"
    >
      {/* Soft overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 dark:from-slate-900/60 pointer-events-none"></div>

      {/* --- Text content --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            Neehal Raj Gupta
          </span>
        </h2>

        <p className="mt-4 text-lg md:text-xl text-slate-700 dark:text-slate-300">
          Software Engineer (Backend) — Java, Spring, Kubernetes, Kafka, and
          Docker. Passionate about building scalable systems and exploring
          modern DevOps practices.
        </p>

        <div className="mt-6 flex gap-4 flex-wrap">
          <a
            href="https://github.com/neehalrajgupta/portfolio/blob/main/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
          >
            View Resume
          </a>
          <a
            href="https://github.com/neehalrajgupta/portfolio/tree/main/certificates"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Certifications
          </a>
        </div>

        {/* --- Social Icons --- */}
        <div className="flex gap-6 mt-8 text-2xl text-slate-600 dark:text-slate-300">
          <a
            href="https://linkedin.com/in/neehal-raj-gupta-28027217b/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/neehalrajgupta"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:nrg9922@gmail.com" className="hover:text-indigo-600">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </motion.div>

      {/* --- Floating Image --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute right-8 top-8 z-20 hidden lg:block transform -translate-y-8"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
          alt="Developer illustration"
          className="w-56 h-56 rounded-full shadow-2xl object-cover border-4 border-white dark:border-slate-700"
        />
      </motion.div>
    </section>
  )
}
