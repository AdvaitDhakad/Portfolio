"use client";

import React from "react";
import Experience from "./Experience";
import { testimonials, skills } from "@/data";
import { InfiniteSkillsScroller } from "./ui/InfiniteScroll";

const Clients = () => {
  return (
    <section id="skills" className="pt-20">
      <h1 className="heading tracking-wide">
        Technical
        <span className="text-purple"> Skills </span>
        and
        <span className="text-purple"> Projects</span>
      </h1>
      <div className="flex flex-col items-center pt-32 gap-10">
        <div className="h-[15vh] rounded-md flex-col flex  items-center justify-center ">
          <InfiniteSkillsScroller
            items={skills}
            direction="right"
            speed="normal"
            pauseOnHover={true}
          />
        </div>
        {/* <div className="h-[15vh] rounded-md flex-col flex  items-center justify-center ">
          <InfiniteSkillsScroller
            items={skills}
            direction="left"
            speed="normal"
            pauseOnHover={true}
          />
        </div> */}
      </div>
      <Experience />
    </section>
  );
};

export default Clients;
