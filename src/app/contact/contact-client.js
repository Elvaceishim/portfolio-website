"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Mail, Github } from "lucide-react";

export default function ContactClient() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "anselmelvis62@gmail.com",
      href: "mailto:anselmelvis62@gmail.com",
      description: "Best way to reach me for opportunities"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Elvaceishim",
      href: "https://github.com/Elvaceishim",
      description: "Check out my code and projects"
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open to Junior AI Engineer and Prompt Engineer roles. 
              Let's discuss how I can help your team build better AI tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={method.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-accent mr-4">
                    <method.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{method.label}</h3>
                    <p className="text-muted-foreground">{method.value}</p>
                  </div>
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-4">What I'm Looking For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-medium mb-2 text-foreground">Junior AI Engineer Roles</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Building RAG systems and embeddings</li>
                  <li>• Creating AI-powered tools and demos</li>
                  <li>• Working with modern AI APIs and models</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-foreground">Prompt Engineering Projects</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Optimizing prompts for better outputs</li>
                  <li>• Building prompt libraries and systems</li>
                  <li>• Technical writing about AI tools</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
