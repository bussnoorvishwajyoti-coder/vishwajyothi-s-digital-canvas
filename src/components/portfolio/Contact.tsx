import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="relative glass rounded-3xl p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full gradient-bg opacity-30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[var(--glow-2)] opacity-20 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <p className="font-mono text-sm text-[var(--glow)] mb-3">// contact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Let's build something <span className="gradient-text">great</span> together.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm open to internships, full-time roles, and freelance
              collaborations. Drop a message — I reply quickly.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="mailto:bussnoorvishwajyoti@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-medium glow-shadow hover:opacity-95 transition"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/vishwajyothi-busanoor-43265427a"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:bg-secondary/60 transition"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/bussnoorvishwajyoti-coder"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:bg-secondary/60 transition"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-[var(--glow)]">→</span>{" "}
              bussnoorvishwajyoti@gmail.com
            </div>
          </div>
        </div>
        <footer className="text-center text-sm text-muted-foreground mt-16">
          © {new Date().getFullYear()} Vishwajyothi · Built with React & Tailwind
        </footer>
      </div>
    </section>
  );
}
