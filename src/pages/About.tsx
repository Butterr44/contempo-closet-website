
import React from "react";
import { MeetYourPosher } from "@/components/about/MeetYourPosher";
import { SocialLinks } from "@/components/about/SocialLinks";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F6]">
      <div className="container mx-auto px-4 py-12">
        <MeetYourPosher />
        <SocialLinks />
      </div>
    </div>
  );
};

export default About;
