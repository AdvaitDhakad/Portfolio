"use client";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
// import Footer from "@/components/Footer";
import SkillsandProject from "@/components/SkillsandProject";
import Certificates from "@/components/Certificates";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <FloatingNav />
        <Hero />
        <Grid />
        <Certificates />
        <SkillsandProject />
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default Home;
