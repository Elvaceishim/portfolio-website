import ProjectsClient from "./projects-client";

export const metadata = {
  title: "Projects - Elvis Anselm",
  description: "ML models, AI tools, and technical projects by Elvis Anselm.",
  openGraph: {
    title: "Projects - Elvis Anselm",
    description: "ML models, AI tools, and technical projects by Elvis Anselm.",
  },
};

export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  return <ProjectsClient />;
}