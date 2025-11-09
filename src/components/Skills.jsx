import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const skills = {
    "Programming Languages": ["Core Java", "TypeScript", "HTML", "CSS", "SQL"],
    "Frameworks & Libraries": ["Spring Framework", "React (Basics)"],
    "DevOps & Tools": [
      "Docker",
      "Kubernetes",
      "Kafka",
      "Git",
      "Jenkins",
      "Maven",
      "Unix",
    ],
    "Database Technologies": ["PostgreSQL"],
    "Testing Frameworks": ["Mockito"],
    "Development Practices": ["CI/CD", "TDD"],
    "AI": ["Generative AI", "Prompt Engineering"],
  };

  const toggleCategory = (category) => {
    // ✅ Only one open at a time
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 py-12 scroll-mt-20"
    >
      <h2 className="text-3xl font-bold mb-10 text-slate-800 dark:text-slate-100">
        Skills
      </h2>

      <div className="space-y-6">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex justify-between items-center px-5 py-4 bg-slate-100 dark:bg-slate-800 rounded-t-xl text-left"
            >
              <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {category}
              </span>
              {expandedCategory === category ? (
                <ChevronUp className="text-blue-500" />
              ) : (
                <ChevronDown className="text-slate-500" />
              )}
            </button>

            {/* Expandable Skills List */}
            <AnimatePresence initial={false}>
              {expandedCategory === category && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-5 pb-5"
                >
                  <div className="flex flex-wrap gap-3 mt-3">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
