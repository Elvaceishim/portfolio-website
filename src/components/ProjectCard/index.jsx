"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div 
        data-testid="project-card"
        className="h-full p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-block px-2 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium mb-2">
              {project.category}
            </span>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground font-medium mb-2">
              {project.role}
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            {project.links.repo && project.links.repo !== "#" && (
              <Link
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors group"
                aria-label="View repository"
              >
                <Github className="h-4 w-4" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  click here
                </span>
              </Link>
            )}
            {project.links.live && project.links.live !== "#" && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors group"
                aria-label="View live demo"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  live demo
                </span>
              </Link>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-2">
          {project.bullets.slice(0, 3).map((bullet, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
