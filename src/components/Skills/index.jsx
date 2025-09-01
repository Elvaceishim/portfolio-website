"use client";

import { motion } from "framer-motion";
import { Brain, Code, FileText } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Data",
    icon: Brain,
    skills: [
      "Prompt engineering",
      "embeddings",
      "RAG basics",
      "evaluation (Brier, log loss)",
      "Whisper",
      "OpenRouter"
    ]
  },
  {
    title: "Web",
    icon: Code,
    skills: [
      "React",
      "Next.js", 
      "Node",
      "Supabase/Postgres",
      "Tailwind",
      "Netlify/Vercel"
    ]
  },
  {
    title: "Strengths from Writing",
    icon: FileText,
    skills: [
      "Clear docs",
      "clean UX copy",
      "fast research",
      "structured thinking"
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of technical capabilities and communication strengths that help me build and explain AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
