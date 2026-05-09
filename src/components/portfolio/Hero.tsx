import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const titles = [
  "Full Stack Developer",
  "React & Node.js Engineer",
  "Java Backend Developer",
  "Problem Solver",
];

export function Hero() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[idx % titles.length];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDel(false);
          setIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--glow)] opacity-20 blur-3xl glow-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[var(--glow-2)] opacity-20 blur-3xl glow-pulse" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm <span className="gradient-text">Vishwajyothi</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-mono mb-6 min-h-[2.5rem]">
            <span className="typing-cursor">{text}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Passionate about building scalable web applications and solving
            real-world problems with clean code and thoughtful design.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-medium glow-shadow hover:opacity-95 transition"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-secondary/60 transition"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary/40 transition"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
          <div className="flex items-center gap-5 mt-10 text-muted-foreground">
            <a
              href="https://github.com/bussnoorvishwajyoti-coder"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground hover:-translate-y-0.5 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishwajyothi-busanoor-43265427a"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground hover:-translate-y-0.5 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:bussnoorvishwajyoti@gmail.com"
              aria-label="Email"
              className="hover:text-foreground hover:-translate-y-0.5 transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="relative hidden md:block float">
          <div className="absolute inset-0 rounded-3xl gradient-bg blur-2xl opacity-40" />
          <div className="relative glass rounded-3xl p-6 font-mono text-sm">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
            </div>
            <pre className="text-muted-foreground leading-7">
{`const dev = {
  name: 'Vishwajyothi',
  role: 'Full Stack Dev',
  stack: ['React', 'Node',
          'Java', 'MongoDB'],
  learning: 'every day',
  coffee: true,
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
