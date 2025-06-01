"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Web Development",
    description:
      "Creates websites that are functional and user-friendly. Focuses on user needs through wireframes and prototypes.",
    href: "/webdev",  // changed
    image: "/web.jpg",
    delay: 0,
    colSpan: "md:col-span-4",
  },
  {
    title: "Project Management",
    description:
      "Manages tasks and timelines to keep projects on track and organized.",
    href: "/projman",  // changed
    image: "/web.jpg",
    delay: 0.1,
    colSpan: "md:col-span-2",
  },
  {
    title: "Software Testing",
    description:
      "Tests software to identify bugs and ensure everything works smoothly.",
    href: "/testing",  // changed
    image: "/web.jpg",
    delay: 0.2,
    colSpan: "md:col-span-2",
  },
  {
    title: "UI/UX Design",
    description:
      "Designs modern interfaces focused on user experience. Aims to make interactions simple and intuitive.",
    href: "/ui-ux",  // changed
    image: "/web.jpg",
    delay: 0.3,
    colSpan: "md:col-span-4",
  },
];

function PortfolioCard({
  title,
  description,
  href,
  image,
  delay,
  colSpan,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  delay: number;
  colSpan: string;
}) {
  return (
    <Link
      href={href}
      className={`col-span-1 ${colSpan} cursor-pointer rounded-2xl flex flex-col justify-between overflow-hidden dark:bg-[#0d0c0a] 
      border border-border/40 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_0_var(--primary)]`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className="w-full flex flex-col justify-between"
      >
        <div className="relative w-full h-40 md:h-52">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2 text-primary">{title}</h3>
          <p className="text-sm opacity-90 leading-relaxed break-words">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <main className="scroll-smooth w-full dark:bg-background px-4 pt-24 max-w-7xl mx-auto">
      <section
        id="portfolio"
        className="min-h-screen flex flex-col items-center pt-24 px-4 max-w-7xl mx-auto"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-center mb-6">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
