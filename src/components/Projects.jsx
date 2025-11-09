// src/components/Projects.jsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Fetch your public repos dynamically from GitHub
    fetch('https://api.github.com/users/Neehal-Gupta/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(repo => !repo.fork && repo.description) // show only real repos
          .map(repo => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language
          }))
        setProjects(filtered)
      })
      .catch(err => console.error('Error fetching repos:', err))
  }, [])

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {project.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.language && (
                <span className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full">
                  {project.language}
                </span>
              )}
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs px-3 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-center text-gray-500 mt-10">Loading projects...</p>
      )}
    </section>
  )
}
