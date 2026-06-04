import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import Typewriter from './common/Typewriter';
import profileImg from '../assets/profile.jpeg';
import resumePdf from '../assets/Sathiyabalan_SE_CV.pdf';


export default function Hero() {
  const words = ["Software Engineer", "Full Stack Developer", "Backend Enthusiast", "UI/UX Enthusiast"];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
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
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1] // Custom easeOutQuart for soft premium glide
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      rotate: -3,
      filter: 'blur(8px)' 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.4,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.2
      }
    }
  };

  const blobVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative z-0 flex items-center justify-center min-h-[calc(100vh-80px)] px-6 overflow-hidden py-12 md:py-20"
    >
      {/* Background Animated Glow Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          className="absolute -top-10 left-10 md:left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-accent-orange/10 blur-3xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full rounded-full bg-transparent"
          />
        </motion.div>
        
        <motion.div
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          className="absolute -bottom-20 right-10 md:right-1/4 w-80 md:w-108 h-80 md:h-108 rounded-full bg-accent-glow/5 blur-3xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full rounded-full bg-transparent"
          />
        </motion.div>
      </div>

      {/* Hero Grid Container */}
      <div className="max-w-7xl w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
        >

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif-clean tracking-normal text-neutral-900 dark:text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            Sathiyabalan
          </motion.h1>

          {/* Dynamic Title (Typewriter) */}
          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mb-4 text-neutral-800 dark:text-neutral-200 min-h-[40px] flex items-center justify-center md:justify-start gap-2"
          >
            I am a <Typewriter words={words} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-medium text-neutral-600 dark:text-neutral-400 max-w-2xl mb-6 leading-relaxed"
          >
            Software Engineering undergraduate
          </motion.p>

          {/* Short Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mb-10 leading-relaxed font-normal"
          >
            Passionate about building scalable web applications, REST APIs, and modern software systems using Java, React, and cloud technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 w-full"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255, 90, 0, 0.45)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScrollTo('projects')}
              className="flex items-center gap-2 px-6 py-3.5 bg-accent-orange text-white font-semibold rounded-full hover:bg-accent-orange/90 transition shadow-lg shadow-accent-orange/20 cursor-pointer text-sm"
            >
              View Projects
              <FiArrowRight size={16} />
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.03, borderColor: 'var(--color-accent-orange)', backgroundColor: 'rgba(255, 90, 0, 0.05)' }}
              whileTap={{ scale: 0.97 }}
              href={resumePdf}
              download="Sathiyabalan_SE_CV.pdf"
              className="flex items-center gap-2 px-6 py-3.5 border border-accent-orange/30 text-accent-orange font-semibold rounded-full bg-accent-orange/5 transition cursor-pointer text-sm"
            >
              Download Resume
              <FiDownload size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex justify-center items-center"
          >
            {/* Neon glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange to-accent-glow rounded-full blur-2xl opacity-25 animate-pulse" />
            
            {/* Rotating dashed frame */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-orange/30 animate-spin [animation-duration:25s]" />

            {/* Solid accent rings */}
            <div className="absolute inset-2 rounded-full border border-accent-orange/15 bg-secondary-bg/30 backdrop-blur-sm" />

            {/* Profile image container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-900 shadow-2xl shadow-accent-orange/10">
              <img 
                src={profileImg} 
                alt="Sathiyabalan Profile" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative neon bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-bg to-transparent pointer-events-none" />
    </section>
  );
}
