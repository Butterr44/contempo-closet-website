import { Navbar } from "@/components/Navbar";
import { Facebook } from "lucide-react";
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

          <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8 mb-4">Shopping Policies</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="payment">
              <AccordionTrigger className="text-lg font-medium">Payment</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Payment is requested within 3 business days. All non-paying winning buyers are reported to eBay.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping">
              <AccordionTrigger className="text-lg font-medium">Shipping & Handling</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                All packages and purchases are sent via USPS. I will gladly combine shipping charges when multiple items are purchased. 
                I do not refund for items damaged, lost or stolen during shipment. Items are shipped within 3 business days of receiving 
                cleared payment (usually within 24 hours).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="international">
              <AccordionTrigger className="text-lg font-medium">International Shipping</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                I do not ship internationally unless buyer contacts me first to verify if I will send to your area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="condition">
              <AccordionTrigger className="text-lg font-medium">Item Conditions</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>NWT (New with Tags), NWOT (New without Tags), EUC (Excellent Used Condition).</p>
                <p className="mt-2">
                  I do my best to accurately represent all items that I sell. It is not my intention EVER to deceive a buyer. 
                  If, for any reason, you are unsatisfied when you receive your item(s), I ask that you PLEASE contact me before 
                  leaving negative feedback. I always work with my buyers to make sure they are happy with their purchase(s).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feedback">
              <AccordionTrigger className="text-lg font-medium">Feedback Policy</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                My success on eBay relies on positive feedback from my buyers. I always leave feedback for my buyers once positive 
                feedback is left for me. If you are happy with your experience, I encourage you to leave positive feedback for me. 
                This helps other buyers know I am a responsible and reliable seller.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

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