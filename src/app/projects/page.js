import ProjectsClient from "./projects-client";

export const metadata = {
  title: "Projects - Elvis Anselm",
  description: "AI tools, web applications, and technical projects by Elvis Anselm. Featuring RAG systems, embeddings, and practical AI implementations.",
  openGraph: {
    title: "Projects - Elvis Anselm",
    description: "AI tools, web applications, and technical projects by Elvis Anselm. Featuring RAG systems, embeddings, and practical AI implementations.",
  },
};

export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  return <ProjectsClient />;
}