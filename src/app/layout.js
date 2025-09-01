import { Inter, JetBrains_Mono, Crimson_Text } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/FooterNew";

// Modern, but not AI-generic sans-serif for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Professional monospace for code
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Elegant serif for headings - gives personality
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata = {
  title: "Elvis Anselm - Junior AI Engineer & Prompt Specialist",
  description: "I build small, fast AI tools. I ship working demos. I write clear prompts and clearer code. Junior AI Engineer specializing in embeddings, RAG, and practical AI applications.",
  keywords: "AI Engineer, Prompt Engineering, RAG, Embeddings, React, Next.js, AI Tools",
  authors: [{ name: "Elvis Anselm" }],
  openGraph: {
    title: "Elvis Anselm - Junior AI Engineer & Prompt Specialist",
    description: "I build small, fast AI tools. I ship working demos. I write clear prompts and clearer code.",
    url: "https://elvis-anselm.com",
    siteName: "Elvis Anselm Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Anselm - Junior AI Engineer & Prompt Specialist",
    description: "I build small, fast AI tools. I ship working demos. I write clear prompts and clearer code.",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Elvis Anselm",
    "jobTitle": "Junior AI Engineer",
    "description": "AI Engineer specializing in prompt engineering, RAG systems, and practical AI applications",
    "url": "https://elvis-anselm.com",
    "sameAs": [
      "https://github.com/Elvaceishim"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Prompt Engineering", 
      "RAG Systems",
      "Embeddings",
      "React",
      "Next.js",
      "Python"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent hydration warnings from browser extensions
              if (typeof window !== 'undefined') {
                window.__NEXT_HYDRATE_CB = window.__NEXT_HYDRATE_CB || [];
                window.__NEXT_HYDRATE_CB.push(() => {
                  // Remove extension attributes that cause hydration mismatches
                  const body = document.body;
                  if (body) {
                    body.removeAttribute('data-new-gr-c-s-check-loaded');
                    body.removeAttribute('data-gr-ext-installed');
                    body.removeAttribute('data-gr-c-s-loaded');
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${crimsonText.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
