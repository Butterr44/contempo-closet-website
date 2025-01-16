import React from "react";
import { Button } from "@/components/ui/button";

export const MeetYourPosher = () => {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-3xl shadow-lg p-12 mb-16">
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
        <div className="w-full md:w-1/2">
          <img 
            src="/lovable-uploads/80a6c47a-0ae1-4909-b448-aa4d91c2d63b.png"
            alt="Stefanie at Platform 9 3/4"
            className="rounded-2xl shadow-xl w-full object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Meet Your Posher</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Hi! I'm Stefanie, the face behind Contempo Closet. When I'm not curating amazing fashion finds,
            you might find me exploring magical places (like Platform 9¾!) or hunting for the next perfect piece
            to add to your wardrobe.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="font-medium w-full md:w-auto shadow-md hover:shadow-lg transition-all duration-300"
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
    </div>
  );
};