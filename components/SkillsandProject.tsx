"use client";

import React from "react";
import { skills } from "@/data";
import { InfiniteSkillsScroller } from "./ui/InfiniteScroll";
import ExperienceCarousel from "./Experience";

const SkillsandProject = () => {
  return (
    <section id="skills" className="py-10">
      <h1 className="heading tracking-wide">
        Technical
        <span className="text-purple"> Skills </span>
        and
        <span className="text-purple"> Projects</span>
      </h1>
      <div className="h-[20vh] pt-16 rounded-md flex-col flex  items-center justify-center ">
        <InfiniteSkillsScroller
          items={skills}
          direction="right"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
      <ExperienceCarousel />
    </section>
  );
};

export default SkillsandProject;
