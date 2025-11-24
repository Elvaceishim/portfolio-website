# Elvis Anselm - Portfolio

A modern, AI-focused portfolio website showcasing Elvis Anselm's work as a Junior AI Engineer & Prompt Specialist.

## 🎯 Features

- **AI-First Positioning**: Highlights AI engineering skills, prompt specialization, and practical RAG implementations
- **Modern Design**: Clean, accessible UI with dark/light mode toggle
- **Performance Optimized**: Built with Next.js 15 App Router for fast loading
- **SEO Ready**: Complete metadata, Open Graph, and schema.org markup
- **Responsive**: Mobile-first design that works on all devices
- **Project Showcase**: Featured AI tools with filtering by category

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Deploy

#### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

#### Netlify
1. Run `npm run build`
2. Upload `.next` folder to Netlify
3. Set publish directory to `.next`

#### Other Platforms
1. Run `npm run build`
2. Upload build output to your hosting provider
3. Ensure Node.js support for SSR pages

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page
│   ├── projects/          # Projects listing page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── writing/           # Writing/blog page
├── components/            # React components
│   ├── Hero/              # Homepage hero section
│   ├── Navbar/            # Navigation with mobile menu
│   ├── ProjectCard/       # Project display cards
│   ├── Skills/            # Skills showcase
│   ├── CTA/               # Call-to-action section
│   └── ui/                # UI components (theme toggle, etc.)
├── data/                  # Static data
│   └── projects.js        # Project information
└── lib/                   # Utilities
    └── utils.js           # Helper functions
```

## 🎨 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Typography**: Geist Sans/Mono fonts
- **Deployment**: Optimized for Vercel, Netlify

## 🛠 Customization

### Adding New Projects

Edit `src/data/projects.js`:

```javascript
{
  slug: "project-slug",
  title: "Project Title",
  role: "Your Role",
  stack: ["Tech", "Stack"],
  category: "AI", // "AI" | "Web" | "Writing"
  summary: "Brief description",
  bullets: [
    "Short bullet point under 12 words",
    "Another achievement or feature"
  ],
  links: {
    repo: "https://github.com/...",
    live: "https://example.com"
  },
  featured: true // Show on homepage
}
```

### Updating Content

- **Hero Copy**: Edit `src/components/Hero/index.jsx`
- **About Content**: Edit `src/app/about/about-client.js`
- **Skills**: Edit `src/components/Skills/index.jsx`
- **Contact Info**: Edit `src/app/contact/contact-client.js`

### Theme Customization

Colors and spacing are defined in `tailwind.config.js` and `src/app/globals.css`.

## 🧪 Testing & Quality

```bash
# Run Playwright end-to-end tests
npm test

# Run tests with UI mode
npm test:ui

# Run Lighthouse audit (requires local server)
npm run audit
```

## 🎯 Performance

The site is optimized for:
- **Core Web Vitals**: Fast LCP, low CLS
- **SEO**: Semantic HTML, proper metadata
- **Accessibility**: WCAG 2.1 AA compliance
- **Bundle Size**: Minimal dependencies

## 📄 License

This project is for portfolio purposes. Feel free to use as inspiration but please don't copy directly.

---

Built with ❤️ by Elvis Anselm
