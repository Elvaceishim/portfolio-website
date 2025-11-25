"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";

export default function AboutClient() {
  return (
    <div>
      <Navbar />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">
              From writing to AI/ML engineering
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg mx-auto"
          >
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-semibold mb-4">My Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I started my career as a professional writer, developing a keen eye for clear communication and user-focused content. When I discovered AI's potential to transform how we work, I knew I had to be part of that revolution.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My transition into the AI and Machine Learning space has been driven by a passion for building practical tools that solve real problems, leveraging a technology that is changing the world as we know it. I like rapid prototyping and shipping functional solutions quickly as I believe the best way to validate an idea is to get it into users' hands.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What sets me apart is my unique combination of technical skills and communication expertise. I can build the ML models and AI systems <em>and</em> explain them clearly to stakeholders. I thrive in fast-paced environments where I can make immediate impact.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-semibold mb-6">Experience</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">LightWork AI — Content Writer</h3>
                    <p className="text-muted-foreground">
                      Wrote technical content and UX copy for an agentic assistant. This sharpened my prompt style and model-first thinking.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">UmojaCoin — Content Manager</h3>
                    <p className="text-muted-foreground">
                      Turned complex fintech ideas into clear stories. Built playbooks that now inform my documentation style.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-semibold mb-4">Values & Approach</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Ship Fast</h3>
                    <p className="text-sm text-muted-foreground">
                      I prefer building working prototypes over perfect plans. Real usage teaches more than speculation.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Clear Communication</h3>
                    <p className="text-sm text-muted-foreground">
                      My writing background helps me create clear prompts, documentation, and user interfaces.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Practical AI</h3>
                    <p className="text-sm text-muted-foreground">
                      I focus on AI that solves real problems without requiring heavy infrastructure or complex setups.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">User-First</h3>
                    <p className="text-sm text-muted-foreground">
                      Every feature I build starts with understanding what users actually need, not what's technically possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <CTA />
    </div>
  );
}
