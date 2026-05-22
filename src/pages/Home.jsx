import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { FiTerminal, FiCpu, FiUsers, FiGitBranch, FiBookOpen, FiLayers, FiCode, FiGlobe, FiDatabase, FiCloud, FiPenTool, FiGithub, FiArrowRight, FiBriefcase, FiAward } from 'react-icons/fi';
import { TbCube, TbBinaryTree } from 'react-icons/tb';
import village2cityhubImg from '../assets/village2cityhub.png';
import bookfairImg from '../assets/Bookfair.png';
import employeeManagementImg from '../assets/EmployeeManagement.png';

export default function Home() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const gridStaggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
        duration: 1.2, // Slower duration for a soft, premium glide
        ease: [0.25, 1, 0.5, 1] // Custom easeOutQuart curve for smooth, soft deceleration
      } 
    }
  };

  const cardScrollVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      scale: 0.98, 
      filter: 'blur(4px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1.0, 
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1
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
    <div className="space-y-8">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <motion.section 
        id="about" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="scroll-mt-20 pt-8 pb-12 px-6 md:px-8 max-w-7xl mx-auto border-t border-accent-orange/10"
      >
        <motion.h2 
          variants={itemScrollVariants}
          className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-neutral-900 dark:text-white flex items-center gap-3"
        >
          <span className="h-8 w-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.85)]" />
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 text-neutral-550 dark:text-neutral-400 items-start">
          {/* Left Column - Intro & Key Focus Areas */}
          <motion.div 
            variants={itemScrollVariants}
            className="md:col-span-7 space-y-8"
          >
            <div className="space-y-4 md:space-y-5">
              <p className="text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 font-medium text-left">
                I am a Software Engineering undergraduate focused on building scalable, efficient, and modern software systems. I am passionate about developing web applications, REST APIs, and cloud-based solutions using Java, React, and related technologies.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-neutral-650 dark:text-neutral-400 font-normal text-left">
                I have experience in both backend and full-stack development, with a strong focus on writing clean, maintainable, and scalable code.
              </p>
            </div>
            
            <div className="space-y-4 text-left">
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
                    className="flex items-start gap-3 text-sm text-neutral-650 dark:text-neutral-400"
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
            variants={itemScrollVariants}
            className="md:col-span-5 text-left"
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
                  <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">Academic Background</p>
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
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="scroll-mt-20 pt-8 pb-12 px-6 md:px-8 max-w-7xl mx-auto border-t border-accent-orange/10"
      >
        <motion.h2 
          variants={itemScrollVariants}
          className="text-3xl md:text-4xl font-bold mb-1 tracking-tight text-neutral-900 dark:text-white flex items-center gap-3"
        >
          <span className="h-8 w-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.85)]" />
          Skills
        </motion.h2>
        <motion.p 
          variants={itemScrollVariants}
          className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mb-4 max-w-2xl text-left"
        >
          Technologies I use to build and deliver modern full-stack applications.
        </motion.p>
        
        <motion.div 
          variants={gridStaggerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left"
        >
          {[
            {
              title: "Programming Languages",
              icon: FiCode,
              iconColor: "text-accent-orange",
              description: "Core programming languages used for backend and frontend development.",
              skills: [
                { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", borderColor: "hover:border-accent-orange/40 hover:shadow-accent-orange/5" },
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", borderColor: "hover:border-[#3776ab]/40 hover:shadow-[#3776ab]/5" },
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", borderColor: "hover:border-[#f7df1e]/40 hover:shadow-[#f7df1e]/5" }
              ]
            },
            {
              title: "Web Technologies",
              icon: FiGlobe,
              iconColor: "text-accent-glow",
              description: "Full-stack web development using modern frontend and backend technologies.",
              skills: [
                { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", borderColor: "hover:border-[#61dafb]/40 hover:shadow-[#61dafb]/5" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", borderColor: "hover:border-[#339933]/40 hover:shadow-[#339933]/5" },
                { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", isDarkInvert: true, borderColor: "hover:border-slate-400/40 dark:hover:border-slate-600/40 hover:shadow-slate-500/5" },
                { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", borderColor: "hover:border-[#e34f26]/40 hover:shadow-[#e34f26]/5" },
                { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", borderColor: "hover:border-[#1572b6]/40 hover:shadow-[#1572b6]/5" }
              ]
            },
            {
              title: "Database Management",
              icon: FiDatabase,
              iconColor: "text-accent-orange",
              description: "Experience in relational and NoSQL database design and data management.",
              skills: [
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", borderColor: "hover:border-[#47a248]/40 hover:shadow-[#47a248]/5" },
                { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", borderColor: "hover:border-[#00758f]/40 hover:shadow-[#00758f]/5" }
              ]
            },
            {
              title: "Cloud & DevOps",
              icon: FiCloud,
              iconColor: "text-accent-glow",
              description: "Version control, collaboration, and project workflow management.",
              skills: [
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", borderColor: "hover:border-[#f05032]/40 hover:shadow-[#f05032]/5" },
                { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", isDarkInvert: true, borderColor: "hover:border-slate-400/40 dark:hover:border-slate-600/40 hover:shadow-slate-500/5" }
              ]
            },
            {
              title: "UI/UX & Design Tools",
              icon: FiPenTool,
              iconColor: "text-accent-orange",
              description: "Used for UI design, wireframing, and system diagramming.",
              skills: [
                { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", borderColor: "hover:border-[#f24e1e]/40 hover:shadow-[#f24e1e]/5" },
                { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", borderColor: "hover:border-[#00c4cc]/40 hover:shadow-[#00c4cc]/5" },
                { name: "Draw.io", logo: "/drawio.svg", borderColor: "hover:border-[#f08705]/40 hover:shadow-[#f08705]/5" },
                { name: "Lucidchart", logo: "/lucidchart.svg", borderColor: "hover:border-[#ff6f1f]/40 hover:shadow-[#ff6f1f]/5" }
              ]
            },
            {
              title: "Core Concepts",
              icon: FiBookOpen,
              iconColor: "text-accent-glow",
              description: "Strong foundation in programming principles and problem-solving.",
              skills: [
                { name: "OOP", isConcept: true, icon: TbCube, iconColor: "text-accent-orange", borderColor: "hover:border-accent-orange/45 hover:shadow-accent-orange/5" },
                { name: "DSA", isConcept: true, icon: TbBinaryTree, iconColor: "text-accent-glow", borderColor: "hover:border-accent-glow/45 hover:shadow-accent-glow/5" }
              ]
            }
          ].map((cat, idx) => {
            const CategoryIcon = cat.icon;
            return (
              <motion.div 
                key={idx}
                variants={cardScrollVariants}
                className="p-6 rounded-3xl border border-accent-orange/20 bg-card-bg backdrop-blur-md shadow-2xl hover:border-accent-orange/45 shadow-[0_0_35px_rgba(255,90,0,0.03)] hover:shadow-[0_0_40px_rgba(255,90,0,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="mb-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`p-1.5 rounded-lg bg-input-bg border border-accent-orange/15 ${cat.iconColor}`}>
                      <CategoryIcon size={18} />
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-450 font-normal leading-normal">
                    {cat.description}
                  </p>
                </div>

                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-2 xl:grid-cols-3 gap-3"
                >
                  {cat.skills.map((skill, sIdx) => {
                    return (
                      <motion.div 
                        key={sIdx}
                        variants={subItemVariants}
                        className={`group flex flex-col items-center justify-center p-3 rounded-2xl border border-accent-orange/10 bg-input-bg shadow-sm transition-all duration-300 cursor-default text-center hover:scale-[1.03] hover:border-accent-orange/40 hover:shadow-[0_0_15px_rgba(255,90,0,0.15)]`}
                      >
                        {skill.isConcept ? (
                          (() => {
                            const ConceptIcon = skill.icon;
                            return <ConceptIcon className={`w-7 h-7 mb-1.5 transition-all duration-300 ${skill.iconColor}`} />;
                          })()
                        ) : (
                          <img 
                            src={skill.logo} 
                            alt={`${skill.name} Logo`}
                            className={`w-7 h-7 mb-1.5 object-contain transition-all duration-300 group-hover:scale-110 ${skill.isDarkInvert ? 'dark:invert dark:brightness-200' : ''}`}
                            loading="lazy"
                          />
                        )}
                        <span className="text-[10px] font-semibold text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-250 leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="scroll-mt-20 pt-8 pb-12 px-6 md:px-8 max-w-7xl mx-auto border-t border-accent-orange/10"
      >
        <motion.h2 
          variants={itemScrollVariants}
          className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-neutral-900 dark:text-white flex items-center gap-3"
        >
          <span className="h-8 w-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.85)]" />
          Featured Projects
        </motion.h2>
        
        <motion.div 
          variants={gridStaggerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {[
            {
              title: "Village2CityHub",
              desc: "A full-stack marketplace platform connecting farmers directly with urban buyers through secure product management and order tracking.",
              image: village2cityhubImg,
              tags: ["React", "Tailwind CSS", "Spring Boot", "MySQL", "JWT"],
              repoLink: "https://github.com/Sathiyabalan29/Village2CIty-Hub.git",
              demoLink: "#"
            },
            {
              title: "Bookfair Stall Booking System",
              desc: "Web-based application for managing and booking stalls in book fairs, allowing organizers to efficiently allocate spaces and users to reserve stalls seamlessly.",
              image: bookfairImg,
              tags: ["React", "Tailwind CSS", "Spring Boot", "MySQL", "JWT", "REST API"],
              repoLink: "https://github.com/Sathiyabalan29/BookFair.git",
              demoLink: "#"
            },
            {
              title: "Employee-Management-System",
              desc: "A full-stack employee management platform with role-based authentication, attendance tracking, leave management, payslip generation, REST APIs, and dedicated admin and employee dashboards.",
              image: employeeManagementImg,
              tags: ["React", "MongoDB", "Express.js", "Node.js", "JWT"],
              repoLink: "https://github.com/Sathiyabalan29/Employee-Management-System.git",
              demoLink: "#"
            }
          ].map((project, idx) => (
            <motion.div 
              key={idx}
              variants={cardScrollVariants}
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
                    {project.desc}
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
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-450 dark:text-neutral-600 cursor-not-allowed">
                    No Repository
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Achievements & Activities Section */}
      <motion.section 
        id="achievements" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="scroll-mt-20 pt-8 pb-12 px-6 md:px-8 max-w-7xl mx-auto border-t border-accent-orange/10"
      >
        <motion.h2 
          variants={itemScrollVariants}
          className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-neutral-900 dark:text-white flex items-center gap-3"
        >
          <span className="h-8 w-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.85)]" />
          Achievements & Activities
        </motion.h2>
        <motion.p 
          variants={itemScrollVariants}
          className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mb-8 max-w-2xl text-left"
        >
          My competition highlights, leadership experience, and active student club involvement.
        </motion.p>
        
        <div className="space-y-12 text-left">
          {/* Category 1: Competition Highlights */}
          <motion.div variants={itemScrollVariants} className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-accent-orange/10">
              <span className="p-1.5 rounded-lg bg-accent-orange/10 border border-accent-orange/15 text-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.05)]">
                <FiAward size={20} />
              </span>
              Competition Highlights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Top 10 Finalist",
                  subtitle: "Junior Hack Inter-University Hackathon 2025",
                  desc: "Ranked in the top 10 for solution design and speed in a high-intensity hackathon."
                },
                {
                  title: "Cre8X 2.0 Participant",
                  subtitle: "National UI/UX Designathon (KDU)",
                  desc: "Created wireframes and interactive prototypes under human-centered design guidelines."
                },
                {
                  title: "IX\u201925 Participant",
                  subtitle: "IEEE UI/UX Competition (IIT)",
                  desc: "Worked with teammates to design and prototype user-centered software solutions."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4, borderColor: 'rgba(255, 90, 0, 0.45)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-6 rounded-2xl border border-accent-orange/20 bg-card-bg backdrop-blur-md shadow-2xl hover:shadow-[0_0_20px_rgba(255,90,0,0.05)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold text-accent-orange mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-neutral-550 dark:text-neutral-450 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category 2: Leadership & Organizing Experience */}
          <motion.div variants={itemScrollVariants} className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-accent-orange/10">
              <span className="p-1.5 rounded-lg bg-accent-orange/10 border border-accent-orange/15 text-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.05)]">
                <FiBriefcase size={20} />
              </span>
              Leadership & Organizing Experience
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Organizing Committee Member",
                  subtitle: "Career Fair 2025",
                  desc: "Coordinated event operations, logistics, and team collaboration."
                },
                {
                  title: "Organizing Committee Member & Magazine Team",
                  subtitle: "Best Speaker Competition 2025",
                  desc: "Supported event logistics and curated content for the official magazine."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4, borderColor: 'rgba(255, 90, 0, 0.45)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-6 rounded-2xl border border-accent-orange/20 bg-card-bg backdrop-blur-md shadow-2xl hover:shadow-[0_0_20px_rgba(255,90,0,0.05)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold text-accent-orange mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-neutral-550 dark:text-neutral-450 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category 3: Student Involvement & Clubs */}
          <motion.div variants={itemScrollVariants} className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2.5 pb-2 border-b border-accent-orange/10">
              <span className="p-1.5 rounded-lg bg-accent-orange/10 border border-accent-orange/15 text-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.05)]">
                <FiUsers size={20} />
              </span>
              Student Involvement & Clubs
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Junior Treasurer",
                  subtitle: "Gavel Club, University of Kelaniya",
                  duration: "2025 September - Present",
                  desc: "Manages financial accounts, budget tracking, and event funding."
                },
                {
                  title: "Event Coordinator",
                  subtitle: "LED KLN (UOK)",
                  duration: "2025 June - Present",
                  desc: "Coordinates logistics, planning, and execution for student workshops."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4, borderColor: 'rgba(255, 90, 0, 0.45)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-6 rounded-2xl border border-accent-orange/20 bg-card-bg backdrop-blur-md shadow-2xl hover:shadow-[0_0_20px_rgba(255,90,0,0.05)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 flex-wrap mb-1">
                      <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent-orange/10 text-accent-orange border border-accent-orange/25">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-accent-orange mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-neutral-550 dark:text-neutral-450 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="scroll-mt-20 pt-8 pb-12 px-6 md:px-8 max-w-7xl mx-auto border-t border-accent-orange/10"
      >
        <motion.h2 
          variants={itemScrollVariants}
          className="text-3xl md:text-4xl font-bold mb-1 tracking-tight text-center text-neutral-900 dark:text-white flex items-center justify-center gap-3"
        >
          <span className="h-8 w-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.85)]" />
          Get in Touch
        </motion.h2>
        <motion.p 
          variants={itemScrollVariants}
          className="text-neutral-550 dark:text-neutral-450 text-center mb-4"
        >
          Feel free to reach out for collaboration opportunities or just to say hi!
        </motion.p>
        
        <motion.form 
          variants={cardScrollVariants}
          onSubmit={(e) => e.preventDefault()}
          className="max-w-2xl mx-auto space-y-5 p-8 rounded-3xl border border-accent-orange/20 bg-card-bg backdrop-blur-md shadow-2xl shadow-[0_0_40px_rgba(255,90,0,0.02)]"
        >
          <motion.div variants={itemScrollVariants}>
            <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300" htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-2.5 rounded-xl border border-accent-orange/20 bg-input-bg text-text-main focus:outline-none focus:border-accent-orange/70 focus:ring-1 focus:ring-accent-orange/30 focus:shadow-[0_0_15px_rgba(255,90,0,0.1)] transition-all duration-200" />
          </motion.div>
          <motion.div variants={itemScrollVariants}>
            <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300" htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your.email@example.com" className="w-full px-4 py-2.5 rounded-xl border border-accent-orange/20 bg-input-bg text-text-main focus:outline-none focus:border-accent-orange/70 focus:ring-1 focus:ring-accent-orange/30 focus:shadow-[0_0_15px_rgba(255,90,0,0.1)] transition-all duration-200" />
          </motion.div>
          <motion.div variants={itemScrollVariants}>
            <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300" htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Your Message..." className="w-full px-4 py-2.5 rounded-xl border border-accent-orange/20 bg-input-bg text-text-main focus:outline-none focus:border-accent-orange/70 focus:ring-1 focus:ring-accent-orange/30 focus:shadow-[0_0_15px_rgba(255,90,0,0.1)] transition-all duration-200" />
          </motion.div>
          <motion.button 
            variants={itemScrollVariants}
            className="w-full py-3.5 bg-gradient-to-r from-accent-orange to-accent-glow hover:from-accent-orange/95 hover:to-accent-glow/95 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent-orange/20 hover:shadow-accent-orange/40 hover:scale-[1.01] cursor-pointer text-sm tracking-wide uppercase font-bold"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.section>
    </div>
  );
}
