"use client";
import React, { useState } from "react";
import { Projects } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("next");

  const handleNext = () => {
    setTransitionDirection("next");
    setActiveIndex((prevIndex) => (prevIndex + 1) % Projects.length);
  };

  const handlePrevious = () => {
    setTransitionDirection("previous");
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + Projects.length) % Projects.length
    );
  };

  // Generate random animation parameters for text elements
  const generateRandomTextVariants = () => {
    const directions = ["top", "bottom", "left", "right"];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    const randomDistance = Math.floor(Math.random() * 150) + 50; // Between 50 and 200
    const randomDuration = Math.random() * 0.5 + 0.3; // Between 0.3 and 0.8 seconds

    const xValue =
      randomDirection === "left"
        ? -randomDistance
        : randomDirection === "right"
        ? randomDistance
        : 0;
    const yValue =
      randomDirection === "top"
        ? -randomDistance
        : randomDirection === "bottom"
        ? randomDistance
        : 0;

    return {
      hidden: {
        opacity: 0,
        x: xValue,
        y: yValue,
        transition: { duration: randomDuration, ease: "easeInOut" },
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: randomDuration, ease: "easeInOut" },
      },
    };
  };

  // Generate different variants for each text element
  const titleVariants = generateRandomTextVariants();
  const descVariants = generateRandomTextVariants();

  const textContainerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  // Calculate adjacent indices for infinite loop
  const getAdjacentIndex = (offset) => {
    return (activeIndex + offset + Projects.length) % Projects.length;
  };

  // Glow animation variant for active image
  const glowVariant = {
    animate: {
      boxShadow: [
        "0 0 10px 2px rgba(235, 87, 87, 0.5)",
        "0 0 20px 5px rgba(235, 87, 87, 0.7)",
        "0 0 15px 3px rgba(235, 87, 87, 0.6)",
        "0 0 10px 2px rgba(235, 87, 87, 0.5)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="flex w-full flex-col items-center justify-center pt-20">
      <div className="relative w-5/6 grid grid-cols-1 items-center justify-between bg-gradient-to-r from-[#04071d] to-[#0c0e23] p-4 px-32 text-white md:grid-cols-2 md:grid-rows-1 md:gap-0 md:px-10 lg:px-16">
        {/* Left column with text */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button - Left side of text column */}
          <button
            className="absolute left-0 z-30 flex h-16 w-16 items-center justify-center rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#eb5757] -translate-x-20"
            onClick={handlePrevious}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#eb5757"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <motion.div
            key={activeIndex}
            variants={textContainerVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center p-4 text-center md:pr-2"
          >
            <div className="pb-4 w-full">
              <motion.h1
                variants={titleVariants}
                className="mb-4 text-3xl font-extrabold md:text-5xl"
              >
                {Projects[activeIndex].title}
              </motion.h1>
            </div>
            <div className="pb-6 w-full">
              <motion.p
                variants={descVariants}
                className="text-lg font-light leading-relaxed md:text-xl"
              >
                {Projects[activeIndex].desc}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Right column with images */}
        <div className="relative flex items-center justify-center">
          {/* Images Container */}
          <div className="relative flex h-[40rem] items-center justify-center md:h-[38rem]">
            {/* Previous Item */}
            <motion.div
              className="absolute z-0 h-auto w-[10rem] min-w-[10rem] max-w-[16rem] md:w-[14vw] blur-[2px]"
              animate={{
                opacity: 0.5,
                x: "-110px",
                scale: 0.7,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Image
                className="h-auto w-full rounded-[2rem] object-cover"
                alt={Projects[getAdjacentIndex(-1)].title}
                src={Projects[getAdjacentIndex(-1)].thumbnail}
                width={700}
                height={650}
              />
            </motion.div>

            {/* Current Item */}
            <motion.div
              className="absolute z-10 h-auto w-[22rem] min-w-[22rem] max-w-[28rem] md:w-[26vw] overflow-hidden rounded-[2rem]"
              animate={{
                opacity: 1,
                x: "0",
                scale: 1.25,
                filter: "brightness(1.2)",
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <motion.div
                variants={glowVariant}
                animate="animate"
                className="w-full h-full"
              >
                <Image
                  className="h-auto w-full rounded-[2rem] object-cover shadow-lg"
                  alt={Projects[activeIndex].title}
                  src={Projects[activeIndex].thumbnail}
                  width={600}
                  height={500}
                />
              </motion.div>
            </motion.div>

            {/* Next Item */}
            <motion.div
              className="absolute z-0 h-auto w-[20rem] min-w-[20rem] max-w-[26rem] md:w-[24vw] blur-[2px]"
              animate={{
                opacity: 0.5,
                x: "110px",
                scale: 0.7,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Image
                className="h-auto w-full rounded-[2rem] object-cover"
                alt={Projects[getAdjacentIndex(1)].title}
                src={Projects[getAdjacentIndex(1)].thumbnail}
                width={600}
                height={500}
              />
            </motion.div>
          </div>

          {/* Next Button - Right side of image column */}
          <button
            className="absolute right-0 z-30 flex h-16 w-16 items-center justify-center rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#eb5757] translate-x-20"
            onClick={handleNext}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#eb5757"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
