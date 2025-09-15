"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Nextjs from "@/components/icons/nextjs";
import ReactIcon from "@/components/icons/react";
import ShadcnIcon from "@/components/icons/shadcn";
import Motion from "@/components/icons/motion";
import Tailwindcss from "@/components/icons/tailwindcss";

const technologies = [
  {
    name: "Next.js",
    icon: Nextjs,
    className: "h-12 w-12 text-white",
    color: "text-white"
  },
  {
    name: "TailwindCSS",
    icon: Tailwindcss,
    className: "h-12 w-12",
    color: "text-blue-400"
  },
  {
    name: "Motion",
    icon: Motion,
    className: "h-10 w-10",
    color: "text-yellow-400"
  },
  {
    name: "shadcn/ui",
    icon: ShadcnIcon,
    className: "h-12 w-12 text-white",
    color: "text-white"
  },
  {
    name: "React",
    icon: ReactIcon,
    className: "h-12 w-12",
    color: "text-blue-400"
  }
];

export default function TechLogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTech = technologies[currentIndex];
  const IconComponent = currentTech.icon;

  return (
    <div className="inline-flex items-center justify-center min-w-[120px] h-20 mx-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            rotateY: -90
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateY: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.8,
            rotateY: 90
          }}
          transition={{
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="flex items-center justify-center"
        >
          <div className="inline-flex items-center justify-center rounded-2xl bg-black p-4 shadow-lg">
            <IconComponent 
              className="h-16 w-16 text-white"
              aria-label={currentTech.name}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
