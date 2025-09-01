"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import PortfolioHome from "@/components/PortfolioHome";
import CTA from "@/components/CTA";
import NoSSR from "@/components/NoSSR";

const SimpleHomePage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Show minimal loading state during hydration
  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Elvis Anselm
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Junior AI Engineer & Prompt Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NoSSR fallback={<div className="h-16" />}>
        <Navbar />
      </NoSSR>
      
      <main>
        <NoSSR>
          <Hero />
        </NoSSR>
        
        <NoSSR>
          <Skills />
        </NoSSR>
        
        <NoSSR>
          <PortfolioHome />
        </NoSSR>
        
        <NoSSR>
          <CTA />
        </NoSSR>
      </main>
    </div>
  );
};

export default SimpleHomePage;
