"use client";

import { useEffect } from "react";
import { FaLinkedin, FaPhoneAlt, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
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

  const infoItems = [
    {
      icon: <FaLinkedin className="text-3xl text-primary mb-2" />,
      title: "LinkedIn",
      content: (
        <a
          href="https://www.linkedin.com/in/hanah-mae-espineda-053031339/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Hanah Mae Espineda
        </a>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-primary mb-2" />,
      title: "Phone Number",
      content: (
        <a
          href="+63 919 831 3940"
          className="text-primary underline"
        >
          +63 919 831 3940
        </a>
      ),
    },
    {
      icon: <FaGithub className="text-3xl text-primary mb-2" />,
      title: "GitHub",
      content: (
        <a
          href="https://github.com/hanahmaee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          @hanahmaee
        </a>
      ),
    },
    {
      icon: <FaEnvelope className="text-3xl text-primary mb-2" />,
      title: "Email",
      content: (
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hanahmaeespineda@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          hanahmaeespineda@gmail.com
        </a>
      ),
    },
  ];

  return (
    <main className="scroll-smooth w-full dark:bg-background px-4 pt-24 max-w-7xl mx-auto">

      <section
        id="contact"
        className="flex flex-col items-center pt-20 px-4 max-w-7xl mx-auto"
      >
          <h2 className="text-5xl font-bold text-center mb-4">Get in Touch with Me!</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-12 gap-12 w-full max-w-6xl items-center">

        {/* Info Cards (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-6">
          {infoItems.map((item, idx) => (
            <div
              key={idx}
              className="col-span-1 cursor-pointer rounded-2xl flex flex-col justify-center items-center text-center overflow-hidden 
              border-border/40 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.03] 
              hover:shadow-[0_0_20px_0_var(--primary)] p-6 dark:bg-[#0d0c0a]"
            >
              {item.icon}
              <h3 className="font-bold text-lg">{item.title}</h3>
              <div className="text-sm">{item.content}</div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Let's connect, send a message!
          </h2>
            <form
              className="flex flex-col gap-6"
              action="https://formspree.io/f/yourformid" // <-- replace with your Formspree URL
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="p-3 dark:bg-[#0d0c0a] rounded-md focus:outline-none focus:ring-2 focus:ring-primary
                  border border-border/40 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.03]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email address"
                className="p-3 dark:bg-[#0d0c0a] rounded-md focus:outline-none focus:ring-2 focus:ring-primary
                  border border-border/40 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.03]"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="p-3 dark:bg-[#0d0c0a] rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none
                  border border-border/40 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.03]"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white font-semibold py-3 rounded-md hover:bg-opacity-90 transition
                  shadow-lg hover:scale-[1.03] duration-300"
              >
                Submit
              </button>
            </form>
        </div>
      </div>
      </section>
    </main>
  );
}
