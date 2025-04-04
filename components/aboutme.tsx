import React from "react";
import Image from "next/image";
import { socialMedia } from "@/data";
import { Spotlight } from "@/components/ui/Spotlight";

interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  description: string;
}

const AboutMePage: React.FC = () => {
  // Sample timeline data - replace with your own journey
  const timelineItems: TimelineItem[] = [
    {
      period: "2010 - 2014",
      title: "High School",
      institution: "Lincoln High School",
      description: "Graduated with honors in Science and Mathematics.",
    },
    {
      period: "2014 - 2018",
      title: "Bachelor of Science",
      institution: "University of Technology",
      description:
        "Majored in Computer Science with focus on software development.",
    },
    {
      period: "2019 - 2021",
      title: "Master of Science",
      institution: "Tech Institute",
      description:
        "Specialized in Artificial Intelligence and Machine Learning.",
    },
  ];

  return (
    <>
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
      </div>{" "}
      <div className="min-h-screen w-full text-white relative overflow-hidden pt-20">
        {/* Animated background elements */}
        {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div> */}

        {/* Main content container - reduced padding */}
        <div className="container mx-auto px-3 py-16 lg:py-24 max-w-full">
          <h1 className="text-5xl lg:text-7xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            About Me
          </h1>
          {/* Increased gap between columns and using full width */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 xl:gap-40 items-start">
            {/* Left column - Profile photo and name */}
            <div className="flex flex-col items-center justify-start">
              {/* Enhanced profile photo */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 transition-all duration-500 hover:scale-105 group">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse opacity-70 group-hover:animate-spin group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Photo container */}
                <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/profile.svg"
                    alt="Profile Photo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full transition-all duration-700 hover:saturate-150 filter group-hover:brightness-110"
                  />
                </div>
              </div>

              {/* Name with animated underline */}
              <h2 className="text-5xl lg:text-6xl font-bold mt-10 relative group overflow-hidden">
                {/* Background gradient text that's always visible */}
                <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                  Advait Dhakad
                </span>

                {/* Foreground gradient text that animates on hover */}
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 transition-all duration-700 group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-indigo-300">
                  Advait Dhakad
                </span>

                {/* Animated underline with glow effect */}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 group-hover:w-full transition-all duration-700 ease-in-out rounded-full"></span>
              </h2>

              {/* Job title */}
              <p className="text-2xl text-indigo-300 mt-4 font-light">
                Senior Software Engineer
              </p>

              {/* Animated social icons */}
              <div className="flex space-x-6 mt-8">
                {socialMedia.map((socialinfo) => (
                  <div
                    key={socialinfo.platform}
                    className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 hover:scale-110 group border border-transparent hover:border-purple-500/30 relative"
                  >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Image
                        src={socialinfo.icon}
                        alt={`${socialinfo.platform} icon`}
                        width={40}
                        height={40}
                        className="w-14 h-14 text-purple-300 group-hover:text-white transition-colors duration-300 filter invert opacity-80 group-hover:opacity-100"
                      />
                    </div>
                    <a
                      href={socialinfo.linkurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 rounded-full"
                      aria-label={`Visit ${socialinfo.platform}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Middle column - Brief introduction */}
            <div className="flex flex-col justify-start transform transition-all duration-500 hover:translate-y-2">
              <h3 className="text-3xl lg:text-4xl font-semibold mb-8 text-indigo-300">
                My Story
              </h3>
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl leading-relaxed text-slate-200 backdrop-blur-sm bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-4 border-indigo-500 shadow-xl">
                  I'm a passionate software engineer with expertise in building
                  modern web applications. With over 5 years of experience in
                  full-stack development, I love creating elegant solutions to
                  complex problems.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed text-slate-300 backdrop-blur-sm bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-4 border-purple-500 shadow-xl">
                  My journey in technology has been driven by curiosity and a
                  desire to build products that positively impact people's
                  lives. I specialize in React, Next.js, and modern frontend
                  architectures.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed text-slate-200 backdrop-blur-sm bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-4 border-pink-500 shadow-xl">
                  When I'm not coding, you'll find me hiking, reading sci-fi
                  novels, or experimenting with new recipes. I'm always looking
                  for opportunities to learn and grow as a developer.
                </p>
              </div>
            </div>

            {/* Right column - Timeline */}
            <div className="relative">
              <h3 className="text-3xl lg:text-4xl font-semibold mb-10 text-purple-300">
                My Journey
              </h3>

              {/* Timeline container with enhanced animations */}
              <div className="relative pl-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:rounded-full">
                {/* Timeline items with staggered animation */}
                <div className="space-y-16">
                  {timelineItems.map((item, index) => (
                    <div
                      key={index}
                      className="relative group"
                      style={{
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    >
                      {/* Enhanced timeline dot with pulse animation */}
                      <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-indigo-500 border-4 border-slate-900 transform -translate-x-1/2 group-hover:scale-150 group-hover:bg-purple-500 transition-all duration-500 animate-pulse"></div>

                      {/* Content card with hover effects */}
                      <div className="p-8 rounded-lg bg-white/5 backdrop-blur-lg hover:bg-white/15 transition-all duration-500 group-hover:translate-x-6 shadow-lg group-hover:shadow-purple-500/20">
                        {/* Time period with fancy styling */}
                        <div className="mb-3 text-indigo-300 font-medium text-2xl inline-block relative overflow-hidden group-hover:text-purple-300 transition-colors duration-300">
                          {item.period}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-500"></span>
                        </div>

                        {/* Enhanced title with scaling effect */}
                        <h3 className="text-3xl font-bold group-hover:text-purple-300 transition-all duration-300 transform group-hover:translate-y-1">
                          {item.title}
                        </h3>

                        {/* Institution with subtle hover effect */}
                        <div className="text-xl text-slate-300 group-hover:text-indigo-200 transition-colors duration-300 mb-3">
                          {item.institution}
                        </div>

                        {/* Description with improved typography */}
                        <p className="mt-4 text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Contact section
          <div className="mt-24 text-center">
            <h3 className="text-3xl lg:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
              Let's Connect
            </h3>
            <p className="text-xl mb-8 text-slate-300 max-w-3xl mx-auto">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <button className="px-8 py-4 text-xl bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
              Get In Touch
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
