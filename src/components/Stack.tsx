import { motion } from "motion/react";

const STACK = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Spring Boot", "JWT Authentication"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Supabase"]
  },
  {
    category: "Cloud / Tools",
    items: ["Cloudflare Workers", "Vercel", "Netlify", "GitHub", "Git", "Figma", "VS Code", "IntelliJ"]
  },
  {
    category: "AI & Workflows",
    items: ["AI-Assisted Development", "Prompt Engineering", "LLM Integrations", "Workflow Automation"]
  }
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 px-6 bg-charcoal border-t border-b border-ivory/5 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-4 text-ivory">Technical stack</h2>
            <p className="text-ivory/50 font-light max-w-md">The tools and technologies I use to bring ideas to life.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {STACK.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={index === 3 ? "lg:col-span-2" : ""}
            >
              <h3 className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-6 flex items-center">
                <span className="w-4 h-px bg-gold mr-3"></span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-full border border-ivory/10 text-ivory/80 text-sm font-medium hover:border-ivory/40 hover:text-ivory transition-colors cursor-default bg-obsidian/30 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
