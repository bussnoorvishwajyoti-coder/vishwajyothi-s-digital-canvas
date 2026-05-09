import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-sm text-[var(--glow)] mb-3">// education</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Academic <span className="gradient-text">journey</span>
          </h2>
        </div>
        <div className="relative max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-px gradient-bg opacity-50" />
          <div className="relative pl-16">
            <div className="absolute left-0 top-2 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center glow-shadow">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="glass rounded-2xl p-6 hover-lift">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold">B.Tech</h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full gradient-bg text-primary-foreground">
                  Final Year
                </span>
              </div>
              <p className="text-muted-foreground mb-1">Sharnbasva University</p>
              <p className="text-sm text-muted-foreground">
                Building a strong foundation in software engineering, data
                structures, algorithms, and modern web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
