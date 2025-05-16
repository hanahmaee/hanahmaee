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
} from "react-icons/fa";

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

  // Smooth scroll for internal anchor links
  useEffect(() => {
    function handleAnchorClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
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
    <main className="w-full bg-white dark:bg-background px-4 pt-18 pb-12 max-w-7xl mx-auto">
      {/* HOME INTRO */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-8 mb-20"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 dark:text-yellow-400 min-h-[40px]">
            {text}
            <span className="inline-block animate-pulse">|</span>
          </h2>
          <p className="max-w-xl text-muted-foreground text-base lg:text-xl mx-auto md:mx-0">
            I love building thoughtful user experiences and managing creative projects with clarity
            and heart.
          </p>

          {/* NEW BUTTON */}
          <div>
            <a
              href="#projects"
              className="text-yellow-500 font-semibold px-6 py-2 border border-yellow-500 rounded-full transition-shadow hover:shadow-[0_0_10px_rgba(234,179,8,0.8)]"
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
                  src="/profile-front.png"
                  alt="Front"
                  fill
                  className="object-cover"
                />
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden border shadow-lg group-hover:shadow-[0_0_20px_rgba(234,179,8,0.8)] transition-shadow duration-300"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
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
          <div className="flex gap-4 md:flex-col">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="mb-20 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
          About Me
        </h2>
        <div className="text-foreground text-lg leading-relaxed space-y-4">
          <p>
            I am passionate about technology and education. Here's a summary of my educational background:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Bachelor of Science in Computer Science</strong> - XYZ University, 2020 - 2024
            </li>
            <li>
              <strong>High School Diploma</strong> - ABC High School, 2016 - 2020
            </li>
            <li>
              <strong>Certifications:</strong> Front-End Development, Project Management Professional (PMP)
            </li>
          </ul>
          <p>
            My education has provided me with strong foundations in software development, project management, and creative problem-solving.
          </p>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <motion.div
              key={project}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={`/projects/project-${project}.jpg`}
                  alt={`Project ${project}`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-foreground">
                  Project Title {project}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  A brief description of project {project} highlighting
                  key features and technologies used.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-xl mx-auto mb-10 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">
          Contact Me
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-3 rounded-md hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
