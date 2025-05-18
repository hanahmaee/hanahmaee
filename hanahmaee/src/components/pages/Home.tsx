"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaPalette,
  FaFileSignature,
  FaLaptopCode,
} from "react-icons/fa";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const roles = [
  "a Writer",
  "a Project Manager",
  "an Aspiring Front-End Developer",
];

export default function HomeSection() {
  const [flipped, setFlipped] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, [text, isDeleting, loopNum]);

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
    <main className="w-full bg-white dark:bg-background px-4 pt-16 pb-12 max-w-7xl mx-auto">
      {/* HOME INTRO */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-8 mb-10 pt-[80px] -mt-[80px]"
      >
        {/* TEXT */}
        <motion.div
          className="order-2 md:order-1 flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Hello! I'm <span className="text-primary">Hanah Mae...</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary min-h-[40px]">
            {text}
            <span className="inline-block animate-pulse">|</span>
          </h2>
          <p className="max-w-xl text-muted-foreground text-base lg:text-xl mx-auto md:mx-0">
            I love building thoughtful user experiences and managing creative
            projects with clarity and heart.
          </p>

          <div>
            <a
              href="#portfolio"
              className="text-secondary bg-primary font-semibold px-6 py-2 border rounded-full"
            >
              &lt;View Projects&gt;
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="order-1 md:order-2 relative group flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div
            className="relative w-[260px] h-[340px] md:w-[300px] md:h-[400px] cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={() => setFlipped(!flipped)}
            onMouseEnter={() => setShowToast(true)}
            onMouseLeave={() => setShowToast(false)}
          >
            <div
              className="relative w-full h-full duration-700 ease-in-out transform"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "none",
              }}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden border shadow-lg group-hover:shadow-[0_0_20px_rgba(234,179,8,0.8)] transition-shadow duration-300"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Image
                  src="/profile-front.JPG"
                  alt="Front"
                  fill
                  className="object-cover"
                />
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden border shadow-lg group-hover:shadow-[0_0_20px_rgba(234,179,8,0.8)] transition-shadow duration-300"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <Image
                  src="/profile-back.jpg"
                  alt="Back"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* TOAST */}
            {showToast && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-foreground text-background text-xs px-3 py-1 rounded-lg shadow-lg z-10">
                Click to flip!
              </div>
            )}
          </div>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          className="order-3 flex flex-col items-center gap-6 md:justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <span className="text-xs tracking-widest text-muted-foreground md:-rotate-90">
            FOLLOW ME
          </span>
          <div className="w-[1px] h-6 bg-muted hidden md:block" />
          <div className="flex gap-4 md:flex-col text-primary">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF size={22} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={22} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub size={22} />
            </a>
          </div>
        </motion.div>
      </section>

{/* SERVICES */}
<section
  id="services"
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-6 mb-4 px-4"
>
  {[
    {
      title: "UI/UX Design",
      desc: "Designing intuitive, accessible, and beautiful user interfaces with tools like Figma and Adobe XD.",
      icon: FaPalette,
    },
    {
      title: "Project Management",
      desc: "Leading teams, managing timelines, and delivering on goals using Agile, Scrum, and Kanban practices.",
      icon: FaFileSignature,
    },
    {
      title: "Web Development",
      desc: "Building responsive, performant, and scalable web apps with modern tech stacks (React, Node, etc).",
      icon: FaLaptopCode,
    },
  ].map((card, idx) => {
    const Icon = card.icon;
    return (
      <motion.div
        key={idx}
        className="border shadow-xl rounded-lg p-6 text-center transition-shadow duration-100 hover:shadow-[0_0_25px_5px_rgba(234,179,8,0.7)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
      >
        <Icon className="text-primary w-12 h-12 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2 text-primary">{card.title}</h3>
        <p className="text-muted-foreground text-base">{card.desc}</p>
      </motion.div>
    );
  })}
</section>

      {/* ABOUT */}
      <div className="mr-12">
        <About />
      </div>

      {/* PORTFOLIO */}
      <div className="mr-12">
        <Portfolio />
      </div>

      {/* CONTACT */}
      <div className="mr-12">
        <Contact />
      </div>
    </main>
  );
}
