import { motion } from 'framer-motion';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import village2cityhubImg from '../assets/village2cityhub.png';
import bookfairImg from '../assets/Bookfair.png';
import employeeManagementImg from '../assets/EmployeeManagement.png';

export default function Projects() {
  const sampleProjects = [
    {
      title: "Village2CityHub",
      description: "A full-stack marketplace platform connecting farmers directly with urban buyers through secure product management and order tracking.",
      image: village2cityhubImg,
      tags: ["React", "Tailwind CSS", "Spring Boot", "MySQL", "JWT"],
      repoLink: "https://github.com/Sathiyabalan29/Village2CIty-Hub.git",
      demoLink: "#"
    },
    {
      title: "Bookfair Stall Booking System",
      description: "Web-based application for managing and booking stalls in book fairs, allowing organizers to efficiently allocate spaces and users to reserve stalls seamlessly.",
      image: bookfairImg,
      tags: ["React", "Tailwind CSS", "Spring Boot", "MySQL", "JWT", "REST API"],
      repoLink: "https://github.com/Sathiyabalan29/BookFair.git",
      demoLink: "#"
    },
    {
      title: "Employee-Management-System",
      description: "A full-stack employee management platform with role-based authentication, attendance tracking, leave management, payslip generation, REST APIs, and dedicated admin and employee dashboards.",
      image: employeeManagementImg,
      tags: ["React", "MongoDB", "Express.js", "Node.js", "JWT"],
      repoLink: "https://github.com/Sathiyabalan29/Employee-Management-System.git",
      demoLink: "#"
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
    <div className="max-w-7xl mx-auto pt-10 pb-16 px-6 md:px-8 text-left text-neutral-600 dark:text-neutral-400">
      <motion.h1 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemScrollVariants}
        className="text-3xl md:text-5xl font-bold mb-2 tracking-tight text-neutral-900 dark:text-white flex items-center gap-3"
      >
        <span className="h-8 w-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.85)]" />
        My Projects
      </motion.h1>
      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemScrollVariants}
        className="text-base text-neutral-500 dark:text-neutral-400 mb-5 max-w-2xl"
      >
        Here are some of the applications and tools I've built.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {sampleProjects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={itemScrollVariants}
            whileHover={{ 
              y: -6, 
              borderColor: 'rgba(255, 90, 0, 0.45)',
              boxShadow: '0 0 25px rgba(255, 90, 0, 0.08)'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group rounded-2xl border border-accent-orange/20 bg-card-bg backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300"
          >
            <div>
              {/* Image Section */}
              {project.image && (
                <div className="relative h-52 md:h-56 overflow-hidden border-b border-accent-orange/10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent opacity-60" />
                </div>
              )}
              
              {/* Content Section */}
              <div className="p-6 md:p-8 text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-accent-orange">
                  {project.title}
                </h3>
                <p className="text-neutral-550 dark:text-neutral-400 mb-5 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack tags */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 bg-accent-orange/10 border border-accent-orange/15 rounded-lg text-[10px] font-semibold text-accent-orange tracking-wider uppercase hover:shadow-[0_0_10px_rgba(255,90,0,0.3)] hover:border-accent-orange/45 transition-all duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Actions Section */}
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-accent-orange/10 flex justify-end">
              {project.repoLink && project.repoLink !== '#' ? (
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent-orange hover:text-accent-glow transition-all duration-300 group/link"
                >
                  View Repository
                  <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" size={14} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 dark:text-neutral-600 cursor-not-allowed">
                  No Repository
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
