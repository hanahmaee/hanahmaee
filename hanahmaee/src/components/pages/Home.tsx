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
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const roles = [
  "a Writer",
  "a Project Manager",
  "an Aspiring Front-End Developer",
];

const containerVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3, // delay between each child animation
      duration: 0.8,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


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

  // Set a delay for typing speed
  const typingSpeed = isDeleting ? 200 : 200; // ms per character, slower typing, faster deleting

  const timeout = setTimeout(() => {
    setText(updatedText);
  }, typingSpeed);

  if (!isDeleting && updatedText === fullText) {
    setTimeout(() => setIsDeleting(true), 1000);
  } else if (isDeleting && updatedText === "") {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
  }

  return () => clearTimeout(timeout); // clear timeout on cleanup
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
    <main className="min-h-screen w-full px-6 pt-22 pb-12 max-w-7xl mx-auto">
      {/* HOME INTRO */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center md:items-stretch gap-20 md:gap-14 mb-10 pt-[100px] -mt-[80px]"
      >

      {/* TEXT */}
        <motion.div
          className="order-1 md:order-1 flex-[1.2] flex flex-col justify-center items-start text-left space-y-6 relative pl-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Vertical Line */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1 bg-primary dark:bg-primary rounded"
            variants={childVariants}
          />

          <motion.h1 className="ml-10 text-2xl sm:text-3xl lg:text-4xl font-bold" variants={childVariants}>
            Hello! My name is...
          </motion.h1>

          <motion.h2 className="ml-10 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary" variants={childVariants}>
            <span>Hanah Mae Espineda</span>
          </motion.h2>

          <motion.h2 className="ml-10 text-3xl sm:text-4xl font-bold mb-10 min-h-[40px]" variants={childVariants}>
            {text}
            <span className="inline-block animate-pulse">|</span>
          </motion.h2>

          <motion.div className="group" variants={childVariants}>
            <a
              href="#portfolio"
              className="ml-10 text-white text-2xl font-mono bg-primary font-semibold px-6 py-2 border rounded-full transition-all shadow-2xl"
            >
              &lt;View Projects&gt;
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE + SOCIAL */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 order-2 md:order-2">
          {/* IMAGE */}
          <motion.div
            className="relative group flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div
              className="relative w-[300px] h-[400px] md:w-[380px] md:h-[480px] cursor-pointer"
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
                  className="absolute inset-0 rounded-xl overflow-hidden border shadow-lg group-hover:shadow-[0_0_20px_0_var(--primary)] transition-shadow duration-300"
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
                  className="absolute inset-0 rounded-xl overflow-hidden border shadow-lg group-hover:shadow-[0_0_20px_0_var(--primary)] transition-shadow duration-300"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Image
                    src="/profile-back.JPG"
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
            className="flex flex-col items-center gap-4 md:justify-center"
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
        </div>
      </section>

      {/* PAGES */}
      <div>
        <About />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}