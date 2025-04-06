"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import Footer from "@/components/Footer";
import { navItems } from "@/data";
import AboutMePage from "@/components/aboutme";

const Profile = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <AboutMePage />
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default Profile;
