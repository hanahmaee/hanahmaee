"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/app/Portfolio/portfolioConst"; // Adjust path if needed

export default function WebDevSection() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for layout and animation frame before scrolling
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
    }
  }, []);

  return (
    <main
      id="webdev"
      className="text-black dark:text-white w-full px-4 pt-28 pb-20 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-tight"
        >
          Web and Mobile Application Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm mt-4 max-w-2xl mx-auto opacity-70"
        >
          Our portfolio showcases our previous work and highlights the quality
          of our services. Browse through our projects and see for yourself.
        </motion.p>
      </div>

      <div className="space-y-20">
        {PROJECTS.map((project, idx) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="block group"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx === 0 ? 0 : idx * 0.2 }}
              viewport={{ once: true }}
              className="border dark:border-neutral-800 p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition duration-300 shadow-xl group-hover:shadow-[0_0_15px_0_var(--primary)]"
            >
              {/* Image */}
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden border transition duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-xl transition duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx === 0}
                />
              </div>

              {/* Content */}
              <div className="space-y-4 transition duration-300">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-3xl font-semibold"
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="opacity-90 text-sm sm:text-base"
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-sm mt-4 space-y-1 opacity-80"
                >
                  <p>
                    <strong>Project Date:</strong> {project.date}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
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
