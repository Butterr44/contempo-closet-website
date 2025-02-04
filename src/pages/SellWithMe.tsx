import React from "react";
import { Button } from "@/components/ui/button";

const SellWithMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF8F6] to-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-800 mb-6 animate-fade-in">
            Wonder no more
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              You may be wondering, how does Contempo Closet sell clothes? How does Stefanie split profits, 
              how long does it all take, and how much effort do I have to put into selling my old clothes?
            </p>
            <p className="text-lg text-gray-600">
              Here's how it all works. I'll break it down step-by-step.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {/* Step 1 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-3xl text-primary mb-6">Step one: reach out</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
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
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-3xl text-primary mb-6">Step Two: schedule pick up</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We'll schedule a convenient time for me to meet you for pick up, or items can be left in a secure location for pick up. 
                After pick up, the items go to Contempo to start the processing phase. (Any items not accepted due to flaws, stains, or style 
                can be donated on client's behalf or returned)
              </p>
            </div>
          </section>

          {/* Step 3 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-3xl text-primary mb-6">Step three: list and sell</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">My services:</h3>
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
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your responsibilities:</h3>
                <p className="text-gray-600">
                  Get some R&R, because you're golden. You've reached out, shown me your closet, and agreed to a fair rate. 
                  All that's left is to let the passive income roll in. I'll contact you when something sells, or if there's 
                  anything else I need from you.
                </p>
              </div>
            </div>
          </section>

          {/* Optional Section */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-3xl text-secondary mb-6">optional: sell even more clothes</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Have more clothes you want to sell? No problem! Reach out, and we'll schedule another quick tour of the closet. 
                You're an expert by now, so you'll know exactly what to expect ahead of time.
              </p>
              <p className="mt-8">
                Still have questions? Check out these FAQs. Or reach out via this website, or to{' '}
                <a href="mailto:contempocloset@gmail.com" className="text-primary hover:underline">
                  contempocloset@gmail.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SellWithMe;
