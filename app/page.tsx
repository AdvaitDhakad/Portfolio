"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="sm:px-0 md:px-10 lg:px-0 xl:px-56 pt-20 sm:pt-16 md:pt-40 lg:pt-48 xl:pt-64 pb-0">
          <Grid />
        </div>
        {/* <Clients /> */}
        <Approach />

        {/* <RecentProjects />
        <Experience />
        <Footer /> */}
      </div>
    </main>
  );
};

export default Home;
