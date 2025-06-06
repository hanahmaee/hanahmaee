"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UIUX } from "@/app/Portfolio/portfolioConst"; // Adjust path if needed

export default function UiUxSection() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <main
      id="uiux"
      className="text-black dark:text-white w-full px-4 pt-20 pb-20 max-w-7xl mx-auto"
    >
      <div className="text-center mb-18">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-tight text-primary"
        >
          UI and UX Design
        </motion.h1>
      </div>

      <div className="space-y-20">
        {UIUX.map((project, idx) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="block group"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="border dark:border-neutral-800 p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition duration-300 shadow-xl group-hover:shadow-[0_0_15px_0_var(--primary)]"
            >
              {/* Responsive image at actual size */}
              <div className="w-full flex justify-center items-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.width || 1000}
                  height={project.height || 700}
                  className="rounded-xl max-w-full h-auto object-contain"
                  priority={idx === 0}
                />
              </div>

              {/* Text content */}
              <div className="space-y-4 transition duration-300">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="text-3xl font-bold text-primary"
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="opacity-90 text-sm sm:text-base"
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="text-sm mt-4 space-y-1 opacity-80"
                >
                  <p>
                    <strong>Project Date:</strong> {project.date}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="flex flex-wrap gap-2 mt-3"
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs sm:text-sm rounded-md transition"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </main>
  );
}
