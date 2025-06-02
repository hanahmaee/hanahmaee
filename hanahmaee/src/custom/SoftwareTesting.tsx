"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { SOFTWARE_TESTING, TEST_PLANS } from "@/app/Portfolio/portfolioConst";

type TestCaseItem = {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
  tags: string[];
  screenshots: string[];
};

type TestPlanItem = {
  title: string;
  description: string;
  date: string;
  image: string;
  pdf: string;
  tags: string[];
};

const FadeInOut = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px", amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration: 0.6, delay, ease: "easeInOut" }}
    >
      <div>{children}</div>
    </motion.div>
  );
};

export default function SoftwareTestingSection() {
  const [selectedTest, setSelectedTest] = useState<TestCaseItem | null>(null);
  const [zoomedScreenshot, setZoomedScreenshot] = useState<string | null>(null);

 const renderPlanCard = (plan: TestPlanItem, idx: number) => (
  <FadeInOut key={idx} delay={idx * 0.15}>
    <a
      href={plan.pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="group border dark:border-neutral-800 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_15px_0_var(--primary)] transition flex flex-col h-full"
    >
      {/* Fixed Image Section */}
      <div className="relative w-full h-64 flex-shrink-0">
        <Image
          src={plan.image}
          alt={plan.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-4 flex-1">
        {/* Title + Description with fixed min height */}
        <div className="mb-2 min-h-[6rem]">
          <h2 className="text-xl font-semibold leading-snug mb-1">{plan.title}</h2>
          <p className="text-sm opacity-80 line-clamp-3">{plan.description}</p>
        </div>

        {/* Bottom Info (Date + Tags) */}
        <div className="space-y-2">
          <p className="text-xs opacity-70">
            <strong>Test Date:</strong> {plan.date}
          </p>
          <div className="flex flex-wrap gap-2">
            {plan.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  </FadeInOut>
);

  const renderTestCaseCard = (test: TestCaseItem, idx: number) => (
    <FadeInOut key={idx} delay={idx * 0.15}>
      <div
        onClick={() => setSelectedTest(test)}
        className="cursor-pointer border dark:border-neutral-800 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_15px_0_var(--primary)] transition flex flex-col h-full"
      >
        <div className="relative w-full h-64 flex-shrink-0">
          <Image
            src={test.image}
            alt={test.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-4 grid grid-rows-[auto_1fr_auto_auto] gap-2 h-full">
          <h2 className="text-xl font-semibold min-h-[3.5rem] leading-snug">{test.title}</h2>
          <p className="text-sm opacity-80">{test.description}</p>
          <p className="text-xs opacity-70"><strong>Test Date:</strong> {test.date}</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {test.tags.map((tag, i) => (
              <span key={i} className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeInOut>
  );

  return (
    <main id="software-testing" className="text-black dark:text-white w-full px-4 pt-28 pb-20 max-w-7xl mx-auto">
      <FadeInOut>
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tight">Software Testing Gallery</h1>
          <p className="text-sm mt-4 max-w-2xl mx-auto opacity-70">
            Test plans, defect tracking, automation scripts, and results from various software testing projects.
          </p>
        </div>
      </FadeInOut>

      <section className="mb-20">
        <FadeInOut>
          <h2 className="text-3xl font-semibold mb-8 text-left">Test Plans</h2>
        </FadeInOut>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {TEST_PLANS.map(renderPlanCard)}
        </div>
      </section>

      <section>
        <FadeInOut>
          <h2 className="text-3xl font-semibold mb-8 text-left">Test Cases</h2>
        </FadeInOut>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SOFTWARE_TESTING.map(renderTestCaseCard)}
        </div>
      </section>

      {/* Modal: Test Case Details */}
      {selectedTest && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => {
            setSelectedTest(null);
            setZoomedScreenshot(null);
          }}
        >
          <div
            className="bg-white dark:bg-neutral-900 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold">{selectedTest.title}</h2>
            <p className="text-sm opacity-80">{selectedTest.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {selectedTest.screenshots.map((src: string, i: number) => (
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

            <button onClick={() => setSelectedTest(null)} className="mt-4 text-sm underline text-primary">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Zoom View */}
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
