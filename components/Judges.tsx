"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Our Esteemed Judging Panel`;

export function Judges() {
  return (
    <div className="px-4">
      <div className="text-bold text-center mb-8">
        <TextGenerateEffect words={words} />
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Judge 1 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[300px] sm:w-[22rem] h-auto rounded-xl p-4 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Debajit Mallick
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Software Engineer @P360, GDG Organizer
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3">
              <Image
                src="/IMG-20250413-WA0028.jpg"
                height={1000}
                width={1000}
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="Judge 1"
              />
            </CardItem>
            <div className="flex justify-start items-center mt-5">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                onClick={() => window.location.href = "https://www.linkedin.com/in/debajit-mallick/"}
              >
                Connect
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Judge 2 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[300px] sm:w-[22rem] h-auto rounded-xl p-4 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Imran Roshan
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              GDE - GCP, Senior Executive - Risk Advisory @Deloitte
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3">
              <Image
                src="/IMG-20250413-WA0030.jpg"
                height={1000}
                width={1000}
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="Judge 2"
              />
            </CardItem>
            <div className="flex justify-start items-center mt-5">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                onClick={() => window.location.href = "https://www.linkedin.com/in/imranfosec/"}
              >
                Connect
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Judge 3 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[300px] sm:w-[22rem] h-auto rounded-xl p-4 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Megh Deb
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Mentor @HackQuest, Professional Infra Engineer
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3">
              <Image
                src="/IMG-20250413-WA0031.jpg"
                height={1000}
                width={1000}
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="Judge 3"
              />
            </CardItem>
            <div className="flex justify-start items-center mt-5">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                onClick={() => window.location.href = "https://www.linkedin.com/in/megh-deb/"}
              >
                Connect
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[300px] sm:w-[22rem] h-auto rounded-xl p-4 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Soham Banerjee
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Software Engineer @HICD, GSOC 2025 Mentor, LFX 2024 MENTEE
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3">
              <Image
                src="/soh.png"
                height={1000}
                width={1000}
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="Judge 3"
              />
            </CardItem>
            <div className="flex justify-start items-center mt-5">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                 onClick={() => window.location.href = "https://www.linkedin.com/in/soham4abc/"}
              >
                Connect
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[300px] sm:w-[22rem] h-auto rounded-xl p-4 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Narendra Nath Chatterjee
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Android Engineer @Stockgro, Ex-Nykaa, Ex-TATA Neu
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3">
              <Image
                src="/IMG-20250413-WA0029.jpg"
                height={1000}
                width={1000}
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="Judge 3"
              />
            </CardItem>
            <div className="flex justify-start items-center mt-5">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                onClick={() => window.location.href = "https://www.linkedin.com/in/narendra-nath-chatterjee-8a7651133/"}
              >
                Connect
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
