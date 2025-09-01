"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Github } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Open to Junior AI Engineer and Prompt Engineer roles.
          </p>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm looking for opportunities to apply my AI skills and writing background 
            to create meaningful tools and experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg gradient-primary text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors"
            >
              View all projects
            </Link>
          </div>
          
          <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:anselmelvis62@gmail.com"
              className="flex items-center hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              anselmelvis62@gmail.com
            </a>
            <a
              href="https://github.com/Elvaceishim"
              className="flex items-center hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
