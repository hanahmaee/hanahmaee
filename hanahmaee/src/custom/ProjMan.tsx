"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECT_MANAGEMENT } from "@/app/Portfolio/portfolioConst";
import { AiOutlineZoomIn } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

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
      className="text-black dark:text-white w-full px-4 pt-20 pb-20 max-w-7xl mx-auto"
    >
      <div className="text-center mb-18">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-tight text-primary"
        >
          Project Management Gallery
        </motion.h1>
      </div>

      {/* Grid of project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {PROJECT_MANAGEMENT.map((project, idx) => (
          <motion.div
            key={idx}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
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
              <h2 className="text-xl font-bold text-primary">{project.title}</h2>
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
            className="relative bg-white dark:bg-neutral-900 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Exit button */}
            <button
              onClick={() => {
                setSelectedProject(null);
                setZoomedScreenshot(null);
              }}
              className="absolute top-4 right-4 text-xl text-neutral-500 hover:text-red-500 transition border border-neutral-400 rounded-full p-1 bg-white dark:bg-neutral-900"
              aria-label="Close modal"
            >
              <RxCross2 />
            </button>

            <h2 className="text-2xl font-bold text-primary">{selectedProject.title}</h2>
            <p className="text-sm border-l-4 border-primary pl-3 mt-2">
              <strong>Note:</strong> The materials displayed in this project are for illustrative purposes only. Due to confidentiality and privacy agreements, actual project data and sensitive information have been excluded. Sample or placeholder documents have been used to demonstrate the structure and workflow of the project management process.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {selectedProject.screenshots.map((src: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setZoomedScreenshot(src)}
                  className="group relative border rounded-xl overflow-hidden transition-all"
                >
                  <Image
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    width={800}
                    height={450}
                    className="h-auto w-full max-w-full object-contain"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-sm font-medium">
                    <AiOutlineZoomIn className="text-3xl mb-1" />
                    Zoom In
                  </div>
                </button>
              ))}
            </div>
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
            className="relative w-full max-w-[90vw] max-h-[90vh] overflow-auto rounded-xl bg-black p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Exit button */}
            <button
              onClick={() => setZoomedScreenshot(null)}
              className="absolute top-4 right-4 text-white text-xl hover:text-red-400 transition border border-white rounded-full p-1 bg-black"
              aria-label="Close image"
            >
              <RxCross2 />
            </button>

            <Image
              src={zoomedScreenshot}
              alt="Zoomed Screenshot"
              width={1200}
              height={800}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      )}
    </main>
  );
}
