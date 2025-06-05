"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import VerticalNav from "../../custom/VerticalNav";
import { FiMapPin } from "react-icons/fi";


// Import constants from external file
import {
  skillCards,
  techStackRectangular,
  experienceData,
  educationData,
} from "@/app/About/aboutConst";

export default function About() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
const bounceAnimation = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

  useEffect(() => {
    function handleAnchorClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault();
        const id = target.getAttribute("href")!.substring(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <main className="scroll-smooth w-full dark:bg-background px-4 pt-15 max-w-7xl mx-auto">
      <section
        id="about"
        className="min-h-screen flex flex-col items-center pt-24 px-4 max-w-7xl mx-auto"
      >
        <div className="hidden lg:flex mr-12">
          <VerticalNav />
        </div>

        <h2 className="text-5xl font-bold text-center text-foreground">About Me</h2>

        <div id="introduction" className="w-full py-20">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
            {/* Intro Text */}
            <motion.div
              className="space-y-4 flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="leading-[1.1]">
                <h1 className="text-[3.5rem] font-extrabold text-foreground">
                  Aspiring
                </h1>
                <h2 className="text-[3rem] font-extrabold text-foreground">
                  Front-End Developer
                </h2>
                <h2 className="text-[2.8rem] font-extrabold text-foreground">
                  & Project Manager
                </h2>
              </div>
              <p className="text-muted-foreground">
                I’m a project manager and UX designer with a background in development.
                I love shaping ideas into user-friendly and beautiful digital experiences.
              </p>
              <p className="text-muted-foreground">
                My strength lies in crafting inclusive, clean, and accessible interfaces
                where design meets technology.
              </p>
              <a
                href="#contact"
                className="hidden sm:inline-block mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary transition"
              >
                LET'S TALK →
              </a>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex justify-center items-stretch flex-col gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src="/about.png"
                    alt="Hanah Mae Profile"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <a
                href="#contact"
                className="sm:hidden inline-block self-center px-6 py-3 bg-primary text-black font-semibold rounded-md hover:bg-primary transition"
              >
                LET'S TALK →
              </a>
            </motion.div>

            {/* Experience */}
            <motion.div
              className="text-left flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-3xl font-extrabold text-foreground">EXPERIENCE</h2>
                <div className="mt-4 space-y-6">
                  {experienceData.map((item, index) => (
                    <div key={index}>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                      <p className="text-xl font-bold text-foreground text-primary">{item.position}</p>
                      <div className="flex justify-between items-center text-sm italic text-muted-foreground">
                        <span>{item.company}</span>
                        <span className="flex items-center gap-1">
                          <FiMapPin className="text-muted-foreground" />
                          {item.location}
                        </span>
                      </div>
                      <ul className="text-sm text-foreground list-disc list-inside space-y-1 mt-1">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <div id="education" className="w-full">
          <h2 className="text-4xl font-bold text-center mb-10 pt-24 text-foreground">
            Educational Background
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full items-center">
          <motion.div
            className="w-full lg:w-[45%] flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <div className="relative w-[90vw] h-[110vw] sm:w-[350px] sm:h-[450px] md:w-[450px] md:h-[550px] lg:w-[500px] lg:h-[600px]">
            <Image
              src="/edu.png"
              alt="Hanah Mae"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          </motion.div>

          <div className="w-full lg:w-[55%] flex flex-col gap-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:block lg:before:block sm:before:hidden">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="relative w-full max-w-full shadow-xl hover:shadow-[0_0_20px_0_var(--primary)] rounded-lg px-4 py-5 sm:px-6 sm:py-6 transition-shadow duration-300 dark:bg-[#0d0c0a]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-lg sm:text-xl font-semibold text-foreground">
                  <span className="text-primary font-extrabold whitespace-normal sm:whitespace-nowrap">{edu.school}</span>
                  <span className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-0">{edu.year}</span>
                </div>
                {edu.level && <div className="text-sm sm:text-base text-muted-foreground mt-1">{edu.level}</div>}
                {edu.major && <div className="text-sm sm:text-base text-muted-foreground italic mt-1">{edu.major}</div>}
                <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1 text-xs sm:text-sm">
                  {edu.awards.map((award, i) => (
                    <li key={i}>{award}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <section id="skills" className="w-full px-4 pt-24 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold italic text-foreground">
              Let’s build something amazing together...
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 mb-4">
            {skillCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  className="group/card flex-1 min-h-[250px] flex flex-col items-center justify-center rounded-lg p-5 text-center shadow-xl transition-all duration-300 hover:shadow-[0_0_20px_0_var(--primary)] dark:bg-[#0d0c0a]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <div className="transition-all duration-500 group-hover/card:-translate-y-6 flex flex-col items-center">
                    <Icon className="text-primary w-16 h-16" />
                    <h3 className="text-xl font-semibold mt-3">{card.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover/card:opacity-100 group-hover/card:max-h-36 px-2">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack */}
    <section id="tech-stack" className="w-full px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold italic text-foreground">Tech Stack</h2>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-6xl mx-auto place-items-center">
        {techStackRectangular.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={idx}
              className="flex flex-col items-center cursor-default select-none transition-transform duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
            >
              <motion.div {...bounceAnimation}>
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </motion.div>
              <span className="font-medium text-sm sm:text-base text-center text-foreground mt-1">
                {tech.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
      </section>
    </main>
  );
}
