import React from "react";

export default function Experience() {
  const roles = [
    {
      title: "Lead Consultant",
      period: "October 2025 – Present",
      achievements: [""],
      points: [
        "Leading backend development and architecture for enterprise applications.",
        "Driving best practices across Java, Spring Boot, microservices, and cloud deployments.",
        "Mentoring team members and coordinating with cross-functional groups.",
        "Responsible for solutioning, code reviews, and high-level design decisions.",
      ],
    },
    {
      title: "Consultant",
      period: "August 2022 – September 2025",
      achievements: ["Bronze Award (2023)"],
      points: [
        "Managed an application with 2,000+ users and delivered 20+ features.",
        "Designed an idea management platform adopted by 10+ business units.",
        "Automated a pivotal module saving $42,000 and reducing defects by 25%.",
        "Optimized the codebase achieving 10% performance improvement.",
        "Mentored junior developers and authored documentation.",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-24 pt-8 pb-16">
      <h3 className="text-2xl font-semibold mb-8">Experience</h3>

      {/* 🔥 SINGLE COMPANY CARD */}
      <article className="p-8 border rounded-xl bg-white dark:bg-slate-800 shadow-lg">

        {/* Company Header */}
        <header className="flex items-center gap-4 mb-6">
          <img
            src="/logos/genpact.png"
            alt="Genpact logo"
            className="w-20 h-12 object-contain"
            // width="70rem"
            // style=""
          />
          <div>
            <h4 className="text-xl font-bold">Genpact</h4>
            <p className="text-xs text-slate-500">August 2022 – Present</p>
          </div>
        </header>

        {/* Timeline Container */}
        <div className="relative pl-10">

          {/* Vertical Line (auto-stretches) */}
          <div className="timeline-line"></div>

          <div className="space-y-12">
            {roles.map((role, index) => (
              <div key={index} className="relative">

                {/* Dot */}
                <div className="timeline-dot"></div>

                {/* Role Section */}
                <div>
                  <div className="flex justify-between items-center">
                    <h5 className="text-lg font-semibold">{role.title}</h5>
                    {role.achievements.length > 0 && (
                      <p className="text-sm text-indigo-600 font-semibold">
                        {role.achievements.join(" • ")}
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-slate-500">{role.period}</p>

                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    {role.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
