"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface ScrollItem {
  id: number;
  title: string;
  desc: string;
  icon: string; // SVG string or location text
}

interface InfiniteScrollProps {
  items: ScrollItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow" | number;
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteSkillsScroller = ({
  items = [],
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getDuration = () => {
    if (typeof speed === "number") return `${10000 / speed}s`;
    return speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
  };

  useEffect(() => {
    if (!scrollerRef.current) return;

    // Duplicate items for seamless looping
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    setIsReady(true);

    return () => {
      if (scrollerRef.current) {
        // Clear duplicates when unmounting
        const children = Array.from(scrollerRef.current.children);
        children.slice(items.length).forEach((child) => child.remove());
      }
    };
  }, [items]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full ",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 w-max flex-nowrap items-center",
          isReady && "animate-infinite-scroll",
          pauseOnHover && isHovered && "[animation-play-state:paused]"
        )}
        style={
          {
            "--animation-direction":
              direction === "left" ? "forwards" : "reverse",
            "--animation-duration": getDuration(),
            animationPlayState: isHovered ? "paused" : "running",
          } as React.CSSProperties
        }
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="relative w-28 h-28 flex-shrink-0 flex items-center justify-center group"
            onMouseEnter={() => pauseOnHover && setIsHovered(true)}
            onMouseLeave={() => pauseOnHover && setIsHovered(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div
                className="w-20 h-20 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${item.icon})`,
                  backgroundSize: "contain",
                  backgroundColor: "transparent",
                  backgroundPosition: "center",
                  objectFit: "fill",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <div className="relative">
                <div className="absolute inset-0 group-hover:flex hidden flex-col items-center">
                  <div className="z-10 mt-2 w-64 text-sm bg-white/80 border border-gray-300 rounded-lg shadow-lg backdrop-blur-md dark:bg-gray-800/80 dark:border-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-3 bg-gray-200/60 border-b border-gray-300 rounded-t-lg dark:bg-gray-700/60 dark:border-gray-700">
                      <h3 className="font-bold text-center text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="px-4 py-5 min-h-10 overflow-y-visible">
                      <p className="whitespace-normal break-words text-white">
                        {item.desc}
                      </p>
                    </div>
                    <div className="absolute w-3 h-5 bg-white/80 border border-gray-300 dark:border-gray-700 dark:bg-gray-800/80 transform rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
