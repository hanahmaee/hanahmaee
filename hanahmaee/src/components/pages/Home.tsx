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
  FaPalette,
  FaFileSignature,
  FaLaptopCode,
} from "react-icons/fa";
import type { IconType } from "react-icons"; // ✅ For icon typing

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
      {/* HOME INTRO */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-8 mb-10 pt-[80px] -mt-[80px]"
      >
        {/* TEXT */}
        <motion.div
          className="order-2 md:order-1 flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Hello! I'm <span className="text-primary">Hanah Mae...</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 dark:text-yellow-400 min-h-[40px]">
            {text}
            <span className="inline-block animate-pulse">|</span>
          </h2>
          <p className="max-w-xl text-muted-foreground text-base lg:text-xl mx-auto md:mx-0">
            I love building thoughtful user experiences and managing creative
            projects with clarity and heart.
          </p>

          <div>
            <a
              href="#portfolio"
              className="text-yellow-500 font-semibold px-6 py-2 border border-yellow-500 rounded-full transition-shadow hover:shadow-[0_0_10px_rgba(234,179,8,0.8)]"
            >
              &lt;View Projects&gt;
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="order-1 md:order-2 relative group flex items-center justify-center"
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
              className="relative w-full h-full duration-700 ease-in-out transform"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "none",
              }}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden border shadow-lg group-hover:shadow-[0_0_20px_rgba(234,179,8,0.8)] transition-shadow duration-300"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Image
                  src="/profile-front.png"
                  alt="Front"
                  fill
                  className="object-cover"
                />
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden border shadow-lg group-hover:shadow-[0_0_20px_rgba(234,179,8,0.8)] transition-shadow duration-300"
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
      </section>

{/* SKILL CARDS */}
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-6 mb-4 px-4">
  {[
    {
      title: "UI/UX Design",
      desc: "Designing intuitive, accessible, and beautiful user interfaces with tools like Figma and Adobe XD.",
      icon: FaPalette,
    },
    {
      title: "Project Management",
      desc: "Leading teams, managing timelines, and delivering on goals using Agile, Scrum, and Kanban practices.",
      icon: FaFileSignature,
    },
    {
      title: "Web Development",
      desc: "Building responsive, performant, and scalable web apps with modern tech stacks (React, Node, etc).",
      icon: FaLaptopCode,
    },
  ].map((card, idx) => {
    const Icon = card.icon;
    return (
      <motion.div
        key={idx}
        className="border-gray-200 shadow-xl rounded-lg p-6 text-center transition-shadow duration-100 hover:shadow-[0_0_25px_5px_rgba(250,204,21,0.7)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
      >
        <Icon className="text-yellow-400 w-12 h-12 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
        <p className="text-gray-400 text-base">{card.desc}</p>
      </motion.div>
    );
  })}
</section>

 {/* ABOUT SECTION */}
<section
  id="about"
  className="min-h-screen flex flex-col items-center pt-24 px-4 max-w-7xl mx-auto"
>
  <h2 className="text-4xl font-bold text-center mb-10 text-foreground">
    About Me
  </h2>

<div className="flex flex-col lg:flex-row gap-6 w-full items-center">
    {/* LEFT: Profile Image (Centered and responsive) */}
    <motion.div
      className="w-full lg:w-[45%] flex justify-center"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px]">
        <Image
          src="/profile-front.png"
          alt="Hanah Mae"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>

    {/* RIGHT: Education Timeline */}
    <div className="w-full lg:w-[55%] flex flex-col gap-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-yellow-400">
      {[
        {
          school: "Bulacan State University",
          level: "Bachelor of Science in Information Technology",
          year: "2021 – Present",
          major: "Major in Web and Mobile Development",
          awards: [
            "Dean’s Lister & President’s Lister",
            "Capstone: VR game for computer networking",
          ],
        },
        {
          school: "Lord's Angels Montessori School",
          level: " ",
          year: "2019 – 2021",
          major: "Science, Technology, Engineering, and Mathematics",
          awards: [
            "With High Honors",
            "Research presenter in regional fair",
          ],
        },
        {
          school: "Malolos City High School - Santisima Trinidad",
          level: "Secondary Education",
          year: "2015 – 2019",
          major: " ",
          awards: [
            "Valedictorian",
            "High Honors",
            "Leadership roles in student council",
          ],
        },
      ].map((edu, index) => (
          <motion.div
            key={index}
            className="relative bg-card w-full max-w-[650px] shadow-xl hover:shadow-[0_0_25px_5px_rgba(250,204,21,0.7)]
            rounded-lg px-6 py-4 pl-10 transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-between items-start text-xl text-foreground font-semibold">
              <span className="whitespace-nowrap">{edu.school}</span>
              <span className="text-base whitespace-nowrap">{edu.year}</span>
            </div>

            <div className="flex justify-between text-base text-muted-foreground">
              <span>{edu.level || "—"}</span>
            </div>

            <div className="flex justify-between text-base text-muted-foreground mb-2">
              <span>{edu.major || "—"}</span>
            </div>

            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
              {edu.awards.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>

                ))}
              </div>
            </div>
          </section>

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
        title: "Si Daks at Juts",
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


      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center max-w-xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">
          Contact Me
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-3 rounded-md hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
