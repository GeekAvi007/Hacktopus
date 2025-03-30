"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Timeline as TimelineComponent } from "./ui/timeline"; // Rename imported Timeline to avoid conflicts

const timelineData = [
    {
      title: "Hackathon Finalizing - 25/03/2025",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          Finalizing all event details, partnerships, and challenge statements for the hackathon.
        </p>
      ),
    },
    {
      title: "Registrations Open - 26/03/2025",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          Hackathon registrations begin. Participants can sign up and form teams.
        </p>
      ),
    },
    {
      title: "Registrations Close - 19/04/2025",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          The registration period ends. Final participant list is confirmed.
        </p>
      ),
    },
    {
      title: "Online Round 1 - 20/04/2025",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          The first round of the hackathon begins online. Teams submit their initial solutions.
        </p>
      ),
    },
    {
      title: "Results Announcement - 05/05/2025",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          Results of the online round are announced. Selected teams move to the final round.
        </p>
      ),
    },
    {
      title: "Offline Round 2 (Finals) - 10/05/2025",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          The top teams compete in the final offline round, showcasing their solutions to judges.
        </p>
      ),
    },
  ];
  

export function TimelineSection() { // Renamed to avoid conflict
  return (
    <div className="w-full relative overflow-hidden m-2.5">
      <div className="m-2.5">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <TimelineComponent data={timelineData} /> {/* Use the renamed import */}
      </div>
    </div>
  );
}
