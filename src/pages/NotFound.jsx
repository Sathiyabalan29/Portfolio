import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 md:px-8 max-w-xl mx-auto"
    >
      <h1 className="text-7xl md:text-8xl font-black text-accent-orange mb-4 drop-shadow-[0_0_15px_rgba(255,90,0,0.4)]">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
        Page Not Found
      </h2>
      <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed text-sm md:text-base">
        The page you are looking for does not exist, has been moved, or is temporarily unavailable.
      </p>
      <motion.div
        whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255, 90, 0, 0.45)' }}
        whileTap={{ scale: 0.97 }}
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent-orange text-white font-semibold rounded-full shadow-lg shadow-accent-orange/20 hover:bg-accent-orange/90 transition text-sm cursor-pointer"
        >
          Return Home
        </Link>
      </motion.div>
    </motion.div>
  );
}
