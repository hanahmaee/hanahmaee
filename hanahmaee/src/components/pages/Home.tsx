"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Writer",
  "Project Manager",
  "Aspiring Front-End Developer",
];

export default function HomeSection() {
  const [flipped, setFlipped] = useState(false);

  // Typewriter state
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(50);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-10 pb-12 bg-white dark:bg-background text-center overflow-hidden">
      {/* Flip Card on Top */}
      <motion.div
        className="w-[250px] h-[320px] md:w-[300px] md:h-[380px] perspective mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 ${
            flipped ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border shadow-lg">
            <Image
              src="/profile-front.jpg"
              alt="Hanah Mae Espineda Front"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>

          {/* Back */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl overflow-hidden border shadow-lg">
            <Image
              src="/profile-back.jpg"
              alt="Hanah Mae Espineda Back"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Hello, I'm <span className="text-primary">Hanah Mae...</span>
        </h1>

        {/* Custom Typewriter Effect */}
        <h2 className="text-3xl font-bold text-yellow-500 dark:text-yellow-400 min-h-[40px]">
          {text}
          <span className="inline-block animate-blink">|</span>
        </h2>

        {/* Short Description */}
        <p className="max-w-md text-muted-foreground text-base md:text-lg mx-auto">
          I love building thoughtful user experiences and managing creative projects with clarity and heart.
        </p>
      </motion.div>

      <style jsx>{`
        .animate-blink {
          animation: blink 1.2s steps(2, start) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
