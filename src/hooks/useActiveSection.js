import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // If we are at the top of the page, force "home" active
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      // If we are near the bottom of the page, force "contact" active (since contact might be short and not trigger standard scroll threshold)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom && sectionIds.includes('contact')) {
        setActiveSection('contact');
        return;
      }

      let currentActive = activeSection;
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if the section is crossing the upper middle part of the screen (30% from the top)
          const viewportThreshold = window.innerHeight * 0.3;
          if (rect.top <= viewportThreshold && rect.bottom >= viewportThreshold) {
            currentActive = id;
            break;
          }
        }
      }
      
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, activeSection]);

  return activeSection;
}
