import { Navbar } from "@/components/Navbar";
import { Facebook } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F6]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6">About Contempo Closet</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-4">
            Welcome to Contempo Closet! I'm passionate about giving pre-loved fashion a second life
            while helping you build your dream wardrobe sustainably.
          </p>
          <p className="text-gray-600 mb-4">
            Each piece in my collection is carefully selected and curated to ensure quality and style.
            I believe in sustainable fashion and the joy of finding unique pieces that tell a story.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you're looking for vintage treasures or contemporary classics, Contempo Closet
            offers a thoughtfully curated selection of clothing and accessories at great prices.
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Find Me Online</h2>
          <p className="text-gray-600">
            Shop my collections on:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              <a 
                href="https://www.ebay.com/str/stefaniescloset" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                eBay
              </a>
            </li>
            <li>
              <a 
                href="https://poshmark.com/closet/contempo_closet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                Poshmark
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <a 
              href="https://www.facebook.com/ContempoCloset/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5 mr-2" />
              <span>Follow on Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;