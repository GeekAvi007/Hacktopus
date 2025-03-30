"use client"
import { HoverEffect } from "./ui/card-hover-effect";

export function Theme() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    "title": "AI/ML",
    "description": "Advancing artificial intelligence and machine learning to solve real-world problems efficiently."
  },
  {
    "title": "Web3",
    "description": "Building decentralized applications that redefine trust, security, and ownership on the internet."
  },
  {
    "title": "FinTech",
    "description": "Innovating financial technology to create seamless, secure, and inclusive digital transactions."
  },
  {
    "title": "Healthcare Tech",
    "description": "Leveraging technology to enhance healthcare accessibility, diagnosis, and patient care."
  },
  {
    "title": "Sustainability",
    "description": "Developing eco-friendly tech solutions for a greener, more sustainable future."
  },
  {
    "title": "Smart Cities",
    "description": "Enhancing urban life through IoT, automation, and intelligent infrastructure."
  },
  {
    "title": "EdTech",
    "description": "Transforming education through digital platforms, AI tutors, and interactive learning tools."
  },
  {
    "title": "Blockchain",
    "description": "Revolutionizing industries with decentralized, transparent, and immutable blockchain technology."
  },
  {
    "title": "AgriTech",
    "description": "Empowering farmers with smart agriculture solutions, automation, and precision farming."
  }
]
