"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ModeToggle } from "@/custom/dark_toggle";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-background px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Back to Home Button */}
        <Link href="/" passHref>
          <button className="inline-flex items-center gap-2 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white transition px-4 py-2 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary">
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </Link>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
}
