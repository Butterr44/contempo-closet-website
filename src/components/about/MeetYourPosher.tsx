import React from "react";
import { Button } from "@/components/ui/button";

export const MeetYourPosher = () => {
  return (
    <div className="bg-white/50 rounded-2xl shadow-sm p-8 mb-16">
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto mb-12">
        <div className="w-full md:w-1/2">
          <img 
            src="/lovable-uploads/80a6c47a-0ae1-4909-b448-aa4d91c2d63b.png"
            alt="Stefanie at Platform 9 3/4"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-8">
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">Single Mom. Business Owner.</h3>
            <p className="text-gray-600">
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

      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Surviving & Thriving</h3>
          <p className="text-gray-600 leading-relaxed">
            When I was diagnosed with breast cancer in 2010, my kids were small and outgrowing clothes almost daily. 
            I decided to try reselling their barely worn clothing on eBay as a way to earn some extra money. 
            13 years later it has blossomed into a career that I love and am passionate about.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">A Passion for Preloved Fashion</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            I have always had a passion for repurposing and reusing preloved items. My business was born after 
            I realized I could make extra money selling my kids gently used items. This quickly evolved into 
            selling my own clothing items and then clothing items for friends.
          </p>
          <p className="text-gray-600 leading-relaxed">
            As word got out, my business grew on referrals and I now have many clients who pass me their gently 
            preloved items and I work to turn them into cash. I love providing an outlet for clients who want to 
            make a little extra money rather than donating their used clothing items. I'm passionate about our 
            environment and also love thrifting items as well.
          </p>
        </div>
      </div>
    </div>
  );
};