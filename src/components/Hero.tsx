import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-charcoal rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/Thiran-Wijesingha-portfolio/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-3 px-4 py-1.5 rounded-full border border-ivory/10 bg-ivory/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest font-medium text-ivory/80">
              Open to internships
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-serif font-medium tracking-tight text-ivory"
          >
            Building AI systems with{" "}
            <span className="text-gold italic pr-2">production depth</span> — not
            demos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, overflow: "hidden" }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-ivory/60 max-w-2xl leading-relaxed font-light"
          >
            I'm Thiran Wijesingha, a Computer Science undergraduate and
            full-stack developer focused on building visually impressive,
            functional, and user-centered digital products. I combine
            engineering, design sensitivity, and AI-assisted workflows to turn
            ideas into real experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#work"
              className="px-8 py-4 bg-ivory text-obsidian rounded-full font-medium tracking-wide transition-transform hover:scale-105 active:scale-95"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 relative group rounded-full font-medium tracking-wide text-ivory border border-ivory/20 transition-colors hover:border-ivory/50"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-ivory/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-ivory/10 w-full"
          >
            {[
              "Full-Stack Developer",
              "AI Product Builder",
              "Product Thinking",
              "Sri Lanka",
            ].map((badge, idx) => (
              <span
                key={idx}
                className="text-xs uppercase tracking-widest text-ivory/40 font-medium"
              >
                {badge}{" "}
                {idx !== 3 && <span className="mx-2 text-ivory/20">•</span>}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Portrait Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] mx-auto max-w-md lg:max-w-none group [perspective:1000px]"
        >
          {/* Decorative frame & glowing backplate */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-charcoal to-obsidian border border-ivory/5 transform rotate-2 group-hover:rotate-3 transition-all duration-700 ease-out group-hover:shadow-[0_0_50px_rgba(201,169,120,0.15)]"></div>
          <div className="absolute inset-0 rounded-[2rem] bg-gold/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>

          {/* Main portrait card with 3D tilt on hover */}
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-ivory/10 transform -rotate-1 group-hover:rotate-0 group-hover:[transform:rotateX(2deg)_rotateY(-4deg)] transition-all duration-700 ease-out bg-charcoal shadow-2xl">
            {/* The Image */}
            <img
              src="/Thiran-Wijesingha-portfolio/portrait.jpg"
              alt="Thiran Wijesingha"
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] origin-center transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-95 group-hover:brightness-105"
            />

            {/* Overlay Gradient for atmospheric blend & depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none"></div>

            {/* Light sweep effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent transform -translate-x-full group-hover:animate-[shimmer_2s_infinite] ease-in-out"></div>
            </div>

            {/* Spotlight glow that expands on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 mix-blend-overlay bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.2),transparent_60%)] transition-opacity duration-1000 pointer-events-none"></div>
          </div>

          {/* Floating elements */}
          <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-obsidian/90 border border-ivory/15 p-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-md transform group-hover:-translate-y-4 group-hover:-translate-x-2 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100">
            <div className="flex items-center space-x-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gold shadow-[0_0_10px_rgba(201,169,120,0.8)]"></span>
              </div>
              <p className="text-xs uppercase tracking-widest font-semibold text-ivory drop-shadow-sm">
                Ready to build
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
