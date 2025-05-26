"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { ModeToggle } from "@/custom/dark_toggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest("header") && isOpen) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:py-4">
        {/* Logo + Site Name */}
        <Link href="/" className="flex items-center space-x-2" tabIndex={0}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <span className="font-bold text-lg text-black dark:text-white">
            Hanahmaee
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex space-x-8 items-center text-base font-medium"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                  setIsOpen(false);
                }}
                className="relative text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all
                after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                tabIndex={0}
              >
                {link.label}
              </a>
            );
          })}
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RiCloseFill size={30} /> : <HiOutlineMenu size={30} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                  setIsOpen(false);
                }}
                className="block py-2 text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                tabIndex={0}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <ModeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
