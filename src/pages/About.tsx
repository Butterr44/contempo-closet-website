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
                To ensure a smooth transaction, please complete your payment within 3 business days of winning an item. This helps us maintain a reliable shopping experience for everyone in our community.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping">
              <AccordionTrigger className="text-lg font-medium">Shipping & Handling</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Your items will be carefully packaged and shipped via USPS. Shopping for multiple items? Great! I'm happy to combine shipping to help you save on costs. Once your payment is cleared, I'll ship your items within 3 business days - usually even faster, within 24 hours! Please note that while I take great care in packaging your items, I cannot provide refunds for items damaged, lost, or stolen during shipment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="international">
              <AccordionTrigger className="text-lg font-medium">International Shipping</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Are you shopping from outside the United States? Please reach out to me before making a purchase so we can discuss shipping options to your location. I want to ensure your items can arrive safely and at a reasonable cost.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="condition">
              <AccordionTrigger className="text-lg font-medium">Item Conditions</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>You'll find items in various conditions: NWT (New with Tags), NWOT (New without Tags), and EUC (Excellent Used Condition).</p>
                <p className="mt-2">
                  Your satisfaction is my top priority! I take great care to accurately describe and photograph each item. If you're not completely happy with your purchase when it arrives, please reach out to me before leaving feedback. I'm here to work with you and ensure you're delighted with your shopping experience.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feedback">
              <AccordionTrigger className="text-lg font-medium">Feedback Policy</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Your feedback helps build trust in our community! When you're happy with your purchase, I'd greatly appreciate if you could take a moment to leave positive feedback. This helps other shoppers feel confident in their purchases, and I'll be sure to return the favor with feedback of my own.
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
