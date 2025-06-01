"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "Web Development",
    description:
      "Creates websites that are functional and user-friendly. Focuses on user needs through wireframes and prototypes.",
    icon: "/web.jpg",
    link: "/portfolio/web-development",
    colSpan: "md:col-span-4", // Top left (wide)
  },
  {
    title: "Project Management",
    description:
      "Manages tasks and timelines to keep projects on track and organized.",
    icon: "/web.jpg",
    link: "/portfolio/project-management",
    colSpan: "md:col-span-2", // Top right (narrow)
  },
  {
    title: "Software Testing",
    description:
      "Tests software to identify bugs and ensure everything works smoothly.",
    icon: "/web.jpg",
    link: "/portfolio/software-testing",
    colSpan: "md:col-span-2", // Bottom left (narrow)
  },
  {
    title: "UI/UX Design",
    description:
      "Designs modern interfaces with a focus on user experience. Aims to make interactions simple, easy to navigate, and intuitive.",
    icon: "/web.jpg",
    link: "/portfolio/mobile-development",
    colSpan: "md:col-span-4", // Bottom right (wide)
  },
];

export default function Portfolio() {
  const router = useRouter();

  return (
    <main className="scroll-smooth w-full dark:bg-background px-4 pt-24 max-w-7xl mx-auto">
      <section
        id="portfolio"
        className="min-h-screen flex flex-col items-center pt-24 px-4 max-w-7xl mx-auto"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-center mb-6">Portfolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                onClick={() => router.push(item.link)}
                className={`col-span-1 ${item.colSpan} cursor-pointer rounded-2xl flex flex-col justify-between overflow-hidden dark:bg-[#0d0c0a] 
                border-border/40 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_0_var(--primary)]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="relative w-full h-40 md:h-52">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
