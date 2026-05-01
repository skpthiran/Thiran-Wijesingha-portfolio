import { motion } from "motion/react";

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-auto mix-blend-difference"
    >
      <div className="text-ivory font-serif text-2xl font-bold tracking-tighter">
        TW.
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium text-ivory/70">
        <a href="#work" className="hover:text-ivory transition-colors">Work</a>
        <a href="#about" className="hover:text-ivory transition-colors">About</a>
        <a href="#stack" className="hover:text-ivory transition-colors">Stack</a>
        <a href="#contact" className="hover:text-ivory transition-colors">Contact</a>
      </div>
      
      <div>
        <a href="#contact" className="relative group overflow-hidden px-6 py-2.5 rounded-full border border-ivory/20 flex items-center justify-center text-sm uppercase tracking-widest font-medium transition-all hover:bg-ivory hover:text-obsidian">
          <span className="relative z-10">Let's Talk</span>
        </a>
      </div>
    </motion.nav>
  );
}
