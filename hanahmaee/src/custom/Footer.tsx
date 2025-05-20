"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="font-semibold text-lg text-foreground">
            Hanah Mae Espineda
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-muted-foreground">
          <Link
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href="mailto:youremail@example.com"
            className="hover:text-primary transition-colors"
          >
            <FaEnvelope size={20} />
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center py-4 text-sm text-muted-foreground border-t">
        &copy; {year} Hanah Mae Espineda. All rights reserved.
      </div>
    </footer>
  );
}
