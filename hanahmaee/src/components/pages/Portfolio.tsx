// Portfolio.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBug } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";

const portfolioItems = [
  {
    titleLine1: "Web and Mobile",
    titleLine2: "Application Development",
    description:
      "Creates websites that are functional and user-friendly. Focuses on user needs through wireframes and prototypes.",
    href: "/webdev",
    delay: 0,
    colSpan: "md:col-span-4",
    icon: <FaLaptopCode className="text-primary text-3xl md:text-4xl" />,
  },
  {
    titleLine1: "Project",
    titleLine2: "Management",
    description: "Manages tasks and timelines to keep projects on track and organized.",
    href: "/projman",
    delay: 0.1,
    colSpan: "md:col-span-2",
    icon: <BsKanban className="text-primary text-3xl md:text-4xl" />,
  },
  {
    titleLine1: "Software",
    titleLine2: "Testing",
    description: "Tests software to identify bugs and ensure everything works smoothly.",
    href: "/testing",
    delay: 0.2,
    colSpan: "md:col-span-2",
    icon: <TbBug className="text-primary text-3xl md:text-4xl" />,
  },
  {
    titleLine1: "UI AND UX DESIGN",
    titleLine2: "PROJECTS",
    description:
      "Designs modern interfaces focused on user experience. Aims to make interactions simple and intuitive.",
    href: "/ui-ux",
    delay: 0.3,
    colSpan: "md:col-span-4",
    icon: <MdOutlineDesignServices className="text-primary text-3xl md:text-4xl" />,
  },
];

function PortfolioCard({
  titleLine1,
  titleLine2,
  description,
  href,
  delay,
  colSpan,
  icon,
}: {
  titleLine1: string;
  titleLine2: string;
  description: string;
  href: string;
  delay: number;
  colSpan: string;
  icon: React.ReactNode;
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
        className="w-full flex flex-col justify-between h-full"
      >
        {/* Icon + Title */}
        <div className="w-full px-6 pt-6 pb-2">
          <div className="flex items-center gap-3 mb-4">
            {icon}
            <span className="uppercase tracking-widest text-xs text-primary">Category</span>
          </div>
          <h3 className="text-[1.75rem] md:text-[2.5rem] leading-tight font-extrabold text-primary font-sans uppercase">
            {titleLine1}<br />{titleLine2}
          </h3>
        </div>

        {/* Description */}
        <div className="px-6 pb-6 pt-2 flex-grow flex flex-col justify-start">
          <p className="text-base opacity-90 leading-relaxed">{description}</p>
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
          <h2 className="text-5xl font-bold text-center mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
