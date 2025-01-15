import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl mb-6 animate-fade-up">
            Welcome to Contempo Closet
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-up">
            Curated secondhand fashion finds for the modern wardrobe
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button 
              className="bg-white text-gray-800 hover:bg-white/90"
              onClick={() => window.open("https://www.ebay.com", "_blank")}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Shop on eBay
            </Button>
            <Button 
              className="bg-white text-gray-800 hover:bg-white/90"
              onClick={() => window.open("https://www.poshmark.com", "_blank")}
            >
              <Heart className="mr-2 h-4 w-4" />
              Shop on Poshmark
            </Button>
          </div>
        </div>
      </div>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl mb-6">About Contempo Closet</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Hi! I'm passionate about giving pre-loved fashion pieces a second life.
              Every item in my collection is carefully selected and authenticated to
              ensure you get the best quality at great prices.
            </p>
            <Button 
              variant="outline" 
              className="border-primary hover:bg-primary/10"
            >
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-white py-8 px-4">
        <div className="container mx-auto text-center text-gray-600">
          <p>© 2024 Contempo Closet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;