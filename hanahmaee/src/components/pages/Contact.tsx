"use client";

import { useEffect, useRef } from "react";
import { FaLinkedin, FaPhoneAlt, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = `${name}`;
    const body = `${message}`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hanahmaeespineda@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, "_blank");
  };

  const infoItems = [
    {
      icon: <FaLinkedin className="text-3xl text-primary mb-2" />,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/hanah-mae-espineda-053031339/",
      content: "Hanah Mae Espineda",
      clickable: true,
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-primary mb-2" />,
      title: "Phone Number",
      href: "tel:+639198313940",
      content: "+63 919 831 3940",
      clickable: false,
    },
    {
      icon: <FaGithub className="text-3xl text-primary mb-2" />,
      title: "GitHub",
      href: "https://github.com/hanahmaee",
      content: "@hanahmaee",
      clickable: true,
    },
    {
      icon: <FaEnvelope className="text-3xl text-primary mb-2" />,
      title: "Email",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=hanahmaeespineda@gmail.com&su=&body=`,
      content: "hanahmaeespineda@gmail.com",
      clickable: true,
    },
  ];

  return (
    <main className="scroll-smooth w-full dark:bg-background px-4 pt-24 max-w-7xl mx-auto">
      <section
        id="contact"
        className="flex flex-col items-center pt-20 px-4 max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-center mb-4">
          Get in Touch with Me!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-12 gap-12 w-full max-w-6xl items-center">
          {/* Info Cards */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infoItems.map((item, idx) => {
              const cardContent = (
                <div
                  className={`col-span-1 rounded-2xl flex flex-col justify-center items-center text-center overflow-hidden 
                    border-border/40 backdrop-blur-md shadow-lg transition-transform duration-300 
                    ${
                      // add hover and cursor-pointer if clickable or if phone (for hover only)
                      item.clickable
                        ? "cursor-pointer hover:scale-[1.03] hover:shadow-[0_0_20px_0_var(--primary)]"
                        : item.title === "Phone Number"
                        ? "hover:scale-[1.03] hover:shadow-[0_0_20px_0_var(--primary)]"
                        : ""
                    }
                    p-6 dark:bg-[#0d0c0a]`}
                >
                  {item.icon}
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <div className="text-sm text-primary underline">{item.content}</div>
                </div>
              );

              if (item.clickable) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cardContent}
                  </a>
                );
              }

              // For phone, not clickable, but still hover animation
              return (
                <div key={idx} aria-label={item.title}>
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Let's connect, send a message!
            </h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
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
