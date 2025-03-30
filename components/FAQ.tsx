"use client";

import { useState } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight"; // Import the spotlight effect

const faqs = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where developers, designers, and innovators collaborate intensively to build projects, solve problems, and create new solutions within a limited time frame.",
  },
  {
    question: "Who can participate in a hackathon?",
    answer:
      "Anyone! Hackathons welcome students, professionals, beginners, and experienced developers. Some may have eligibility criteria based on skills or themes.",
  },
  {
    question: "What should I bring to a hackathon?",
    answer:
      "Bring your laptop, charger, necessary software, an internet connection (if virtual), and a mindset ready to build and collaborate!",
  },
  {
    question: "Do I need a team to participate?",
    answer:
      "Not necessarily. You can join solo or form a team. Many hackathons provide platforms to find teammates before or during the event.",
  },
  {
    question: "Are there prizes for winning a hackathon?",
    answer:
      "Yes! Prizes vary and may include cash rewards, internships, startup funding, or networking opportunities with industry leaders.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <CardSpotlight key={index} className="relative p-6 border border-neutral-800 rounded-lg cursor-pointer bg-black transition-all"
            onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">{faq.question}</h3>
              <span className="text-blue-500">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-neutral-300">{faq.answer}</p>
            )}
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
}
