import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2024 - Present",
      description: "Leading frontend architecture and building scalable APIs."
    },
    {
      role: "Full-Stack Developer",
      company: "Web Labs",
      period: "2022 - 2024",
      description: "Maintained React-based dashboards and built internal service APIs."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const itemScrollVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.98, 
      filter: 'blur(6px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1]
      } 
    }
  };

  return (
    <div className="max-w-7xl mx-auto pt-10 pb-16 px-6 md:px-8 text-left">
      <motion.h1 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemScrollVariants}
        className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-white flex items-center gap-3"
      >
        <span className="h-8 w-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.85)]" />
        Work Experience
      </motion.h1>
      
      <div className="space-y-8 border-l border-accent-orange/20 pl-6">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={itemScrollVariants}
            className="relative group"
          >
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-orange border-4 border-primary-bg shadow-[0_0_8px_rgba(255,90,0,0.6)] group-hover:scale-110 transition-transform duration-300" />
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-accent-orange/10 text-accent-orange border border-accent-orange/25">
              {exp.period}
            </span>
            <h3 className="text-xl font-bold mt-2 text-neutral-900 dark:text-white">{exp.role}</h3>
            <h4 className="text-md text-accent-glow font-medium mb-2">{exp.company}</h4>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-2xl">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
