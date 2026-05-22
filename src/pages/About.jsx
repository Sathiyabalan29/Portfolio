import { motion } from 'framer-motion';
import { FiTerminal, FiCpu, FiUsers, FiGitBranch, FiBookOpen, FiLayers } from 'react-icons/fi';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
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

  const subItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.96, 
      filter: 'blur(3px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1.0, 
        ease: [0.25, 1, 0.5, 1] 
      } 
    }
  };

  return (
    <div className="max-w-7xl mx-auto pt-10 pb-16 px-6 md:px-8 text-left text-neutral-600 dark:text-neutral-400">
      <motion.h1 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemScrollVariants}
        className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-white flex items-center gap-3"
      >
        <span className="h-8 w-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.85)]" />
        About Me
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
        {/* Left Column - Intro & Key Focus Areas */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={itemScrollVariants}
          className="md:col-span-7 space-y-8"
        >
          <div className="space-y-4 md:space-y-5">
            <p className="text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 font-medium">
              I am a Software Engineering undergraduate focused on building scalable, efficient, and modern software systems. I am passionate about developing web applications, REST APIs, and cloud-based solutions using Java, React, and related technologies.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-neutral-500 dark:text-neutral-400 font-normal">
              I have experience in both backend and full-stack development, with a strong focus on writing clean, maintainable, and scalable code.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-orange">
              My key areas of interest include:
            </h3>
            
            <motion.ul 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-x-8 xl:gap-y-5"
            >
              {[
                { text: "REST API development using Spring Boot", icon: <FiTerminal className="text-accent-orange shrink-0" size={16} /> },
                { text: "Microservices-based backend systems", icon: <FiCpu className="text-accent-glow shrink-0" size={16} /> },
                { text: "Full-stack web application development", icon: <FiLayers className="text-accent-orange shrink-0" size={16} /> },
                { text: "Agile development and team collaboration", icon: <FiUsers className="text-accent-glow shrink-0" size={16} /> },
                { text: "Git-based version control and code reviews", icon: <FiGitBranch className="text-accent-orange shrink-0" size={16} /> },
                { text: "Exploring AI/ML concepts for intelligent systems", icon: <FiBookOpen className="text-accent-glow shrink-0" size={16} /> }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={subItemVariants}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-start gap-3 text-sm text-neutral-500 dark:text-neutral-400"
                >
                  <div className="p-1.5 rounded-lg bg-card-bg border border-accent-orange/15 shadow-[0_0_10px_rgba(255,90,0,0.02)]">
                    {item.icon}
                  </div>
                  <span className="pt-1 font-normal leading-tight">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
        
        {/* Right Column - Education Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={itemScrollVariants}
          className="md:col-span-5"
        >
          <motion.div 
            whileHover={{ y: -4, borderColor: 'var(--color-accent-orange)' }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 md:p-8 rounded-3xl border border-accent-orange/20 bg-card-bg backdrop-blur-md shadow-2xl shadow-[0_0_30px_rgba(255,90,0,0.03)] hover:shadow-[0_0_35px_rgba(255,90,0,0.06)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-2xl bg-accent-orange/10 text-accent-orange">
                <FiBookOpen size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Education</h3>
                <p className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Academic Background</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Degree 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-sm md:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                    B.Sc. (Hons) Software Engineering
                  </h4>
                  <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent-orange/10 text-accent-orange border border-accent-orange/25">
                    2024 - Present
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  University of Kelaniya
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-normal font-normal">
                  Focused on software architecture, distributed systems, and AI-driven application development.
                </p>
              </div>
              
              <hr className="border-accent-orange/10" />
              
              {/* Degree 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-sm md:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                    Diploma in IT
                  </h4>
                  <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent-orange/10 text-accent-orange border border-accent-orange/25">
                    Mar 2023 – Sep 2023
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  CB Computer Education
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-normal font-normal">
                  Covered fundamentals of web development, Python programming, and VB.NET and gained practical knowledge in Microsoft Office applications.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
