import React from "react";
import Image from "next/image";
import { socialMedia } from "@/data";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

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
      period: "2007-2021",
      title: "School",
      institution: "The Shishukunj International School, Indore, India",
      description:
        "Graduated with 98.3% in Commerece and Information Practices.",
    },
    {
      period: "2021 - 2024",
      title: "Bachelor of Computer Application",
      institution:
        "University of Petroleum and Energy Studies(UPES), Dehradun, India",
      description:
        "Graduated with 8.4 CGPA in Computer Application with specialization in Artificial Intelligence and Machine Learning.",
    },
    {
      period: "2024 - 2026",
      title: "Master of Computer Application",
      institution: "MET Institute of Computer Science, Mumbai, India",
      description: "Pursuing Masters in Computer Application.",
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Spotlights - Retained as requested */}
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

      {/* Main content container */}
      <div className="container mx-auto px-6 py-8 max-w-full">
        <h1 className="text-5xl lg:text-7xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
          <TextGenerateEffect
            words=" About Me"
            className="text-center text-[40px] md:text-5xl lg:text-7xl"
          />
        </h1>

        {/* Grid layout modified for overlay context */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:gap-24 items-start">
          {/* Left column - Profile photo and name */}
          <div className="flex flex-col items-center justify-start">
            {/* Enhanced profile photo with spotlight effect */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 transition-all duration-500 hover:scale-105 group">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse opacity-70 group-hover:animate-spin group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Photo container */}
              <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/AdvaitDhakad.png"
                  alt="Profile Photo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full transition-all duration-700 hover:saturate-150 filter group-hover:brightness-110"
                />
              </div>
            </div>

            {/* Name - reverted to original version with animated hover effect */}
            <h2 className="text-4xl lg:text-5xl font-bold mt-8 relative group overflow-hidden">
              <span className="absolute inset-0 bg-clip-text bg-gradient from-indigo-300 to-purple-300">
                Advait Dhakad
              </span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 transition-all duration-700 group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-indigo-300">
                Advait Dhakad
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 group-hover:w-full transition-all duration-700 ease-in-out rounded-full"></span>
            </h2>

            {/* Job title */}
            <p className="text-xl text-indigo-300 mt-4 font-light">
              To Be Written
            </p>

            {/* Social icons */}
            <div className="flex space-x-4 mt-6">
              {socialMedia.map((socialinfo) => (
                <div
                  key={socialinfo.platform}
                  className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 hover:scale-110 group border border-transparent hover:border-purple-500/30 relative"
                >
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Image
                      src={socialinfo.icon}
                      alt={`${socialinfo.platform} icon`}
                      width={32}
                      height={32}
                      className="w-10 h-10 text-purple-300 group-hover:text-white transition-colors duration-300 filter invert opacity-80 group-hover:opacity-100"
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

          {/* Middle column - Brief introduction with enhanced text visibility and blur */}
          <div className="flex flex-col justify-start">
            <h3 className="text-3xl font-semibold mb-6 text-white">My Story</h3>
            <div className="space-y-4">
              <p className="text-lg lg:text-xl leading-relaxed text-white backdrop-blur-xl bg-white/5 p-6 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-4 border-indigo-500 shadow-xl">
                Hey, there I am Advait Dhakad an aspiring data scientist and a
                passionate intrest in finance and frontend development. I am a
                self-motivated individual with a strong desire to learn and grow
                in the field of technology. I have a keen interest in data
                science, machine learning, and artificial intelligence.
              </p>

              <p className="text-lg lg:text-xl leading-relaxed text-white backdrop-blur-xl bg-white/5 p-6 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-4 border-purple-500 shadow-xl">
                My journey started back in school in technology has been driven
                by curiosity and a desire to build products that positively
                ignites curosity in me.
              </p>

              <p className="text-lg lg:text-xl leading-relaxed text-white backdrop-blur-xl bg-white/5 p-6 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-4 border-pink-500 shadow-xl">
                When I&apos;m not coding, you&apos;ll find me hiking, reading
                sci-fi novels, or experimenting with new recipes. I&apos;m
                always looking for opportunities to learn and grow as a
                developer.
              </p>
            </div>
          </div>

          {/* Right column - Timeline with modified effect - removed the pulse animation on dots */}
          <div className="relative">
            <h3 className="text-3xl font-semibold mb-8 text-white">
              My Journey
            </h3>

            {/* Timeline container */}
            <div className="relative pl-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:rounded-full">
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline dot - removed animate-pulse */}
                    <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-indigo-500 border-4 border-slate-900 transform -translate-x-1/2 group-hover:scale-150 group-hover:bg-purple-500 transition-all duration-500"></div>

                    {/* Content card with enhanced text visibility and blur */}
                    <div className="p-6 px-8 rounded-lg bg-white/5 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 group-hover:translate-x-4 shadow-lg group-hover:shadow-purple-500/20">
                      {/* Time period */}
                      <div className="mb-2 text-white font-medium text-xl inline-block relative overflow-hidden group-hover:text-purple-300 transition-colors duration-300">
                        {item.period}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-500"></span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-all duration-300">
                        {item.title}
                      </h3>

                      {/* Institution */}
                      <div className="text-lg text-white group-hover:text-indigo-200 transition-colors duration-300 mb-2">
                        {item.institution}
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-gray-200 group-hover:text-white transition-colors duration-300 text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
