import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 pt-4 pointer-events-none"
    >
      <div 
        className={`
          max-w-7xl mx-auto w-full flex items-center justify-between pointer-events-auto
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isScrolled 
            ? "bg-obsidian/60 backdrop-blur-xl border border-ivory/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)] rounded-full py-3 px-6 md:px-10" 
            : "py-6 px-4"
          }
        `}
      >
        <div className="text-ivory font-serif text-2xl font-bold tracking-tighter cursor-pointer hover:text-gold transition-colors duration-500">
          TW.
        </div>
        
        <nav className="hidden md:flex items-center space-x-12 text-[10px] uppercase tracking-[0.25em] font-bold text-ivory/40">
          {[["Work", "#work"], ["About", "#about"], ["Stack", "#stack"], ["Contact", "#contact"]].map(([label, href]) => (
            <a 
              key={label}
              href={href} 
              className="hover:text-gold transition-colors duration-500 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </nav>
        
        <div className="flex items-center">
          <a 
            href="#contact" 
            className={`
              relative group overflow-hidden rounded-full border flex items-center justify-center text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-700
              ${isScrolled 
                ? "px-6 py-2.5 border-gold bg-gold text-obsidian hover:shadow-[0_0_20px_rgba(201,169,120,0.3)]" 
                : "px-8 py-3 border-ivory/20 text-ivory hover:bg-ivory hover:text-obsidian"
              }
            `}
          >
            <span className="relative z-10">Let's Talk</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
