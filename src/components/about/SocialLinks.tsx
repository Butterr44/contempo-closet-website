import React from "react";
import { Facebook } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="max-w-2xl mx-auto text-center bg-white/50 backdrop-blur-sm rounded-3xl shadow-lg p-12">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Find Me Online</h2>
      <p className="text-gray-600 mb-8 text-lg">
        Shop my collections on:
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
        <a 
          href="https://poshmark.com/closet/contempo_closet" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 text-lg font-medium hover:scale-105 transition-transform"
        >
          Poshmark
        </a>
        <span className="hidden sm:inline text-gray-300">•</span>
        <a 
          href="https://www.ebay.com/str/stefaniescloset" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 text-lg font-medium hover:scale-105 transition-transform"
        >
          eBay
        </a>
      </div>
      <div className="mt-6">
        <a 
          href="https://www.facebook.com/ContempoCloset/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 hover:text-primary transition-colors text-lg group"
        >
          <Facebook className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          <span>Follow on Facebook</span>
        </a>
      </div>
    </div>
  );
};