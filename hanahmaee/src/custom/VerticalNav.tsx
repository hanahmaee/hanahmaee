"use client";
import { useEffect, useState } from "react";

const sections = ["about", "education", "skills"];

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState("about");
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

      const aboutSection = positions.find((section) => section.id === "about");
      if (aboutSection) {
        setShowNav(
          window.scrollY >= aboutSection.offsetTop && window.scrollY < aboutSection.offsetBottom
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  if (!showNav) return null;

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 transform -translate-y-1/2 flex-col items-center gap-10 z-50">
      {sections.map((section, idx) => (
        <a
          key={section}
          href={`#${section}`}
          className={`flex flex-col items-center group transition-colors duration-500 ease-in-out ${
            activeSection === section ? "text-yellow-400" : "text-muted-foreground"
          }`}
        >
          {/* Animated Circle */}
          <span
            className={`w-4 h-4 rounded-full border-2 mb-2 transition-all duration-500 ease-in-out transform ${
              activeSection === section
                ? "bg-yellow-400 border-yellow-400 scale-110"
                : "border-gray-400 scale-100"
            }`}
          />
          {/* Label with smooth hover */}
          <span className="text-sm capitalize transition-colors duration-300 ease-in-out group-hover:text-yellow-400">
            {section.replace("-", " ")}
          </span>
          {/* Vertical Line */}
          {idx !== sections.length - 1 && <div className="h-12 w-px bg-gray-300 mt-2" />}
        </a>
      ))}
    </div>
  );
}
