import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "forge",
    title: "FORGE",
    category: "AI Brand Strategy Platform",
    description: "An AI-powered platform that helps users build their brand blueprint with strategic clarity, direction, and structured identity development.",
    tech: ["AI", "Branding", "Strategy", "Product Design"],
    link: "https://forge-7f8.pages.dev/",
    featured: true,
    visuals: {
      bgClass: "bg-gradient-to-br from-[#1a0f0a] via-obsidian to-obsidian group-hover:from-[#24130a] transition-colors duration-1000",
      accent: "text-orange-500 group-hover:text-orange-400 font-bold",
      decorations: (
        <div className="absolute inset-0 pointer-events-none overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* Base ember glow */}
          <div className="absolute left-[80%] top-[40%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-500/20 transition-colors duration-1000"></div>
          
          {/* Blueprint grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] opacity-30 group-hover:opacity-60 transition-opacity duration-1000 delay-100"></div>
          
          {/* Diagonal abstract schematic lines */}
          <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] border-l border-white/5 transform rotate-12 group-hover:rotate-[15deg] transition-transform duration-1000 flex gap-12">
             <div className="w-px h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-1000"></div>
             <div className="w-px h-full bg-gradient-to-b from-transparent via-orange-500/10 to-transparent mt-20 group-hover:translate-y-10 transition-transform duration-1000"></div>
          </div>
          
          {/* Soft mockup structural fragment */}
           <div className="absolute top-[25%] right-[10%] w-[350px] lg:w-[450px] h-[300px] bg-charcoal/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] shadow-orange-900/10 transform rotate-3 group-hover:rotate-6 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-1000 overflow-hidden mix-blend-plus-lighter">
             <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
               <div className="w-2 h-2 rounded-full bg-white/10"></div>
               <div className="w-2 h-2 rounded-full bg-white/10"></div>
             </div>
             <div className="p-8">
               <div className="h-6 w-32 border border-orange-500/20 rounded-md mb-6 bg-orange-500/5"></div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
               </div>
             </div>
           </div>
        </div>
      )
    }
  },
  {
    id: "sidequest",
    title: "SIDEQUEST",
    category: "AI-Powered Accountability Platform",
    description: "A premium accountability platform connecting users into focused 30-day mission pods. Includes AI coaching, daily check-ins, and shared progress mechanics to build consistency.",
    tech: ["React", "TypeScript", "Cloudflare Workers", "Supabase"],
    link: "https://sidequest-bm7.pages.dev/",
    featured: true,
    visuals: {
      bgClass: "bg-gradient-to-br from-[#1c1813] via-obsidian to-obsidian group-hover:from-[#262018] transition-colors duration-1000",
      accent: "text-amber-500 group-hover:text-amber-400 font-bold",
      decorations: (
        <div className="absolute inset-0 pointer-events-none overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* Base gold glow */}
          <div className="absolute right-[20%] top-[30%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-colors duration-1000"></div>
          
          {/* Abstract Progress Arcs */}
          <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 w-[300px] h-[300px] border border-amber-500/10 rounded-full group-hover:scale-110 transition-transform duration-1000 border-r-amber-500/30"></div>
          <div className="absolute right-[10%] top-1/2 transform -translate-y-1/2 w-[220px] h-[220px] border border-amber-500/5 rounded-full group-hover:scale-90 transition-transform duration-1000 border-t-amber-500/40"></div>
          
          {/* UI Fragment */}
          <div className="absolute bottom-[20%] right-[15%] w-[250px] p-4 bg-charcoal/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl transform -rotate-6 group-hover:-rotate-3 group-hover:-translate-y-6 transition-all duration-1000">
             <div className="flex justify-between items-center mb-4">
                <div className="h-2 w-16 bg-amber-500/30 rounded"></div>
                <div className="h-4 w-10 bg-white/10 rounded-full"></div>
             </div>
             <div className="space-y-2">
                <div className="h-8 bg-white/5 rounded-lg w-full flex items-center px-2"><div className="w-4 h-4 rounded border border-amber-500/50"></div></div>
                <div className="h-8 bg-white/5 rounded-lg w-full flex items-center px-2"><div className="w-4 h-4 rounded bg-amber-500/80"></div></div>
             </div>
          </div>
        </div>
      )
    }
  },
  {
    id: "vrsus",
    title: "VRSUS",
    category: "AI-Powered Comparison Web App",
    description: "An AI-driven photo battle platform where users upload two photos and receive a brutally honest, detailed AI verdict.",
    tech: ["React", "TypeScript", "Cloudflare Workers", "Supabase"],
    link: "https://7e0e8420.vrsus.pages.dev/",
    featured: false,
    visuals: {
      bgClass: "bg-gradient-to-br from-[#1a0f24] to-obsidian group-hover:from-[#251533] transition-colors duration-1000",
      accent: "text-purple-500 group-hover:text-purple-400 font-bold",
      decorations: (
        <div className="absolute inset-0 pointer-events-none overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* Base violet glow */}
          <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-fuchsia-500/20 group-hover:scale-110 transition-all duration-1000"></div>
          
          {/* Split Screen Motif */}
          <div className="absolute inset-0 flex transform -skew-x-12 scale-110 opacity-30 group-hover:opacity-50 transition-opacity duration-1000">
             <div className="w-1/2 h-full border-r border-fuchsia-500/20 bg-gradient-to-r from-transparent to-fuchsia-900/10"></div>
             <div className="w-1/2 h-full pl-8"><div className="w-full h-full bg-gradient-to-l from-transparent to-purple-900/10 border-l border-purple-500/20"></div></div>
          </div>

          {/* Versus Badges Fragment */}
          <div className="absolute top-[40%] right-[20%] w-12 h-12 bg-charcoal/80 backdrop-blur border border-white/10 rounded-full flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-1000 text-purple-400 font-serif italic font-bold">
            VS
          </div>
        </div>
      )
    }
  },
  {
    id: "echo",
    title: "ECHO",
    category: "Social Platform Concept",
    description: "A next-generation social platform centered around resonance, emotional connection, and meaningful interaction.",
    tech: ["React", "Tailwind CSS", "pgvector", "AI Agents"],
    link: "https://skpthiran.github.io/Echo/#invitation",
    featured: false,
    visuals: {
      bgClass: "bg-gradient-to-br from-[#0c141c] to-obsidian group-hover:from-[#111d29] transition-colors duration-1000",
      accent: "text-blue-400 group-hover:text-blue-300 font-bold",
      decorations: (
        <div className="absolute inset-0 pointer-events-none overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* Resonance Glow */}
          <div className="absolute right-[10%] bottom-[10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-400/20 transition-colors duration-1000"></div>
          
          {/* Concentric Resonance Waves */}
          <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] border border-blue-400/20 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute right-[0%] bottom-[0%] w-[200px] h-[200px] border border-blue-400/10 rounded-full group-hover:scale-[1.2] transition-transform duration-1000"></div>
          
          {/* Glass Card Fragment */}
          <div className="absolute top-[20%] left-[60%] w-48 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl transform rotate-12 group-hover:rotate-6 group-hover:-translate-y-4 transition-all duration-1000 shadow-xl p-4">
             <div className="w-8 h-8 rounded-full bg-blue-400/20 mb-3"></div>
             <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
             <div className="h-2 w-2/3 bg-white/5 rounded"></div>
          </div>
        </div>
      )
    }
  },
  {
    id: "aura",
    title: "AURA",
    category: "Real-Time Social Engine",
    description: "A social platform focused on real-time presence, live moments, and event-driven interaction.",
    tech: ["React", "Node.js", "MySQL", "REST APIs"],
    link: "https://aura-web-e50.pages.dev/",
    featured: false,
    visuals: {
      bgClass: "bg-gradient-to-br from-[#061c1b] to-obsidian group-hover:from-[#092928] transition-colors duration-1000",
      accent: "text-teal-400 group-hover:text-teal-300 font-bold",
      decorations: (
        <div className="absolute inset-0 pointer-events-none overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* Live map glow */}
          <div className="absolute right-[20%] top-[40%] w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] group-hover:bg-teal-400/20 transition-colors duration-1000"></div>
          
          {/* Dynamic pulse / map hints */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute top-[40%] right-[30%] w-4 h-4">
             <div className="absolute inset-0 bg-teal-400 rounded-full opacity-50 group-hover:animate-ping"></div>
             <div className="absolute inset-1 bg-teal-300 rounded-full"></div>
          </div>
        </div>
      )
    }
  },
  {
    id: "clothstreet",
    title: "Cloth Street",
    category: "E-Commerce Platform",
    description: "A full-stack clothing e-commerce platform with authentication, product management, and a responsive storefront experience.",
    tech: ["React", "Spring Boot", "MySQL", "JWT"],
    link: "https://clothstreet.xyz/",
    featured: false,
    visuals: {
      bgClass: "bg-gradient-to-br from-[#1c1c1c] to-obsidian group-hover:from-[#262626] transition-colors duration-1000",
      accent: "text-gray-300 group-hover:text-white font-bold",
      decorations: (
        <div className="absolute inset-0 pointer-events-none overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* Monochrome editorial mood */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent group-hover:from-white/10 transition-colors duration-1000"></div>
          
          {/* Product Grid Hint */}
          <div className="absolute right-[5%] bottom-[15%] w-[60%] h-[120%] border-l border-t border-white/5 transform rotate-6 flex flex-wrap group-hover:rotate-3 transition-transform duration-1000">
             <div className="w-1/2 h-1/2 border-r border-b border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent"></div>
             <div className="w-1/2 h-1/2 border-r border-b border-white/5"></div>
             <div className="w-1/2 h-1/2 border-r border-b border-white/5"></div>
          </div>
          
          {/* Subtle typography floating */}
          <div className="absolute top-[30%] right-[10%] text-[8rem] font-serif font-bold text-white/[0.02] transform -rotate-90 origin-right select-none group-hover:text-white/[0.04] transition-colors duration-1000">
             CS.
          </div>
        </div>
      )
    }
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 px-6 relative z-10 bg-obsidian">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-ivory/10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-4 text-ivory">Selected Work</h2>
            <p className="text-ivory/50 font-light max-w-md text-lg">A showcase of products I've engineered, designed, and deployed.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative block rounded-[2.5rem] overflow-hidden border border-ivory/[0.08] transform transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,1)] hover:border-ivory/[0.15] bg-charcoal ${
                project.featured ? "md:col-span-2 aspect-[4/5] md:aspect-[21/9]" : "col-span-1 aspect-[4/5] md:aspect-square"
              }`}
            >
              {/* Background & Atmosphere */}
              <div className={`absolute inset-0 ${project.visuals.bgClass}`}></div>
              
              {/* Added subtle grain overlay for cinema feel */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-1000"></div>
              
              {project.visuals.decorations}
              
              {/* Vignette & Content Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none group-hover:opacity-50 transition-opacity duration-1000"></div>
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent group-hover:from-obsidian/90 transition-colors duration-1000">
                
                {/* Top: Labels */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-3">
                    {project.featured && (
                      <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-ivory border border-white/10 w-fit shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                        Featured Product
                      </span>
                    )}
                    <span className={`text-xs uppercase tracking-widest ${project.visuals.accent} transition-colors duration-500 drop-shadow-md`}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Arrow Indicator */}
                  <div className="w-14 h-14 rounded-full border border-ivory/20 flex items-center justify-center backdrop-blur-xl bg-ivory/5 group-hover:bg-ivory group-hover:text-obsidian transition-all duration-700 transform group-hover:rotate-45 group-hover:scale-110 shadow-xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 relative z-10" />
                  </div>
                </div>

                {/* Bottom: Info */}
                <div className="transform transition-all duration-700 md:translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4 text-ivory tracking-tight group-hover:text-white transition-colors duration-500 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-ivory/70 text-base md:text-lg max-w-2xl font-light leading-relaxed mb-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-700 delay-100">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full border border-ivory/10 text-ivory/60 bg-obsidian/50 backdrop-blur-md group-hover:border-ivory/20 group-hover:text-ivory/90 transition-all duration-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cursor Spotlight Effect (Subtle CSS simulation) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-1000 bg-[radial-gradient(circle_800px_at_50%_0%,rgba(255,255,255,0.03),transparent)]"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
