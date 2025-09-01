"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsClient() {
  return (
    <div>
      <Navbar />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of AI tools and web applications that showcase my technical skills.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.slug} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
