import WritingClient from "./writing-client";

export const metadata = {
  title: "Writing - Elvis Anselm",
  description: "Technical writing by Elvis Anselm covering AI, prompt engineering, RAG systems, and developer best practices. From blockchain to AI engineering insights.",
  openGraph: {
    title: "Writing - Elvis Anselm", 
    description: "Technical writing by Elvis Anselm covering AI, prompt engineering, RAG systems, and developer best practices. From blockchain to AI engineering insights.",
  },
};

export const dynamic = 'force-dynamic';

export default function WritingPage() {
  return <WritingClient />;
}