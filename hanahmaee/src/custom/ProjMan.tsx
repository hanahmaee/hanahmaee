"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECT_MANAGEMENT } from "@/app/Portfolio/portfolioConst";

// Define the type locally (optional but useful for TypeScript)
type ProjectManagementItem = {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
  tags: string[];
  screenshots: string[];
};

export default function ProjectManagementSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectManagementItem | null>(null);
  const [zoomedScreenshot, setZoomedScreenshot] = useState<string | null>(null);

  return (
    <main
      id="project-management"
      className="text-black dark:text-white w-full px-4 pt-28 pb-20 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-tight"
        >
          Project Management Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm mt-4 max-w-2xl mx-auto opacity-70"
        >
          Documentation, timelines, and tools used in planning and executing our projects.
        </motion.p>
      </div>

      {/* Grid of project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECT_MANAGEMENT.map((project, idx) => (
          <motion.div
            key={idx}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="cursor-pointer border dark:border-neutral-800 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_15px_0_var(--primary)] transition"
          >
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm opacity-80 mt-2">{project.description}</p>
              <p className="text-xs mt-2 opacity-70">
                <strong>Project Date:</strong> {project.date}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal with screenshots */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => {
            setSelectedProject(null);
            setZoomedScreenshot(null);
          }}
        >
          <div
            className="bg-white dark:bg-neutral-900 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold">{selectedProject.title}</h2>
            <p className="text-sm opacity-80">{selectedProject.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProject.screenshots.map((src: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setZoomedScreenshot(src)}
                  className="w-full aspect-video relative rounded-xl overflow-hidden border hover:ring-2 hover:ring-primary transition"
                >
                  <Image
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 text-sm underline text-primary"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Zoomed-in screenshot view */}
      {zoomedScreenshot && (
        <div
          className="fixed inset-0 z-[60] bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setZoomedScreenshot(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomedScreenshot}
              alt="Zoomed Screenshot"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      )}
    </main>
  );
}
