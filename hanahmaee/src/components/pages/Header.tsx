"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { ModeToggle } from "@/custom/dark_toggle";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-background shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative font-medium text-foreground hover:text-primary transition-all after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RiCloseFill size={30} /> : <HiOutlineMenu size={30} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-md font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
