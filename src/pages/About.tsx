import { Navbar } from "@/components/Navbar";
import { Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F6]">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
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

        {/* Meet Your Posher Section */}
        <div className="bg-white/50 rounded-2xl shadow-sm p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
            <div className="w-full md:w-1/2">
              <img 
                src="/lovable-uploads/80a6c47a-0ae1-4909-b448-aa4d91c2d63b.png"
                alt="Stefanie at Platform 9 3/4"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Meet Your Posher</h2>
              <p className="text-gray-600 text-lg mb-6">
                Hi! I'm Stefanie, the face behind Contempo Closet. When I'm not curating amazing fashion finds,
                you might find me exploring magical places (like Platform 9¾!) or hunting for the next perfect piece
                to add to your wardrobe.
              </p>
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
        </div>

        {/* Shopping Policies Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">Shopping Policies</h2>
          <Accordion type="single" collapsible className="w-full bg-white/50 rounded-xl shadow-sm">
            <AccordionItem value="payment">
              <AccordionTrigger className="text-lg font-medium">Payment</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Please complete payment within 3 business days to help maintain a smooth shopping experience for everyone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping">
              <AccordionTrigger className="text-lg font-medium">Shipping & Handling</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Items ship via USPS within 3 business days (usually within 24 hours). Multiple items? I'll combine shipping to save you money! Note: I can't refund for items damaged or lost during shipping.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="international">
              <AccordionTrigger className="text-lg font-medium">International Shipping</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Shopping from abroad? Contact me first to discuss shipping options to your location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="condition">
              <AccordionTrigger className="text-lg font-medium">Item Conditions</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Items are listed as NWT (New with Tags), NWOT (New without Tags), or EUC (Excellent Used Condition). Not happy with your purchase? Please reach out before leaving feedback - I'm here to help!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feedback">
              <AccordionTrigger className="text-lg font-medium">Feedback Policy</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Happy with your purchase? Your positive feedback helps other shoppers and I'll gladly return the favor!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Find Me Online Section */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Find Me Online</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Shop my collections on:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://poshmark.com/closet/contempo_closet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-lg font-medium"
            >
              Poshmark
            </a>
            <a 
              href="https://www.ebay.com/str/stefaniescloset" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-lg font-medium"
            >
              eBay
            </a>
          </div>
          <div className="mt-6">
            <a 
              href="https://www.facebook.com/ContempoCloset/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors text-lg"
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
