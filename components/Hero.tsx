import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import AboutMePage from "@/components/aboutme";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };

  return (
    <section id="hero">
      <div className="pb-96 pt-56">
        <div className="w-full absolute left-0 -bottom-72 z-0 min-h-[100vh]">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 "
          />
        </div>
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white absolute top-0 left-0 flex items-center justify-center">
          <div
            // change the bg to bg-black-100, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-20 z-10 h-full">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              The best way to predict the future is to analyze the past. ~
              Unknown
            </p>

            <TextGenerateEffect
              words="Where Data Meets Design: Transforming Numbers into Immersive Digital Journeys."
              className="text-center text-[40px] md:text-5xl lg:text-7xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Advait, an aspiring Data Scientist based in Mumbai.
            </p>
            <div className="flex gap-4 items-center">
              <div onClick={toggleAboutMe}>
                <MagicButton
                  title="About Me"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </div>
              <a href="#beliefs">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Render AboutMePage when showAboutMe is true */}
        {showAboutMe && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-lg z-[9000] overflow-y-auto"
              style={{
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {/* Close button */}
              <motion.button
                className="fixed top-6 right-10 z-[9010] p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                onClick={setShowAboutMe.bind(null, false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
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
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>

              {/* About Me Page Content */}
              <div>
                <AboutMePage />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default Hero;
