import { motion } from "motion/react";
import { Lightbulb, Code2, PenTool, Zap } from "lucide-react";

const TRAITS = [
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description: "I don't just write code; I think about the entire user journey. I optimize for retention, usability, and business value, ensuring the final product actually solves the core problem."
  },
  {
    icon: Code2,
    title: "Full-Stack Execution",
    description: "From designing database schemas to styling pixel-perfect frontends. I can build entire platforms from scratch and deploy them reliably using modern cloud architectures."
  },
  {
    icon: PenTool,
    title: "Visual Sensitivity",
    description: "I care deeply about aesthetics, typography, and motion. I believe a product's visual polish directly impacts its perceived trustworthiness and user satisfaction."
  },
  {
    icon: Zap,
    title: "Fast Builder Mindset",
    description: "I iterate quickly and ship fast without compromising on quality. I leverage AI tools to accelerate my workflow, allowing me to build robust applications in record time."
  }
];

export default function WhatIBring() {
  return (
    <section className="py-24 px-6 bg-obsidian">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-ivory mb-4">What I Bring</h2>
          <p className="text-ivory/50 font-light max-w-xl mx-auto">Why should someone hire me? Here are the core pillars of my approach to building products.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAITS.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-charcoal/50 border border-ivory/5 rounded-2xl p-8 hover:bg-charcoal transition-colors duration-500 group"
            >
              <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center bg-gold/5 mb-6 group-hover:scale-110 transition-transform duration-500">
                <trait.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-ivory mb-3">{trait.title}</h3>
              <p className="text-ivory/60 text-sm leading-relaxed font-light">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
