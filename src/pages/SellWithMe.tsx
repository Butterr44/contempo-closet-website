import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingPolicies } from "@/components/about/ShoppingPolicies";
const SellWithMe = () => {
  return <div className="min-h-screen bg-gradient-to-b from-[#FDF8F6] to-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-800 mb-6 animate-fade-in">
            Sell With Me
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              Wondering how to clear out your closet without the hassle? I've got you covered!
            </p>
            <p className="text-lg text-gray-600">As a busy mom myself, I know how precious your time is. That's why I've made selling with Contempo Closet as simple as possible. You get 40% of the profits, and I handle all the details - from photos to shipping and everything in between.</p>
            <p className="text-lg text-gray-600">
              Ready to transform your closet into extra cash? Let's break it down...
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {/* Step 1 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-3xl text-primary mb-6">Step one: reach out</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Reach out via email or Instagram, and we can chat about the process if you have any questions. Commission earned is a 60/40 split (60% to Contempo, 40% to Client) after marketplace fees from eBay and Poshmark (approximately 20%).</p>
            </div>
          </section>

          {/* Step 2 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-3xl text-primary mb-6">Step two: schedule pick up</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We'll schedule a convenient time for me to pick up your items, or you can leave them in a secure location. 
                Once I have your items, I'll review them at Contempo. If any items can't be accepted due to flaws, stains, or style, 
                I can either donate them on your behalf or return them to you.
              </p>
            </div>
          </section>

          {/* Step 3 */}
          <section className="bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-3xl text-primary mb-8">Step three: list and sell</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  My services
                </h3>
                <ul className="text-gray-600 space-y-5 text-left">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 flex-shrink-0">🌸</span>
                    <div>
                      <span className="font-medium">Tracking: </span>
                      I record everything on detailed spreadsheets so all goods are properly accounted for.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 flex-shrink-0">🌸</span>
                    <div>
                      <span className="font-medium">Spot treatment: </span>
                      If clothes need a little extra love before they're listed, they get the spot treatment.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 flex-shrink-0">🌸</span>
                    <div>
                      <span className="font-medium">Photography: </span>
                      I photograph clothes in my at-home studio.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 flex-shrink-0">🌸</span>
                    <div>
                      <span className="font-medium">Research: </span>
                      How much should a product sell for? I leverage my 15+ years of reselling experience to figure it out.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 flex-shrink-0">🌸</span>
                    <div>
                      <span className="font-medium">Listing: </span>
                      I'll cross-list the item to eBay and Poshmark, staking my brand on client products.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 flex-shrink-0">🌸</span>
                    <div>
                      <span className="font-medium">Storage: </span>
                      I label, store, and package inventory for shipping.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 flex-shrink-0">🌸</span>
                    <div>
                      <span className="font-medium">Shipping: </span>
                      Once something sells, I print the label, package the item, and drop it off at the post office to be shipped.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 flex-shrink-0">🌸</span>
                    <div>
                      <span className="font-medium">Payment: </span>
                      Client payments are made approximately every 8 weeks via Venmo.
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Your responsibilities
                </h3>
                <p className="text-gray-600 text-left italic">
                  Get some R&R and wait for your first payment.
                </p>
              </div>
            </div>
          </section>

          {/* Optional Section */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-serif text-3xl text-secondary mb-6">Optional: sell even more clothes</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Have more clothes you want to sell? No problem! We'll arrange another pick up.
              </p>
              <p className="mt-8">
                Still have questions? Check out these FAQs or reach out to{' '}
                <a href="mailto:contempocloset@gmail.com" className="text-primary hover:underline break-words">
                  contempocloset@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Shopping Policies Section */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ShoppingPolicies />
          </section>
        </div>
      </div>
    </div>;
};
export default SellWithMe;