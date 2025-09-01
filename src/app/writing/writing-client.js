"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ExternalLink, Calendar } from "lucide-react";

const writingPieces = [
  // Add your real articles here using this format:
  // {
  //   title: "Article Title",
  //   description: "Brief description of the article content",
  //   category: "Technical" | "Career" | etc,
  //   date: "2024",
  //   url: "https://actual-url-here.com",
  //   tags: ["Tag1", "Tag2", "Tag3"]
  // }
];

export default function WritingClient() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Writing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical guides, career insights, and thoughts on building practical AI tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {writingPieces.length > 0 ? (
              writingPieces.map((piece, index) => (
                <motion.article
                  key={piece.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium">
                          {piece.category}
                        </span>
                        <span className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {piece.date}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {piece.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {piece.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {piece.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {piece.url !== "#" && (
                      <a
                        href={piece.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md hover:bg-accent transition-colors ml-4"
                        aria-label={`Read ${piece.title}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center p-12 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">
                  I'm working on publishing articles about AI engineering, prompt design, and technical insights. Check back soon!
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center p-8 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-2xl font-semibold mb-4">More Writing</h2>
            <p className="text-muted-foreground mb-6">
              I've written extensively about blockchain, fintech, and technical topics. 
              Looking to focus more on AI and prompt engineering content.
            </p>
            <p className="text-sm text-muted-foreground">
              * Some articles are in development and will be published soon.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
