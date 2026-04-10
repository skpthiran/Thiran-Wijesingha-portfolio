import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight, Code2, Terminal } from "lucide-react";
import { Cursor } from "./components/Cursor";
import { Marquee } from "./components/Marquee";
import { useRef } from "react";

const customEasing = [0.76, 0, 0.24, 1];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="bg-bg text-ink min-h-screen selection:bg-accent selection:text-bg">
      <Cursor />

      {/* SECTION 1: THE HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10">
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
          <div className="font-mono text-xs tracking-widest uppercase opacity-70">
            SYS.INIT // 2025
          </div>
          <div className="flex items-center gap-2 border border-accent/30 px-3 py-1 rounded-full">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
              Available for Internships
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: customEasing }}
            className="w-full"
          >
            <Marquee
              text="THIRAN THIRAN THIRAN THIRAN"
              direction="left"
              speed={25}
              className="font-display text-[15vw] leading-[0.8] tracking-tighter text-outline-accent hover-trigger"
            />
            <Marquee
              text="WIJESINGHA WIJESINGHA WIJESINGHA"
              direction="right"
              speed={30}
              className="font-display text-[15vw] leading-[0.8] tracking-tighter hover-trigger"
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-end pb-8 z-10">
          <div className="col-span-1 md:col-span-2 max-w-xl overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: customEasing }}
              className="font-mono text-sm md:text-base leading-relaxed opacity-80"
            >
              Computer Science undergraduate passionate about full-stack development, AI, and building products that actually matter.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: customEasing }}
            className="flex flex-col items-start md:items-end gap-6"
          >
            <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-right">
              <div>
                <div className="text-accent text-xl font-bold mb-1">4+</div>
                <div className="opacity-50">Projects</div>
              </div>
              <div>
                <div className="text-accent text-xl font-bold mb-1">2+</div>
                <div className="opacity-50">Years</div>
              </div>
              <div>
                <div className="text-accent text-xl font-bold mb-1">10+</div>
                <div className="opacity-50">Skills</div>
              </div>
            </div>
            <button
              onClick={scrollToContact}
              className="hover-trigger group flex items-center gap-3 bg-ink text-bg px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300"
            >
              Initialize Contact
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE MANIFESTO */}
      <section className="py-32 border-t border-ink/10 relative">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-[0.8] mb-6">
                The <br />
                <span className="text-accent">Manifesto</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="overflow-hidden mb-16">
                <motion.p 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: customEasing }}
                  className="font-mono text-base md:text-lg leading-relaxed opacity-90"
                >
                  I'm Thiran Wijesingha, a Computer Science undergraduate at IIT (University of Westminster). I'm passionate about building clean, scalable software — from full-stack web applications to AI-powered systems. I thrive in collaborative environments, enjoy tackling real-world problems through code, and I'm always looking for opportunities to push my skills into professional territory. My work spans backend APIs, cloud deployment, and modern frontend interfaces. Outside of code, I led my school's Chess team as Captain, represented in Volleyball and Scouting — discipline and teamwork are at my core.
                </motion.p>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-ink/20 before:to-transparent">
                {[
                  {
                    degree: "BSc (Hons) Computer Science",
                    inst: "IIT — University of Westminster",
                    date: "Sept 2024 — Present"
                  },
                  {
                    degree: "Foundation in Computer Science",
                    inst: "Informatics Institute of Technology",
                    date: "Jan 2024"
                  },
                  {
                    degree: "G.C.E. Ordinary Level (SINHALA MEDIUM)",
                    inst: "Rahula college - Matara",
                    date: "Apr 2023"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: customEasing }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-bg bg-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] border border-ink/10 p-6 bg-bg/50 backdrop-blur-sm hover:border-accent/50 transition-colors">
                      <div className="font-mono text-xs text-accent mb-2">{item.date}</div>
                      <h3 className="font-mono font-bold text-sm uppercase mb-1">{item.degree}</h3>
                      <div className="font-mono text-xs opacity-60">{item.inst}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE ARSENAL */}
      <section className="py-32 border-t border-ink/10 bg-ink text-bg">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-[0.8]">
              The <br /> Arsenal
            </h2>
            <Terminal className="w-12 h-12 opacity-20 mt-6 md:mt-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bg/20 border border-bg/20">
            {[
              { title: "Languages", items: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"] },
              { title: "Frameworks", items: ["React.js", "Node.js", "Next.js", "Spring Boot", "Vite", "Tailwind CSS", "REST APIs", "JWT Auth"] },
              { title: "Databases & Cloud", items: ["MySQL", "Supabase (pgvector)", "AWS EC2", "Vercel", "AI Agents", "Basic ML"] },
              { title: "Tools", items: ["Git", "GitHub", "VS Code", "IntelliJ", "ClickUp", "Figma"] }
            ].map((category, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: customEasing }}
                className="bg-ink p-8 hover:bg-bg hover:text-ink transition-colors duration-500 group"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-8 group-hover:text-accent group-hover:opacity-100 transition-colors">
                  // {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, j) => (
                    <span 
                      key={j} 
                      className="font-mono text-sm border border-current px-3 py-1 uppercase tracking-tight"
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

      {/* SECTION 4: THE WORK */}
      <section className="py-32 border-t border-ink/10 overflow-hidden">
        <div className="container mx-auto px-8 mb-16">
          <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-[0.8]">
            The <br /> Work
          </h2>
        </div>

        <div className="w-full border-t border-ink/10">
          {[
            {
              title: "Echo",
              year: "2026",
              status: "Active",
              type: "Startup Project — Social Media Platform",
              desc: "Next-generation social platform built as part of the Sorrel ecosystem. Engineered with a unified monorepo architecture, integrating AI agents and semantic search capabilities.",
              stack: "React.js, Vite, Tailwind CSS, Supabase pgvector, AI Agents.",
              link: "https://skpthiran.github.io/Echo/"
            },
            {
              title: "Cloth Street",
              year: "2025",
              status: "Active",
              type: "Team Project — E-Commerce Platform",
              desc: "Full-stack clothing e-commerce platform built as a university project. Features JWT authentication, product management, and a responsive React storefront backed by Spring Boot APIs.",
              stack: "React.js, Spring Boot, MySQL, JWT, REST API"
            },
            {
              title: "Aura App",
              year: "2025",
              status: "Active",
              type: "Team Project — Social Discovery Platform",
              desc: "A social platform connecting users through shared interests and activities. Built matchmaking logic, activity feeds, and user profile systems with a Node.js backend and React frontend.",
              stack: "React.js, Node.js, MySQL, REST API"
            },
            {
              title: "Personal Portfolio",
              year: "2025",
              status: "Completed",
              type: "Individual Project — Frontend",
              desc: "Responsive portfolio website showcasing projects and skills with clean UI design, smooth navigation, and modern layout principles built entirely in React.js.",
              stack: "React.js, CSS"
            }
          ].map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: customEasing }}
              className="group relative border-b border-ink/10 hover:bg-ink hover:text-bg transition-colors duration-500 hover-trigger"
            >
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <span className="font-display text-[25vw] leading-none text-outline select-none group-hover:text-outline-accent">
                  {project.year}
                </span>
              </div>
              
              <div className="container mx-auto px-8 py-12 md:py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest">
                      <span className="text-accent">{project.year}</span>
                      <span className="opacity-50">//</span>
                      <span className={project.status === 'Active' ? 'text-accent animate-pulse' : 'opacity-50'}>{project.status}</span>
                    </div>
                    <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="font-mono text-xs uppercase tracking-widest opacity-50 mb-4">
                      {project.type}
                    </div>
                    <p className="font-mono text-sm md:text-base leading-relaxed opacity-90">
                      {project.desc}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-3 flex flex-col lg:items-end gap-6">
                    <div className="font-mono text-xs uppercase tracking-widest opacity-50 lg:text-right">
                      Stack
                      <div className="mt-2 text-current opacity-100 font-bold leading-relaxed">
                        {project.stack}
                      </div>
                    </div>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-accent group-hover:text-ink group-hover:border-accent transition-all duration-300"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    ) : (
                      <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-accent group-hover:text-ink group-hover:border-accent transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CREDENTIALS */}
      <section className="py-32 border-t border-ink/10">
        <div className="container mx-auto px-8">
          <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-[0.8] mb-16">
            Credentials
          </h2>
          
          <div className="flex flex-col gap-4">
            {[
              { title: "Foundation in Computer Science", inst: "Informatics Institute of Technology (IIT)", year: "2024" },
              { title: "Microsoft Security Essentials", inst: "LinkedIn Learning", year: "2025" }
            ].map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: customEasing }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 border border-ink/20 hover:border-accent transition-colors group hover-trigger bg-bg"
              >
                <div className="flex flex-col gap-2 mb-4 md:mb-0">
                  <h3 className="font-mono font-bold text-sm md:text-base uppercase tracking-tight group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-widest opacity-60">
                    {cert.inst}
                  </div>
                </div>
                <div className="font-display text-4xl text-outline group-hover:text-outline-accent transition-all">
                  {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: THE FOOTER */}
      <footer id="contact" className="min-h-[80vh] bg-ink text-bg flex flex-col justify-between pt-32 pb-8 relative overflow-hidden">
        <div className="container mx-auto px-8 flex-1 flex flex-col justify-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="flex flex-col gap-8">
              <p className="font-mono text-lg md:text-xl leading-relaxed opacity-90 max-w-lg">
                I'm actively looking for internship opportunities in software engineering and full-stack development. Whether you have a project, a role, or just want to chat — feel free to reach out.
              </p>
              
              <div className="flex flex-col gap-4 font-mono text-sm uppercase tracking-widest">
                <a href="https://github.com/skpthiran" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors w-fit hover-trigger flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4" /> github.com/skpthiran
                </a>
                <a href="mailto:skpthiran@gmail.com" className="hover:text-accent transition-colors w-fit hover-trigger flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4" /> skpthiran@gmail.com
                </a>
                <a href="tel:+94787283974" className="hover:text-accent transition-colors w-fit hover-trigger flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4" /> +94 787 283 974
                </a>
              </div>
            </div>
            
            <div className="bg-bg text-ink p-8 border border-ink/10">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest opacity-50">Name</label>
                  <input type="text" className="bg-transparent border-b border-ink/20 py-2 font-mono text-sm focus:outline-none focus:border-accent transition-colors hover-trigger" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest opacity-50">Email</label>
                  <input type="email" className="bg-transparent border-b border-ink/20 py-2 font-mono text-sm focus:outline-none focus:border-accent transition-colors hover-trigger" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest opacity-50">Message</label>
                  <textarea rows={3} className="bg-transparent border-b border-ink/20 py-2 font-mono text-sm focus:outline-none focus:border-accent transition-colors resize-none hover-trigger" placeholder="Let's build something..." />
                </div>
                <button className="bg-ink text-bg font-mono text-xs font-bold uppercase tracking-widest py-4 mt-4 hover:bg-accent hover:text-ink transition-colors hover-trigger">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden relative z-10 mb-8">
          <h2 className="font-display text-[22vw] leading-[0.75] tracking-tighter text-center whitespace-nowrap text-bg" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
            LET'S TALK
          </h2>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="border-t border-bg/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs uppercase tracking-widest opacity-50">
            <div>Designed & built by Thiran Wijesingha</div>
            <div className="flex gap-4">
              <span>2026</span>
              <span>·</span>
              <span>Sri Lanka</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
