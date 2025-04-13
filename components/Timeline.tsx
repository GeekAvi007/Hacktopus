"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Timeline as TimelineComponent } from "./ui/timeline";

const timelineData = [
  {
    title: "Hackathon Finalizing - 25/03/2025",
    content: (
      <p className="text-base font-semibold text-neutral-700 dark:text-neutral-300 text-4xl">
        Finalizing all event details, partnerships, and challenge statements for the hackathon.
      </p>
    ),
  },
  {
    title: "Registrations Open - 26/03/2025",
    content: (
      <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 text-4xl">
        Hackathon registrations begin. Participants can sign up and form teams.
      </p>
    ),
  },
  {
    title: "Registrations Close - 17/04/2025",
    content: (
      <p className="text-base font-medium text-neutral-700 dark:text-neutral-300 text-4xl">
        The registration period ends. Final participant list is confirmed.
      </p>
    ),
  },
  {
    title: "Problem Statement Release - 18/04/2025",
    content: (
      <p className="text-base font-semibold text-neutral-700 dark:text-neutral-300 text-4xl">
        The first round of the hackathon begins online. Teams submit their initial solutions.
      </p>
    ),
  },
  {
    title: "Online Round 1 PPT Submission - 18/04/2025 - 22/04/2025",
    content: (
      <p className="text-base text-neutral-700 dark:text-neutral-300 text-4xl">
        The first round of the hackathon begins online. Teams submit their initial solutions.
      </p>
    ),
  },
  {
    title: "Round 1 Results Announcement - 24/04/2025",
    content: (
      <p className="text-base font-medium text-neutral-700 dark:text-neutral-300 text-4xl">
        Results of the online round are announced. Selected teams move to the final round.
      </p>
    ),
  },
  {
    title: "Offline Round 2 (Finals) - 13/05/2025",
    content: (
      <p className="text-lg font-bold text-neutral-700 dark:text-neutral-300 text-4xl">
        The top teams compete in the final offline round, showcasing their solutions to judges.
      </p>
    ),
  },
];

export function TimelineSection() {
  return (
    <div className="w-full relative overflow-hidden pt-2 pb-4 px-2"> {/* minimal top padding */}
      <div className="mt-2 relative"> {/* minimized top margin */}
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <TimelineComponent data={timelineData} />
        </div>
      </div>
    </div>
  );
}
