import React from "react";

export const WelcomeSection = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h1 className="text-5xl font-serif font-bold text-gray-800 mb-8 text-center">Welcome to Contempo Closet</h1>
      <div className="prose prose-lg max-w-none text-center mb-12">
        <p className="text-gray-600 text-xl mb-6">
          Welcome to your destination for sustainable, pre-loved fashion! I'm passionate about giving 
          beautiful clothing a second life while helping you build your dream wardrobe sustainably.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Each piece in my collection is carefully selected and curated to ensure quality and style.
          I believe in sustainable fashion and the joy of finding unique pieces that tell a story.
        </p>
        <p className="text-gray-600 text-lg">
          Whether you're looking for vintage treasures or contemporary classics, Contempo Closet
          offers a thoughtfully curated selection of clothing and accessories at great prices.
        </p>
      </div>
    </div>
  );
};