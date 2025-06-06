'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = ['about', 'education', 'skills'];

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState('about');
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const positions = sections
        .map((id) => {
          const el = document.getElementById(id);
          return el
            ? {
                id,
                offsetTop: el.offsetTop,
                offsetBottom: el.offsetTop + el.offsetHeight,
              }
            : null;
        })
        .filter(Boolean) as { id: string; offsetTop: number; offsetBottom: number }[];

      const scrollPos = window.scrollY + window.innerHeight / 2;

      const current = positions.findLast((section) => scrollPos >= section.offsetTop);
      if (current && current.id !== activeSection) {
        setActiveSection(current.id);
      }

      const skillsSection = positions.find((section) => section.id === 'skills');
      if (skillsSection) {
        setShowNav(
          window.scrollY >= positions[0].offsetTop &&
          window.scrollY < skillsSection.offsetBottom
        );
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  if (!showNav) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden lg:flex fixed right-6 top-1/2 transform -translate-y-1/2 flex-col items-center gap-10 z-50"
    >
      {sections.map((section, idx) => (
        <a
          key={section}
          href={`#${section}`}
          className={`flex flex-col items-center group transition-colors duration-500 ease-in-out ${
            activeSection === section ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <span
            className={`w-4 h-4 rounded-full border-2 mb-2 transition-all duration-500 ease-in-out transform ${
              activeSection === section
                ? 'bg-primary border-primary scale-110'
                : 'border-gray-400 scale-100'
            }`}
          />
          <span className="text-sm capitalize transition-colors duration-300 ease-in-out group-hover:text-primary">
            {section.replace('-', ' ')}
          </span>
          {idx !== sections.length - 1 && <div className="h-12 w-px bg-gray-300 mt-2" />}
        </a>
      ))}
    </motion.div>
  );
}
