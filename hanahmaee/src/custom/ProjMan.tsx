"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projManProjects = [
  {
    title: "Modern Landing Page",
    description: "A responsive landing page built with Tailwind CSS and Next.js.",
    date: "January 2024",
    client: "Startup Inc.",
    image: "/web.jpg",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "E-commerce Website",
    description: "Full-featured online store with product listings, cart, and checkout.",
    date: "March 2024",
    client: "ShopEZ",
    image: "/web.jpg",
    tags: ["React", "Stripe", "Node.js"],
  },
];

export default function ProjManPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, []);

  return (
    <main
      id="webdev"
      className="dark:bg-background text-foreground w-full px-4 pt-28 pb-20 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold"
        >
          Project Management
        </motion.h1>
        <p className="text-sm max-w-xl mx-auto mt-4 opacity-70">
          Our web development portfolio showcases projects that balance functionality and design. Browse through our recent work.
        </p>
      </div>

      <div className="space-y-20">
        {projManProjects.map((project, idx) => (
          <motion.div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold">
                {project.title}
              </h2>
              <p className="opacity-90 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="text-sm mt-4 space-y-1">
                <p>
                  <strong>Project Date:</strong> {project.date}
                </p>
                <p>
                  <strong>Client:</strong> {project.client}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-border/20 dark:bg-border/40 text-xs sm:text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
