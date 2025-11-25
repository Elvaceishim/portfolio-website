export const projects = [
  {
    slug: "Lagos-GAN-project",
    title: "Lagos-GAN-project",
    stack: ["Python", "Hugging Face"],
    category: "Machine Learning",
    summary: "Experimental ML project showcasing how GANs can power African-centered synthetic creativity.",
    bullets: [
      "Built two GAN pipelines (StyleGAN2-ADA and CycleGAN/CUT)",
      "Provided a live demo (Gradio) for public use",
      "Delivered a working demo and an article narrating my experience and what I've learnt"
    ],
    links: {
      repo: "https://github.com/Elvaceishim/Lagos-GAN-clean",
      live: "#"  // Placeholder
    },
    featured: true
  },
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
    slug: "Lagos Rent Predictor",
    title: "Lagos Rent Predictor",
    stack: ["Python", "Hugging Face"],
    category: "Machine Learning",
    summary: "Model that predicts the rental prices in the Lagos housing scene.",
    bullets: [
      "Built a Random Forest Regressor model to train the rental price predictions",
      "Built a Gradio UI for public use",
      "Delivered a working demo and an article narrating my experience and what I've learnt"
    ],
    links: {
      repo: "https://github.com/Elvaceishim/lagos_rent_predictor",
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
    slug: "Rain Predictor",
    title: "Rain Predictor",
    stack: ["Python", "Hugging Face"],
    category: "Machine Learning",
    summary: "Model that fetches daily weeather data (rain) for Lagos and/or other specific cities around Africa using Open-Meteo API and automating the full workflow via Bash + Makefile",
    bullets: [
      "This project demonstrates a clean, reproducible workflow for data automation — the same principles used in ML and DevOps pipelines.",
      "Predict whether it will rain in the next 6 hours from hourly observations.",
      "Built a Gradio UI for public use."
    ],
    links: {
      repo: "https://github.com/Elvaceishim/weather_data_fetcher",
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
