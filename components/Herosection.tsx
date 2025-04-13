"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";

function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const endDate = new Date("April 17, 2025 23:59:00").getTime();
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero Wrapper */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 md:py-0">
        <BackgroundBeams className="absolute inset-0 z-0" />

        <div className="relative z-10 w-full max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center items-center mb-10 mt-28 md:mt-40">
            <img
              src="/logo.png"
              alt="Your Logo"
              className="w-[300px] md:w-[400px] h-auto"
            />
          </div>

          {/* Countdown */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-semibold text-neutral-300 mb-4"
          >
            Countdown to Hacktopus 2k25
          </motion.h3>

          <div className="flex justify-center gap-3 sm:gap-5 flex-wrap mb-8">
            {["days", "hours", "minutes", "seconds"].map((unit, i) => (
              <motion.div
                key={unit}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1d1c20] border border-white/[0.08] rounded-lg p-3 sm:p-4 text-center min-w-[70px]"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {timeLeft[unit as keyof typeof timeLeft]}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {unit.toUpperCase()}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <p className="font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto mb-4">
            Join us for the most exciting hackathon of the year. Collaborate,
            innovate, and build amazing projects!
          </p>

          {/* Register Button */}
          <div className="mt-4">
            <Link href="https://unstop.com/o/ui1fQ6F">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
