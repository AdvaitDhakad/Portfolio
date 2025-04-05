"use client";
import React, { useState, useRef } from "react";
import { workExperience } from "@/data";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0 rounde-[1.75rem]"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("next");

  const handleNext = () => {
    setTransitionDirection("next");
    setActiveIndex((prevIndex) => (prevIndex + 1) % workExperience.length);
  };

  const handlePrevious = () => {
    setTransitionDirection("previous");
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + workExperience.length) % workExperience.length
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
  const getAdjacentIndex = (offset: number) => {
    return (
      (activeIndex + offset + workExperience.length) % workExperience.length
    );
  };

  return (
    <Button
      borderRadius="0"
      containerClassName="p-0 w-full h-full"
      borderClassName="bg-[radial-gradient(#eb5757_40%,transparent_60%)]"
      className="p-0 border-0"
      duration={8000}
      as="div"
    >
      <div className="grid grid-cols-1 grid-rows-2 items-center justify-between gap-0 bg-gradient-to-r from-[#04071d] to-[#0c0e23] p-0 text-white md:grid-cols-2 md:grid-rows-1 md:px-[2vw]">
        <motion.div
          key={activeIndex}
          variants={textContainerVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center p-5 text-center md:p-0 md:py-24"
        >
          <div className="pb-6 w-4/5">
            <motion.h1
              variants={titleVariants}
              className="mb-6 text-3xl font-extrabold md:text-5xl"
            >
              {workExperience[activeIndex].title}
            </motion.h1>
          </div>
          <div className="pb-8 w-4/5 pl-6">
            <motion.p
              variants={descVariants}
              className="text-lg font-light leading-relaxed md:text-xl"
            >
              {workExperience[activeIndex].desc}
            </motion.p>
          </div>
        </motion.div>

        {/* Images Container */}
        <div className="relative flex h-[40rem] flex-row-reverse items-center justify-start">
          {/* Previous Item */}
          <motion.div
            className="absolute z-0 h-auto w-[18rem] min-w-[18rem] max-w-[22rem] md:w-[20vw] blur-[3px]"
            animate={{
              opacity: 0.5,
              x: "-120px",
              scale: 0.7,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <Image
              className="h-auto w-full rounded-[2rem] object-cover"
              alt={workExperience[getAdjacentIndex(-1)].title}
              src={workExperience[getAdjacentIndex(-1)].thumbnail}
              width={450}
              height={400}
            />
          </motion.div>

          {/* Current Item */}
          <motion.div
            className="absolute z-10 h-auto w-[18rem] min-w-[18rem] max-w-[22rem] md:w-[20vw]"
            animate={{
              opacity: 1,
              x: "0",
              scale: 1.25,
              filter: "brightness(1.15)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#eb5757] to-[#f07171] opacity-75 blur-xl filter group-hover:opacity-100"></div>
              <Image
                className="relative h-auto w-full rounded-[2rem] object-cover shadow-xl shadow-[#eb575744]"
                alt={workExperience[activeIndex].title}
                src={workExperience[activeIndex].thumbnail}
                width={450}
                height={400}
              />
            </div>
          </motion.div>

          {/* Next Item */}
          <motion.div
            className="absolute z-0 h-auto w-[18rem] min-w-[18rem] max-w-[22rem] md:w-[20vw] blur-[3px]"
            animate={{
              opacity: 0.5,
              x: "120px",
              scale: 0.7,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <Image
              className="h-auto w-full rounded-[2rem] object-cover"
              alt={workExperience[getAdjacentIndex(1)].title}
              src={workExperience[getAdjacentIndex(1)].thumbnail}
              width={450}
              height={400}
            />
          </motion.div>

          {/* Controls - Increased SVG size */}
          <div className="absolute bottom-0 left-0 z-30 flex w-40 translate-y-[5rem] justify-between">
            <button
              className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#eb5757]"
              onClick={handlePrevious}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
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
            <button
              className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#eb5757]"
              onClick={handleNext}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
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
    </Button>
  );
};

export default ExperienceCarousel;
