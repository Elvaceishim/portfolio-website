export const projects = [
  {
    slug: "ai-video-summary",
    title: "AI Video Summary",
    stack: ["Netlify Functions", "Whisper.cpp", "AssemblyAI", "OpenRouter", "React", "Tailwind"],
    category: "AI",
    summary: "Upload. Transcribe. Generate a poetic, bullet summary. Copy and download actions. Nicer video UI.",
    bullets: [
      "Built drag-drop video upload interface",
      "Integrated Whisper.cpp for audio transcription",
      "Connected OpenRouter for poetic text generation",
      "Added copy-to-clipboard functionality",
      "Designed custom video player controls"
    ],
    links: {
      repo: "https://github.com/Elvaceishim/ai-video-summarizer",
      live: "#"  // Placeholder
    },
    featured: true
  },
  {
    slug: "study-group-chat-mentor",
    title: "MentorAI",
    stack: ["React", "Supabase", "RLS", "Embeddings"],
    category: "AI",
    summary: "Discord-lite chat where @mentor replies with context. Messages saved with embeddings for later search.",
    bullets: [
      "Built real-time chat with Supabase subscriptions",
      "Implemented @mentor bot with contextual responses",
      "Added message embedding for semantic search",
      "Configured RLS for secure user data",
      "Created conversation history with search"
    ],
    links: {
      repo: "https://github.com/Elvaceishim/MentorAI",
      live: "#"  // Placeholder
    },
    featured: true
  },
  {
    slug: "footy-expert",
    title: "footy-expert",
    stack: ["Node", "Supabase/Postgres", "React"],
    category: "AI",
    summary: "Pipeline for match data, basic models, and a clean UI to view probabilities.",
    bullets: [
      "Built data pipeline for match statistics",
      "Created probability models for outcomes",
      "Designed dashboard for model performance",
      "Implemented Brier score evaluation metrics",
      "Built clean UI for probability visualization"
    ],
    links: {
      repo: "https://github.com/Elvaceishim/footy-expert",
      live: "#"  // Placeholder
    },
    featured: false
  }
];

export const featuredProjects = projects.filter(project => project.featured);
