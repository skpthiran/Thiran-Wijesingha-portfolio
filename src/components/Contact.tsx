import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-charcoal relative border-t border-ivory/5">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-6 block">Ready to build</span>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-medium tracking-tight leading-none text-ivory mb-10">
            Let's create something <span className="font-light italic text-ivory/80">exceptional.</span>
          </h2>
          
          <p className="text-ivory/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            I’m currently open to internships, collaborations, and opportunities where I can contribute, grow, and build impactful digital products.
          </p>

          <a 
            href="mailto:thiranwije123@gmail.com"
            className="inline-flex items-center justify-center space-x-3 bg-ivory text-obsidian px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-gold transition-colors duration-300 transform hover:scale-105 active:scale-95"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Decorative large TW watermark */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 text-[20vw] font-serif font-bold text-obsidian/40 pointer-events-none select-none z-0">
        TW.
      </div>
    </section>
  );
}
