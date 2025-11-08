import React from 'react'

export default function Experience() {
  return (
    <section id="experience">
      <h3 className="text-2xl font-semibold mb-4">Experience</h3>
      <div className="space-y-6">
        <article className="p-6 border rounded-lg bg-white dark:bg-slate-800 shadow-sm">
          <header className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold">Genpact — Backend Developer</h4>
              <p className="text-sm text-slate-500">August 2022 - Present</p>
            </div>
            <div className="text-sm text-slate-600">Bronze Award (2023)</div>
          </header>

          <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Managed an application with 2,000+ users and delivered 20+ features, improving performance by 30%.</li>
            <li>Designed a savings idea management platform adopted by 10+ business units (end-to-end).</li>
            <li>Automated a pivotal module saving $42,000 and reducing defects by 25%.</li>
            <li>Optimized codebase leading to 10% performance improvement and supported 5+ microservices.</li>
            <li>Mentored junior developers and authored technical documentation improving cross-team understanding.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
