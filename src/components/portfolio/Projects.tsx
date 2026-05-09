import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "Frontend" | "Full Stack";
  demo: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Kodflixx",
    description:
      "A Netflix-inspired streaming UI showcasing dynamic content rows, smooth transitions, and a polished cinematic experience.",
    tech: ["React", "JavaScript", "CSS"],
    category: "Frontend",
    demo: "https://kodflixx-gamma.vercel.app",
  },
  {
    title: "Resume Builder",
    description:
      "An interactive resume builder that lets users generate professional resumes from clean, customizable templates.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    demo: "https://resume-building-psi.vercel.app",
  },
  {
    title: "Placement Readiness",
    description:
      "A platform helping students prepare for placements with curated resources, progress tracking, and practice modules.",
    tech: ["React", "Node.js", "MySQL"],
    category: "Full Stack",
    demo: "https://palcement-readinesss.vercel.app",
  },
];

const filters = ["All", "Frontend", "Full Stack"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-[var(--glow)] mb-3">// projects</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Selected <span className="gradient-text">work</span>
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === f
                    ? "gradient-bg text-primary-foreground glow-shadow"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <article
              key={p.title}
              className="glass rounded-2xl p-6 hover-lift flex flex-col group relative overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px gradient-bg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="aspect-[16/10] rounded-xl mb-5 relative overflow-hidden border border-border">
                <div className="absolute inset-0 gradient-bg opacity-30" />
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold gradient-text">
                    {p.title}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-[var(--glow-2)] mb-2">
                {p.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-primary-foreground text-sm font-medium hover:opacity-90"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium hover:bg-secondary/60"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
