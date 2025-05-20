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
    <main className="min-h-screen w-full px-6 pt-22 pb-12 max-w-7xl mx-auto">
      {/* HOME INTRO */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center md:items-stretch gap-20 md:gap-14 mb-10 pt-[100px] -mt-[80px]"
      >
        {/* TEXT */}
        <motion.div
          className="order-2 md:order-1 flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6+"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Hello! I'm <span className="text-primary">Hanah Mae...</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-primary min-h-[40px]">
            {text}
            <span className="inline-block animate-pulse">|</span>
          </h2>
          <p className="max-w-3xl text-muted-foreground text-base lg:text-2xl mx-auto md:mx-0 mt-4 mb-10">
            I love building thoughtful user experiences and managing creative
            projects with clarity and heart. With a deep passion for both
            storytelling and design, I aim to bring meaningful digital ideas to
            life.
          </p>

          <div>
            <a
              href="#portfolio"
              className="text-white text-2xl bg-primary font-mono font-semibold px-6 py-2 border rounded-full"
            >
              &lt;View Projects&gt;
            </a>
          </div>

        </motion.div>

{/* IMAGE + SOCIAL grouped */}
<div className="flex flex-col md:flex-row items-center justify-center gap-4 order-1 md:order-2">
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
            src="/about.png"
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
