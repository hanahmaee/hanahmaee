"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  // Smooth scroll for internal anchor links
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
    <main className="w-full bg-white dark:bg-background px-4 pt-16 pb-12 max-w-7xl mx-auto">
      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="min-h-screen flex flex-col justify-center px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {[
            {
              id: 1,
              title: "???",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              image: "/1.JPG",
            },
            {
              id: 2,
              title: "???",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              image: "/2.JPG",
            },
            {
              id: 3,
              title: "???",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              image: "/3.JPG",
            },
            {
              id: 4,
              title: "???",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              image: "/potatoArtboard 4.jpg",
            },
            {
              id: 5,
              title: "???",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              image: "/potatoArtboard 3.jpg",
            },
            {
              id: 6,
              title: "???",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              image: "/potatoArtboard 2.jpg",
            },
          ].map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
