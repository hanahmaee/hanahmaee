"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import VerticalNav from "../../custom/VerticalNav";

import {
  FaFileSignature,
  FaLaptopCode,
  FaPalette,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiFirebase,
  SiPostman,
  SiNpm,
  SiFramer,
  SiVite,
  SiVuejs,
  SiSocketdotio,
  SiTypescript,
  SiPhp,
  SiJest,
} from "react-icons/si";

import { RiHomeGearFill } from "react-icons/ri";
const skillCards = [
  {
    title: "UI/UX Design",
    desc: "Designing intuitive, accessible, and beautiful user interfaces with tools like Figma, Wix, and Canva.",
    icon: FaPalette,
  },
  {
    title: "Project Management",
    desc: "Leading teams, managing timelines, and delivering on goals using Agile, Scrum, and Kanban practices.",
    icon: FaFileSignature,
  },
  {
    title: "Web Development",
    desc: "Building responsive, performant, and scalable web apps with modern tech stacks (React, Python, Node, etc).",
    icon: FaLaptopCode,
  },
];

const techStackRectangular = [
  { icon: SiVite, label: "Next.js" },
  { icon: FaReact, label: "React.js" },
  { icon: SiVite, label: "Vite" },
  { icon: FaGithub, label: "GitHub" },
  { icon: FaHtml5, label: "HTML" },
  { icon: FaCss3Alt, label: "CSS" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiPhp, label: "PHP" },
  { icon: FaDatabase, label: "SQL" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: FaJava, label: "Java" },
  { icon: RiHomeGearFill, label: "Testing"},
];

export default function About() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    function handleAnchorClick(event: MouseEvent) {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
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

        <h2 className="text-4xl font-bold text-center text-foreground">About Me</h2>

        <div id="introduction" className="w-full py-20">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
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
                I’m a project manager and UX designer with a background in
                development. I love shaping ideas into user-friendly and
                beautiful digital experiences.
              </p>
              <p className="text-muted-foreground">
                My strength lies in crafting inclusive, clean, and accessible
                interfaces where design meets technology.
              </p>
              <a
                href="#contact"
                className="hidden sm:inline-block mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary transition"
              >
                LET'S TALK →
              </a>
            </motion.div>

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

            <motion.div
              className="text-left flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="hidden sm:flex flex-col space-y-6">
                <div>
                  <p className="text-5xl font-bold text-foreground">4</p>
                  <p className="text-muted-foreground">Year Bachelor's Degree</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-foreground">5+</p>
                  <p className="text-muted-foreground">Talking Stage (One per year)</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-foreground">0</p>
                  <p className="text-muted-foreground">Boyfriend</p>
                </div>
                <div className="mt-6">
                  <p className="uppercase text-3xl text-muted-foreground font-semibold">
                    Services
                  </p>
                  <p className="text-foreground">
                    UI/UX Design, Project Management, Frontend Dev, Software Testing, Documentation
                  </p>
                </div>
              </div>
              <div className="sm:hidden space-y-4 text-center text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground font-bold">4</span> Years of
                  Bachelor Degree &nbsp;|&nbsp;
                  <span className="text-foreground font-bold">120+</span>{" "}
                  Projects completed &nbsp;|&nbsp;
                  <span className="text-foreground font-bold">95+</span> Happy
                  clients
                </p>
                <p className="text-foreground">
                  <span className="uppercase text-muted-foreground font-semibold">
                    Services:
                  </span>{" "}
                  UX Design, Project Management, Frontend Dev
                </p>
              </div>
            </motion.div>
          </div>
        </div>

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
          <div className="relative w-[500px] h-[600px] sm:w-[350px] sm:h-[450px] md:w-[450px] md:h-[550px] lg:w-[500px] lg:h-[600px]">
              <Image
                src="/edu.png"
                alt="Hanah Mae"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <div className="w-full lg:w-[55%] flex flex-col gap-6 relative
            before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px]
            before:block lg:before:block
            sm:before:hidden
          ">
            {[
              {
                school: "Bulacan State University",
                level: "Bachelor of Science in Information Technology",
                year: "2021 – Present",
                major: "Major in Web and Mobile Development",
                awards: ["President’s Lister (2022 - 2025)", "Dean’s Lister (2021 - 2022)"],
              },
              {
                school: "Lord's Angels Montessori School",
                level: " ",
                year: "2019 – 2021",
                major: "Science, Technology, Engineering, and Mathematics",
                awards: ["With High Honors", "Consistent Honor"],
              },
              {
                school: "Malolos City High School - Santisima Trinidad",
                level: "Secondary Education",
                year: "2015 – 2019",
                major: " ",
                awards: [
                  "Class Valedictorian",
                  "Consistent Student Leader",
                  "Leadership Awardee (Youth for Environment in Schools Organization)",
                ],
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="relative w-full max-w-full shadow-xl hover:shadow-[0_0_20px_0_var(--primary)] rounded-lg px-4 py-5
                  sm:px-6 sm:py-6
                  transition-shadow duration-300
                  dark:bg-[#0d0c0a]
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-lg sm:text-xl font-semibold text-foreground">
                  <span className="whitespace-normal sm:whitespace-nowrap">{edu.school}</span>
                  <span className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-0">{edu.year}</span>
                </div>
                <div className="text-sm sm:text-base text-muted-foreground mt-1">{edu.level}</div>
                {edu.major && (
                  <div className="text-sm sm:text-base text-muted-foreground italic mt-1">
                    {edu.major}
                  </div>
                )}
                <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1 text-xs sm:text-sm">
                  {edu.awards.map((award, i) => (
                    <li key={i}>{award}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
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
                  className="
                    group/card
                    flex-1 min-h-[250px]
                    flex flex-col items-center justify-center
                    rounded-lg p-5 text-center shadow-xl
                    transition-all duration-300
                    hover:shadow-[0_0_20px_0_var(--primary)]
                    dark:bg-[#0d0c0a]
                  "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <div
                    className="
                      transition-all duration-500
                      group-hover/card:-translate-y-6
                      flex flex-col items-center
                    "
                  >
                <Icon className="text-primary w-16 h-16" />
                <h3 className="text-xl font-semibold mt-3">{card.title}</h3>
                  </div>
                  <p
                    className="
                      text-sm text-muted-foreground 
                      opacity-0 max-h-0 overflow-hidden
                      transition-all duration-500 ease-in-out
                      group-hover/card:opacity-100 group-hover/card:max-h-36 px-2
                    "
                  >
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

    {/* TECH STACK */}
    <section id="tech-stack" className="w-full px-4 justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold italic text-foreground">
          Tech Stack
        </h2>
      </motion.div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center max-w-4xl mx-auto px-2">
        {techStackRectangular.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={idx}
              className="
                group
                flex flex-col items-center gap-2
                w-[140px] h-20
                rounded-lg px-4
                shadow-xl
                dark:bg-[#0d0c0a]
                transition-shadow duration-300
                hover:shadow-[0_0_20px_0_var(--primary)]
                cursor-default
                select-none
                justify-center
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Icon className="text-primary w-7 h-7" />
              <span className="font-semibold text-foreground text-lg truncate text-center">{tech.label}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
      </section>
    </main>
  );
}

