// app/portfolio/portfolio.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    title: "Design Thinking",
    description: "Solving problems with user-centric methods, wireframes & prototyping.",
    icon: "/skills/design.png",
    span: "col-span-2 md:row-span-2",
  },
  {
    title: "React & Next.js",
    description: "Built performant, SEO-optimized apps with SSR & API routes.",
    icon: "/skills/code.png",
    span: "col-span-2 md:row-span-1",
  },
  {
    title: "Tailwind CSS",
    description: "Rapid UI development using utility-first classes.",
    icon: "/skills/tailwind.png",
    span: "col-span-1 md:row-span-1",
  },
  {
    title: "Team Management",
    description: "Led cross-functional teams to deliver client-ready products.",
    icon: "/skills/team.png",
    span: "col-span-1 md:row-span-1",
  },
  {
    title: "UX Research",
    description: "Conducted user interviews, A/B tests and behavior analytics.",
    icon: "/skills/research.png",
    span: "col-span-2 md:row-span-1",
  },
  {
    title: "95%",
    description: "Positive feedback on shipped designs",
    icon: "",
    span: "col-span-2 md:row-span-1",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden ${item.span} bg-primary`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="opacity-80 mb-4"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90 mt-1">{item.description}</p>
              </div>
              {item.cta && (
                <button className="mt-4 text-sm font-medium px-4 py-2 rounded-full bg-white text-black w-fit">
                  Start Now →
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
