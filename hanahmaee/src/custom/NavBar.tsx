"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/custom/dark_toggle";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-background shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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

        {/* Theme Toggle Button */}
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
