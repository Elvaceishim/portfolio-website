"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI tools and applications I've built from concept to deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.slug} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <CTA />
    </div>
  );
};

export default HomePage;
