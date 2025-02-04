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
                Reach out via email or Instagram, and we can chat about the process if you have any questions. 
                Commission earned is a 60/40 split (60% Contempo/40% client) and is calculated after 20% fees charged by eBay and Poshmark.
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
                <ul className="text-gray-600 space-y-3 text-left" style={{ listStyleType: '🌸' }}>
                  <li>Tracking. I record everything on detailed spreadsheets so all goods are properly accounted for.</li>
                  <li>Spot treatment. If clothes need a little extra love before they're listed, they get the spot treatment.</li>
                  <li>Photography. I photograph clothes in my at-home studio.</li>
                  <li>Research. How much should a product sell for? I leverage my 15+ years of reselling experience to figure it out.</li>
                  <li>Listing. I'll cross-list the item to eBay and Poshmark, staking my brand on client products.</li>
                  <li>Storage. I label, store, and package inventory for shipping.</li>
                  <li>Shipping. Once something sells, I print the label, package the item, and drop it off at the post office to be shipped.</li>
                  <li>Payment. Client payments are made approximately every 8 weeks via Venmo.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your responsibilities:</h3>
                <p className="text-gray-600 text-left">
                  Get some R&R and wait for your first payment.
                </p>
              </div>
            </div>
          </section>

          {/* Optional Section */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-3xl text-secondary mb-6">optional: sell even more clothes</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Have more clothes you want to sell? No problem! We'll arrange another pick up.
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