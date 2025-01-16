import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ShoppingPolicies = () => {
  return (
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
  );
};