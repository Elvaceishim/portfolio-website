import AboutClient from "./about-client";

export const metadata = {
  title: "About - Elvis Anselm",
  description: "Learn about Elvis Anselm's journey from professional writing to AI engineering. Experience with prompt engineering, RAG systems, and practical AI tools.",
  openGraph: {
    title: "About - Elvis Anselm",
    description: "Learn about Elvis Anselm's journey from professional writing to AI engineering. Experience with prompt engineering, RAG systems, and practical AI tools.",
  },
};

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return <AboutClient />;
}