"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineZoomIn } from "react-icons/ai";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css"; // keep this import for base styles
import { SOFTWARE_TESTING, TEST_PLANS } from "@/app/Portfolio/portfolioConst";

// Add this CSS override somewhere globally (e.g., in globals.css or a style tag):
// .medium-zoom-overlay { background-color: transparent !important; }

const FadeInOut = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <div>{children}</div>
    </motion.div>
  );
};

export default function SoftwareTestingSection() {
  const [selectedTest, setSelectedTest] = useState<TestCaseItem | null>(null);
  const [activeTab, setActiveTab] = useState<"plans" | "cases">("plans");
  const [activeScreenshotTab, setActiveScreenshotTab] = useState<"sheet" | "automation">("sheet");

  // Controlled zoom index state
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  // Refs to cards for equal height calculation
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  const isDesktop = () => typeof window !== "undefined" && window.innerWidth >= 768;

  useEffect(() => {
    function updateHeights() {
      if (!cardRefs.current.length) return;

      if (!isDesktop()) {
        setCardHeight(null);
        return;
      }

      let maxHeight = 0;
      cardRefs.current.forEach((card) => {
        if (card) {
          card.style.height = "auto";
          const height = card.getBoundingClientRect().height;
          if (height > maxHeight) maxHeight = height;
        }
      });

      setCardHeight(maxHeight + 32);
    }

    updateHeights();

    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, [activeTab, SOFTWARE_TESTING, TEST_PLANS]);

  const getCardStyle = () =>
    cardHeight && isDesktop() ? { height: cardHeight } : { height: "auto" };

  const handleZoomChange = useCallback(
    (shouldZoom: boolean) => {
      if (!shouldZoom) setZoomedIndex(null);
    },
    []
  );

  const screenshots =
    selectedTest && activeScreenshotTab === "sheet"
      ? selectedTest.sheetScreenshots || []
      : selectedTest && activeScreenshotTab === "automation"
      ? selectedTest.automationScreenshots || []
      : [];

  const goNext = () => {
    if (zoomedIndex === null) return;
    setZoomedIndex((zoomedIndex + 1) % screenshots.length);
  };

  const goPrev = () => {
    if (zoomedIndex === null) return;
    setZoomedIndex((zoomedIndex - 1 + screenshots.length) % screenshots.length);
  };

  const renderPlanCard = (plan: TestPlanItem, idx: number) => (
    <FadeInOut key={idx} delay={idx * 0.15}>
      <a
        href={plan.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="group border dark:border-neutral-800 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_15px_0_var(--primary)] transition flex flex-col h-full"
        ref={(el) => (cardRefs.current[idx] = el)}
        style={getCardStyle()}
      >
        <div className="relative w-full h-64 flex-shrink-0">
          <Image
            src={plan.image}
            alt={plan.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-between p-4 flex-1">
          <div className="mb-2">
            <h2 className="text-xl font-bold leading-snug mb-1 text-primary">{plan.title}</h2>
            <p className="text-sm opacity-80">{plan.description}</p>
          </div>
          <div className="space-y-2 mt-2">
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
        ref={(el) => (cardRefs.current[idx] = el)}
        style={getCardStyle()}
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
          <h2 className="text-xl font-bold leading-snug text-primary">{test.title}</h2>
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
    <main id="software-testing" className="text-black dark:text-white w-full px-4 pt-20 pb-20 max-w-7xl mx-auto">
      <FadeInOut>
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-primary">Software Testing Gallery</h1>
          <div className="mt-8 inline-flex bg-neutral-100 dark:bg-neutral-800 border dark:border-neutral-700 rounded-xl p-1">
            <button
              onClick={() => setActiveTab("plans")}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200 border ${
                activeTab === "plans"
                  ? "bg-primary text-white border-primary"
                  : "border-transparent hover:border-primary text-black dark:text-white"
              }`}
            >
              Test Plans
            </button>
            <button
              onClick={() => setActiveTab("cases")}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200 border ${
                activeTab === "cases"
                  ? "bg-primary text-white border-primary"
                  : "border-transparent hover:border-primary text-black dark:text-white"
              }`}
            >
              Test Cases
            </button>
          </div>
        </div>
      </FadeInOut>

      {activeTab === "plans" ? (
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {TEST_PLANS.map(renderPlanCard)}
          </div>
        </section>
      ) : (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {SOFTWARE_TESTING.map(renderTestCaseCard)}
          </div>
        </section>
      )}

      {/* Modal with screenshots */}
      {selectedTest && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => {
            setSelectedTest(null);
            setActiveScreenshotTab("sheet");
            setZoomedIndex(null);
          }}
        >
          <div
            className="relative bg-white dark:bg-neutral-900 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => {
                setSelectedTest(null);
                setActiveScreenshotTab("sheet");
                setZoomedIndex(null);
              }}
              className="absolute top-4 right-4 text-xl text-neutral-500 hover:text-red-500 transition"
              aria-label="Close modal"
            >
              <RxCross2 />
            </button>

            <h2 className="text-2xl font-bold text-primary">{selectedTest.title}</h2>
            <p className="text-sm border-l-4 border-primary pl-3 mt-2">
              <strong>Note:</strong> The screenshots displayed in this project are for illustrative purposes only. Due to confidentiality and privacy agreements, actual test data and sensitive content have been excluded. Sample or placeholder screenshots have been used to demonstrate the structure and workflow of the testing process.
            </p>

            {/* Tab Switch */}
            <div className="mt-6 text-center">
              <div className="inline-flex bg-neutral-100 dark:bg-neutral-800 border dark:border-neutral-700 rounded-xl p-1">
                <button
                  onClick={() => {
                    setActiveScreenshotTab("sheet");
                    setZoomedIndex(null);
                  }}
                  className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200 border ${
                    activeScreenshotTab === "sheet"
                      ? "bg-primary text-white border-primary"
                      : "border-transparent hover:border-primary text-black dark:text-white"
                  }`}
                >
                  Test Documentation
                </button>
                <button
                  onClick={() => {
                    setActiveScreenshotTab("automation");
                    setZoomedIndex(null);
                  }}
                  className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200 border ${
                    activeScreenshotTab === "automation"
                      ? "bg-primary text-white border-primary"
                      : "border-transparent hover:border-primary text-black dark:text-white"
                  }`}
                >
                  Test Automation
                </button>
              </div>
            </div>

            {/* Screenshots or Message */}
            <div className="mt-4">
              {screenshots.length === 0 ? (
                <p className="text-center text-sm text-neutral-500 italic">
                  {activeScreenshotTab === "sheet"
                    ? "No test cases created."
                    : "No test automation performed."}
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                  {screenshots.map((src, i) => (
                    <ControlledZoom
                      key={i}
                      isZoomed={zoomedIndex === i}
                      onZoomChange={handleZoomChange}
                      zoomMargin={40}
                      // Remove overlay background color by setting transparent here
                      overlayBgColorStart="transparent"
                      overlayBgColorEnd="transparent"
                    >
                      <div className="relative cursor-pointer rounded-xl overflow-hidden border group">
                        <img
                          src={src}
                          alt={`Screenshot ${i + 1}`}
                          className="w-full object-cover aspect-video"
                          loading="lazy"
                          style={{ width: "100%", height: "auto" }}
                          onClick={() => setZoomedIndex(i)}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-sm font-medium rounded-xl pointer-events-none">
                          <AiOutlineZoomIn className="text-3xl mb-1" />
                          Zoom In
                        </div>
                      </div>
                    </ControlledZoom>
                  ))}

                  {/* Navigation buttons */}
                  {zoomedIndex !== null && screenshots.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goPrev();
                        }}
                        aria-label="Previous screenshot"
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition z-50"
                      >
                        &#8592;
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goNext();
                        }}
                        aria-label="Next screenshot"
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition z-50"
                      >
                        &#8594;
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
