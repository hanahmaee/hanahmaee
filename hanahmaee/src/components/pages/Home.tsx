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
  const [typingSpeed, setTypingSpeed] = useState(250);
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

    const timer = setTimeout(() => {}, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="w-full bg-white dark:bg-background flex justify-center px-4 pt-18 pb-20">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 md:gap-6 items-center md:items-stretch">
        {/* TEXT */}
        <motion.div
          className="order-2 md:order-1 flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Hello, I'm <span className="text-primary">Hanah Mae...</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 dark:text-yellow-400 min-h-[40px]">
            {text}
            <span className="inline-block animate-blink">|</span>
          </h2>
          <p className="max-w-xl text-muted-foreground text-base lg:text-xl mx-auto md:mx-0">
            I love building thoughtful user experiences and managing creative projects with clarity and heart.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="order-1 md:order-2 relative group"
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
              className={`relative w-full h-full duration-700 ease-in-out transform ${
                flipped ? "rotate-y-180" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border shadow-lg">
                <Image
                  src="/profile-front.jpg"
                  alt="Front"
                  fill
                  className="object-cover"
                />
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl overflow-hidden border shadow-lg">
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-black text-white text-xs px-3 py-1 rounded-lg shadow-lg z-10">
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
            <a href="https://facebook.com" target="_blank"><FaFacebookF size={22} /></a>
            <a href="https://tiktok.com" target="_blank"><FaTiktok size={22} /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedinIn size={22} /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram size={22} /></a>
            <a href="https://github.com" target="_blank"><FaGithub size={22} /></a>
          </div>
        </motion.div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .animate-blink {
          animation: blink 1.2s steps(1) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @media (max-width: 768px) {
          .order-1 { order: 1; }  /* image */
          .order-2 { order: 2; }  /* text */
          .order-3 { order: 3; }  /* social */
          .md\\:items-stretch { align-items: center; }
        }
      `}</style>
    </section>
  );
}
