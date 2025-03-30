"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Venue() {
  return (
    <div className="h-[50rem] w-full flex items-center justify-center py-12">
      <PinContainer
        title="Dr. B.C. Roy Engineering College, Durgapur"
        href="https://maps.app.goo.gl/example" // Use shortened Google Maps URL
      >
        <div className="flex flex-col p-4 w-[32rem] h-[32rem]">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-6">
            Venue Location
          </h3>
          <div className="flex-1 w-full h-full rounded-xl overflow-hidden border-2 border-white/20 bg-black">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.825587768022!2d87.339118!3d23.544417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7702b5678153d%3A0x4ff5ac811ba3184b!2sDr.%20B.%20C.%20Roy%20Engineering%20College!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="text-center text-slate-400 mt-4 text-sm">
            Click to view on Google Maps
          </p>
        </div>
      </PinContainer>
    </div>
  );
}