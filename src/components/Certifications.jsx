import React from 'react'
import { motion } from 'framer-motion'

const certs = [
  { title: 'Oracle Certified Java Developer', url: 'https://github.com/neehalrajgupta/portfolio/blob/main/certificates/java-cert.pdf' },
  { title: 'Kubernetes Fundamentals', url: 'https://github.com/neehalrajgupta/portfolio/blob/main/certificates/kubernetes-cert.pdf' },
  { title: 'Generative AI & Prompt Engineering', url: 'https://github.com/neehalrajgupta/portfolio/blob/main/certificates/ai-cert.pdf' }
]

export default function Certifications() {
  return (
    <section id="certifications">
      <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            className="p-5 border rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition flex items-center gap-3"
          >
            <i className="fa-solid fa-award text-indigo-600 text-xl"></i>
            <div>
              <h4 className="font-semibold">{c.title}</h4>
              <p className="text-sm text-slate-500">View Certificate</p>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href="https://github.com/neehalrajgupta/portfolio/tree/main/certificates"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-indigo-600 hover:text-indigo-800"
        >
          View All on GitHub →
        </a>
      </div>
    </section>
  )
}
