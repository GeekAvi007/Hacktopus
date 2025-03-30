"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Venue() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title="Dr. B.C. Roy Engineering College"
        href="https://www.google.com/maps/place/Dr.+B.+C.+Roy+Engineering+College/@23.5444187,87.3416123,18.75z/data=!4m14!1m7!3m6!1s0x39f7702b5678153d:0x4ff5ac811ba3184b!2sDr.+B.+C.+Roy+Engineering+College!8m2!3d23.544417!4d87.3416929!16s%2Fm%2F03cszzz!3m5!1s0x39f7702b5678153d:0x4ff5ac811ba3184b!8m2!3d23.544417!4d87.3416929!16s%2Fm%2F03cszzz?entry=ttu"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Hacktopus 2k25 Venue
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Official venue for this year's hackathon
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden border border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.825587768022!2d87.339118!3d23.544417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7702b5678153d%3A0x4ff5ac811ba3184b!2sDr.%20B.%20C.%20Roy%20Engineering%20College!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}