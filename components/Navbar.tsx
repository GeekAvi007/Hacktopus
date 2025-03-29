"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Correct import for App Router
import { HoveredLink, MenuItem, Menu  } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname(); // Correct method for route detection

  // Deactivate navbar on '/patient-details' route
  if (pathname === "/patient-details") {
    return null;
  }

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-transparent", className)}
    >
      <BackgroundBeams className="absolute inset-0 z-0" />
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Timeline">

        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Theme">
        </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Team"></MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
