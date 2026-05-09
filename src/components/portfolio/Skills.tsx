import { Code2, Server, Database, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Java", "Node.js"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-sm text-[var(--glow)] mb-3">// skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="glass rounded-2xl p-6 hover-lift group relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full gradient-bg opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <g.icon className="w-7 h-7 text-[var(--glow)] mb-4" />
              <h3 className="text-lg font-semibold mb-4">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
