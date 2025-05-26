"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "Web Development",
    description: "Solving problems with user-centric methods, wireframes & prototyping.",
    icon: "/web.jpg",
    span: "md:col-span-2 md:row-span-2",
    link: "/portfolio/web-development",
  },
  {
    title: "Project Management",
    description: "Built performant, SEO-optimized apps with SSR & API routes.",
    icon: "/web.jpg",
    span: "md:col-span-2 md:row-span-1",
    link: "/portfolio/project-management",
  },
  {
    title: "Software Testing",
    description: "Rapid UI development using utility-first classes.",
    icon: "/web.jpg",
    span: "md:col-span-1 md:row-span-1",
    link: "/portfolio/software-testing",
  },
  {
    title: "Mobile Development",
    description: "Led cross-functional teams to deliver client-ready products.",
    icon: "/web.jpg",
    span: "md:col-span-1 md:row-span-1",
    link: "/portfolio/mobile-development",
  },
  {
    title: "UX Research",
    description: "Conducted user interviews, A/B tests and behavior analytics.",
    icon: "/web.jpg",
    span: "md:col-span-2 md:row-span-1",
    link: "/portfolio/ux-research",
  },
  {
    title: "Certification and Badges",
    description: "Positive feedback on shipped designs",
    icon: "/web.jpg",
    span: "md:col-span-2 md:row-span-1",
    link: "/portfolio/certification",
  },
];

export default function Portfolio() {
  const router = useRouter();

  return (
   <main className="scroll-smooth w-full dark:bg-background px-4 pt-24 pb-12 max-w-7xl mx-auto">
      <section
        id="portfolio"
        className="min-h-screen flex flex-col items-center pt-24 px-4 max-w-7xl mx-auto"
      >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => router.push(item.link)}
              className={`cursor-pointer rounded-2xl flex flex-col justify-between overflow-hidden border border-border/40 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_0_var(--primary)] ${item.span}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="relative w-full h-40 md:h-full">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
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
