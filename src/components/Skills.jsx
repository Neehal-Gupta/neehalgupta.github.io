import React from 'react'

const skills = {
  Languages: ['Core Java', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  Frameworks: ['Spring Framework', 'React (Basics)'],
  Tools: ['Docker', 'Kubernetes', 'Kafka', 'PostgreSQL', 'Git', 'Jenkins', 'Maven'],
  Others: ['CI/CD', 'TDD', 'Mockito', 'Unix', 'Generative AI', 'Prompt Engineering']
}

export default function Skills() {
  return (
    <section id="skills">
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className="p-4 border rounded-lg bg-white dark:bg-slate-800">
            <h4 className="font-semibold mb-2">{cat}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map(s => <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
