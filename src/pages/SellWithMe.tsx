import React from "react";
import { Button } from "@/components/ui/button";

const SellWithMe = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6">
            Wonder no more
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            You may be wondering, how does Contempo Closet sell clothes? How does Stefanie split profits, 
            how long does it all take, and how much effort do I have to put into selling my old clothes?
          </p>
          <p className="text-lg text-gray-600">
            Here's how it all works. I'll break it down step-by-step.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {/* Step 1 */}
          <section>
            <h2 className="font-serif text-3xl text-primary mb-4">Step one: reach out</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The process starts when you reach out, wondering how all this stuff works. 
                We chat for a bit (no presh). I explain how the reselling business works, 
                and we go from there. It's all very casual and low-stakes.
              </p>
              <p>
                If you or your friend (the client) is interested in selling their used clothes, 
                we'll move on to the next step: scheduling a quick tour of the client's closet.
              </p>
            </div>
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="font-serif text-3xl text-primary mb-4">Step two: tour the closet</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The tour is simple. You show me what you're thinking of selling. 
                I'll tell you what I think will sell (and what won't). I've been doing this 
                for years, so I have a pretty good idea of what will sell, and for how much money.
              </p>
              <p>
                Once we've figured out what we want to sell through Contempo, I'll offer a fair 
                split of profits. Typically, that's a 40/60 split, 40% for clients and 60% for 
                myself, after fees charged by Poshmark and eBay.
              </p>
              <p>
                Once the tour wraps up, I'll drive the goods to Contempo and start putting them up for sale.
              </p>
            </div>
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="font-serif text-3xl text-primary mb-4">Step three: list and sell</h2>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">My responsibilities:</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Tracking. I record everything on detailed spreadsheets so all goods are properly accounted for.</li>
                <li>Spot treatment. If clothes need a little extra love before they're listed, they get the spot treatment.</li>
                <li>Photography. I photograph clothes in my at-home studio.</li>
                <li>Research. How much should a product sell for? I leverage my 10+ years of reselling experience to figure it out.</li>
                <li>Listing. I'll cross-list the item to eBay and Poshmark, staking my brand on client products.</li>
                <li>Storage. I label, store, and package inventory for shipping.</li>
                <li>Shipping. Once something sells, I print the label, package the item, and drop it off at the post office to be shipped.</li>
                <li>Payment. Once the customer indicated they love their new clothes, I'll send clients their share of profits. Whoot!</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800">Your responsibilities:</h3>
              <p className="text-gray-600">
                Get some R&R, because you're golden. You've reached out, shown me your closet, and agreed to a fair rate. 
                All that's left is to let the passive income roll in. I'll contact you when something sells, or if there's 
                anything else I need from you.
              </p>
            </div>
          </section>

          {/* Optional Section */}
          <section>
            <h2 className="font-serif text-3xl text-[#ff9999] mb-4">optional: sell even more clothes</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Have more clothes you want to sell? No problem! Reach out, and we'll schedule another quick tour of the closet. 
                You're an expert by now, so you'll know exactly what to expect ahead of time.
              </p>
              <p className="mt-8">
                Still have questions? Check out these FAQs. Or reach out via this website, or to 
                <a href="mailto:contempocloset@gmail.com" className="text-primary hover:underline ml-1">
                  contempocloset@gmail.com
                </a>
                .
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center pt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.location.href = "mailto:contempocloset@gmail.com"}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellWithMe;