"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-6">
        Get in touch for opportunities in AI Engineering and Prompt Engineering.
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Email</h3>
          <a href="mailto:anselmelvis62@gmail.com" className="text-blue-600 hover:underline">
            anselmelvis62@gmail.com
          </a>
        </div>
        <div>
          <h3 className="text-xl font-semibold">GitHub</h3>
          <a href="https://github.com/Elvaceishim" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            github.com/Elvaceishim
          </a>
        </div>
      </div>
    </div>
  );
}
