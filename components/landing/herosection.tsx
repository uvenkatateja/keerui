"use client";
import React from "react";
import Herobuttons from "./herobuttons";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-start px-8 md:px-16 lg:px-24">
      <div className="z-[3] flex w-full max-w-7xl flex-col justify-center">
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <motion.h1
              initial={{
                y: 10,
                filter: "blur(10px)",
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="text-left text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Build beautiful UIs{" "}
              <br />
              with components{" "}
              <br />
              in minutes.
            </motion.h1>
          </div>
          <motion.div
            initial={{
              y: 10,
              filter: "blur(10px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="mt-8 space-y-6 text-left"
          >
            <motion.div
              initial={{
                y: 5,
                filter: "blur(5px)",
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.5,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="flex items-center justify-start"
            >
              <Herobuttons />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
