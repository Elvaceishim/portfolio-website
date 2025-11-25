"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-geist-sans mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Elvis Anselm
            </span>
          </h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
          >
            AI & ML Enthusiast
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I build small, fast AI tools. I ship working demos. I write clear prompts and clearer code.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg gradient-primary text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:-translate-y-0.5"
            >
              Hire me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors"
            >
              View projects
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-6 rounded-2xl bg-card border border-border"
        >
          <p className="text-sm text-muted-foreground font-medium">
            I build models that provide real-world solutions, and build AI tools with clean prompts and RAG basics that ship useful AI features without heavy infra.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
