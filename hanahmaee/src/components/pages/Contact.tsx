"use client";

import { useEffect } from "react";

export default function Contact() {
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
