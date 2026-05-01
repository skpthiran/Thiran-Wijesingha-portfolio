import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-charcoal relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ivory/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ivory/10 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Left: Typography Focus */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-6 block">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-[1.3] tracking-tight text-ivory mb-8">
            I’m Thiran Wijesingha, a Computer Science undergraduate passionate about building full-stack digital products that combine strong engineering with visual quality and user impact.
          </h2>
          <p className="text-ivory/60 text-lg leading-relaxed font-light mb-10">
            I enjoy transforming ideas into polished experiences, and I’m especially drawn to products that feel modern, useful, and memorable. My work blends product thinking, frontend sensitivity, backend execution, and AI-assisted development workflows.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="h-px w-8 bg-gold mb-4"></div>
              <p className="text-sm uppercase tracking-widest text-ivory/80 font-medium">Full-Stack<br/>Engineering</p>
            </div>
            <div>
              <div className="h-px w-8 bg-gold mb-4"></div>
              <p className="text-sm uppercase tracking-widest text-ivory/80 font-medium">Strong UI<br/>Product Taste</p>
            </div>
            <div>
              <div className="h-px w-8 bg-gold mb-4"></div>
              <p className="text-sm uppercase tracking-widest text-ivory/80 font-medium">AI-Assisted<br/>Workflows</p>
            </div>
            <div>
              <div className="h-px w-8 bg-gold mb-4"></div>
              <p className="text-sm uppercase tracking-widest text-ivory/80 font-medium">Fast Builder<br/>Mindset</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Structural / Visual element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-[400px] aspect-[3/4] relative group hidden md:block"
        >
          <div className="absolute inset-0 border border-ivory/10 transform translate-x-4 translate-y-4 rounded-xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div className="absolute inset-0 bg-obsidian rounded-xl overflow-hidden border border-ivory/20">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
            <div className="w-full h-full p-8 flex flex-col justify-between relative z-10">
              <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-2 font-mono">Location</p>
                <p className="text-ivory text-xl font-serif">Sri Lanka</p>
              </div>
            </div>
            {/* Visual Abstract */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200px] bg-gradient-to-r from-transparent via-gold/5 to-transparent rotate-45 blur-2xl"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
