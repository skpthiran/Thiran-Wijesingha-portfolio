import { motion } from "motion/react";

const EDUCATION = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "Informatics Institute of Technology (IIT Sri Lanka), affiliated with the University of Westminster",
    year: "Present",
    active: true
  },
  {
    degree: "Foundation in Computer Science",
    institution: "Informatics Institute of Technology",
    year: "2024",
    active: false
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "Rahula College, Matara",
    year: "2023",
    active: false
  }
];

export default function Education() {
  return (
    <section className="py-24 px-6 bg-obsidian">
      <div className="container mx-auto max-w-4xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-6 block">Credentials</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-ivory">Education</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ivory/10 to-transparent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {EDUCATION.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-obsidian z-10 items-center justify-center bg-ivory">
                  {edu.active && <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>}
                </div>
                
                {/* Mobile Node */}
                <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-ivory z-10"></div>

                {/* Content */}
                <div className={`md:w-1/2 pl-6 md:pl-0 ${index % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right"}`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-widest font-bold mb-4 ${edu.active ? "bg-gold/10 text-gold border border-gold/20" : "bg-charcoal text-ivory border border-ivory/10"}`}>
                    {edu.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-ivory mb-2">{edu.degree}</h3>
                  <p className="text-ivory/50 font-light text-sm md:text-base leading-relaxed">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
