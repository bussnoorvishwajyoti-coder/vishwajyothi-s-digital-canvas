import { Code2, Rocket, Sparkles } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: "10+" },
  { icon: Rocket, label: "Tech Stacks", value: "8+" },
  { icon: Sparkles, label: "Years Coding", value: "3+" },
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-sm text-[var(--glow)] mb-3">// about me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting digital experiences that{" "}
            <span className="gradient-text">matter</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              I'm a Full Stack Developer with a deep passion for building
              elegant, scalable web applications. From responsive interfaces in
              React to robust backends in Java and Node.js, I love turning
              complex problems into simple, beautiful solutions.
            </p>
            <p>
              Currently pursuing my B.Tech at Sharnbasva University, I'm
              constantly exploring new technologies and refining my craft. My
              goal is to join a team where I can contribute meaningfully and
              keep growing as an engineer.
            </p>
            <p>
              When I'm not coding, you'll find me exploring open-source
              projects, sketching UI ideas, or learning something new about
              system design.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-6 hover-lift text-center"
              >
                <s.icon className="w-6 h-6 mx-auto mb-3 text-[var(--glow)]" />
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
