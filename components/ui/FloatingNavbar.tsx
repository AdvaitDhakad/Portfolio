"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigateTo, setNavigateTo] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const isProfilePage = pathname === "/profilepage";

  // Handle client-side hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use useEffect for scroll events instead of useMotionValueEvent
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollDirection =
        currentScroll > (window as any).lastScroll ? 1 : -1;

      if (currentScroll < 50) {
        setVisible(true);
      } else if (scrollDirection < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      (window as any).lastScroll = currentScroll;
    };

    // Set initial lastScroll value
    (window as any).lastScroll = 0;

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  // Handle navigation with consistent Next.js approach
  const handleNavigation = (path: string) => {
    if (!isMounted) return;

    setIsNavigating(true);
    setNavigateTo(path);

    // Use setTimeout to allow animation to play
    setTimeout(() => {
      router.push(path);
      setIsNavigating(false);
    }, 300);
  };

  // Don't render anything during SSR
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Page transition overlay */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 z-[9999]"
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
            >
              {navigateTo === "/profilepage"
                ? "Going to Profile..."
                : "Going to Home..."}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Only render the navbar if NOT on profile page */}
      {!isProfilePage && (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              opacity: 1,
              y: -100,
            }}
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className={cn(
              "flex max-w-fit md:min-w-fit lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-justify space-x-4",
              className
            )}
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            {navItems.map((navItem: any, idx: number) => (
              <div
                key={`link=${idx}`}
                onClick={() => handleNavigation(navItem.link)}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Profile/Home Icon - Positioned on the right side */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="fixed z-[5000] top-10 right-10"
        >
          <motion.div
            className="p-3 rounded-full cursor-pointer flex items-center justify-center"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              handleNavigation(isProfilePage ? "/" : "/profilepage")
            }
          >
            {isProfilePage ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
