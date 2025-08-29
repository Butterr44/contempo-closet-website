import React from "react";
import { Button } from "@/components/ui/button";

export const MeetYourPosher = () => {
  return (
    <div className="bg-white/50 rounded-2xl shadow-sm p-8 mb-16">
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto mb-16">
        <div className="w-full md:w-1/2">
          <img 
            src="/lovable-uploads/e0323d9a-7d09-4acb-bd01-2cfc1d5b9556.png"
            alt="Stefanie in elegant black dress at garden walkway"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Single Mom & Business Owner</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I love juggling my mom life with my work life. Reselling allows me to stay home, earn an income and have flexibility with my time.
            </p>
          </div>
          <Button 
            variant="secondary"
            size="lg"
            className="font-medium w-full md:w-auto"
            asChild
          >
            <a 
              href="https://poshmark.com/listing/Meet-your-Posher-Stefanie-5bd1f833dfb740820cc9c45c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My Poshmark Profile
            </a>
          </Button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Surviving & Thriving</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            When I was diagnosed with breast cancer in 2010, my kids were small and outgrowing their clothes almost daily. 
            I began reselling their barely worn clothing on eBay to earn extra money. 
            13 years later, this has blossomed into a career I love and am passionate about.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">A Passion for Preloved Fashion</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I have always had a passion for repurposing and reusing preloved items. My business began when 
            I realized I could earn money selling my kids' gently used clothing. This naturally evolved into 
            selling my own items and then helping friends sell their clothing too.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            As word spread, my business grew through referrals, and I now have many clients who trust me 
            to turn their gently preloved items into cash. I'm passionate about protecting our environment 
            and find joy in thrifting items as well.
          </p>
        </div>
      </div>
    </div>
  );
};