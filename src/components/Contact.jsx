import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6"
    >
      <h3 className="text-2xl font-semibold">Get in Touch</h3>
      <p className="text-slate-600 dark:text-slate-300">
        I'm always open to interesting projects or opportunities. Reach out anytime!
      </p>

      <div className="flex justify-center gap-8 text-3xl">
        <a href="mailto:nrg9922@gmail.com" className="hover:text-indigo-600 transition">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://linkedin.com/in/neehal-raj-gupta-28027217b/" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/neehalrajgupta" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        📍 Hyderabad, India
      </p>
    </motion.section>
  )
}
