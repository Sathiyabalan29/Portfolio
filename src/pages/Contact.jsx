import { motion } from 'framer-motion';

export default function Contact() {
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

  return (
    <div className="max-w-7xl mx-auto pt-10 pb-16 px-6 md:px-8 text-left">
      <motion.h1 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemScrollVariants}
        className="text-3xl md:text-5xl font-bold mb-2 text-center text-neutral-900 dark:text-white flex items-center justify-center gap-3"
      >
        <span className="h-8 w-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,90,0,0.85)]" />
        Get in Touch
      </motion.h1>
      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemScrollVariants}
        className="text-neutral-600 dark:text-neutral-450 text-center mb-5 text-sm md:text-base"
      >
        Have a question or want to work together? Drop me a message!
      </motion.p>
      
      <motion.form 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={cardScrollVariants}
        onSubmit={(e) => e.preventDefault()}
        className="max-w-2xl mx-auto space-y-5 p-8 rounded-3xl border border-accent-orange/20 bg-card-bg backdrop-blur-md shadow-2xl shadow-[0_0_40px_rgba(255,90,0,0.02)]"
      >
        <motion.div variants={itemScrollVariants}>
          <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Your Name"
            className="w-full px-4 py-2.5 rounded-xl border border-accent-orange/20 bg-input-bg text-text-main focus:outline-none focus:border-accent-orange/70 focus:ring-1 focus:ring-accent-orange/30 focus:shadow-[0_0_15px_rgba(255,90,0,0.1)] transition-all duration-200"
          />
        </motion.div>
        <motion.div variants={itemScrollVariants}>
          <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="your.email@example.com"
            className="w-full px-4 py-2.5 rounded-xl border border-accent-orange/20 bg-input-bg text-text-main focus:outline-none focus:border-accent-orange/70 focus:ring-1 focus:ring-accent-orange/30 focus:shadow-[0_0_15px_rgba(255,90,0,0.1)] transition-all duration-200"
          />
        </motion.div>
        <motion.div variants={itemScrollVariants}>
          <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            rows="5"
            placeholder="Your Message..."
            className="w-full px-4 py-2.5 rounded-xl border border-accent-orange/20 bg-input-bg text-text-main focus:outline-none focus:border-accent-orange/70 focus:ring-1 focus:ring-accent-orange/30 focus:shadow-[0_0_15px_rgba(255,90,0,0.1)] transition-all duration-200"
          />
        </motion.div>
        <motion.button 
          variants={itemScrollVariants}
          type="submit"
          className="w-full py-3.5 bg-gradient-to-r from-accent-orange to-accent-glow hover:from-accent-orange/95 hover:to-accent-glow/95 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent-orange/20 hover:shadow-accent-orange/40 hover:scale-[1.01] cursor-pointer text-sm tracking-wide uppercase font-bold"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}
