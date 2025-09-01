"use client";

import { ThemeProvider } from "@/components/ui/theme-provider";

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      {children}
    </ThemeProvider>
  );
}
