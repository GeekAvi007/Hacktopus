"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuItem, Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  if (pathname === "/patient-details") {
    return null;
  }

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-transparent",
        className
      )}
    >
      <BackgroundBeams className="absolute inset-0 z-0" />
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>

        <button onClick={() => scrollToSection("timeline")}>
          <MenuItem setActive={setActive} active={active} item="Timeline" />
        </button>

        <button onClick={() => scrollToSection("theme")}>
          <MenuItem setActive={setActive} active={active} item="Theme" />
        </button>

        <button onClick={() => scrollToSection("faq")}>
          <MenuItem setActive={setActive} active={active} item="FAQ" />
        </button>
      </Menu>
    </div>
  );
}

export default Navbar;
