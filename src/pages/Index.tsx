import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Facebook } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDF8F6]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#FFB7C5]/10 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl mb-6 animate-fade-up text-gray-800">
            Welcome to Contempo Closet
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-up text-gray-600">
            Thrifting • Thriving • Thankful
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.open("https://www.ebay.com/str/stefaniescloset", "_blank")}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Shop on eBay
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={() => window.open("https://poshmark.com/closet/contempo_closet", "_blank")}
            >
              <Heart className="mr-2 h-4 w-4" />
              Shop on Poshmark
            </Button>
          </div>
        </div>
      </div>

      {/* Personal Introduction */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-5xl mb-8 text-gray-800">Hi, I'm Stefanie</h2>
            <div className="space-y-3 text-xl text-gray-600 mb-8">
              <p>Mom.</p>
              <p>Autism advocate.</p>
              <p>Animal lover.</p>
              <p>Reader of books.</p>
              <p>Travel junkie.</p>
              <p>Cancer survivor.</p>
              <p className="font-bold">THRIFTING ADDICT.</p>
            </div>
            <Button 
              variant="outline" 
              className="border-primary hover:bg-primary/10"
              onClick={() => navigate('/about')}
            >
              Read More About Me
            </Button>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="bg-primary/30 py-12 px-4">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="font-serif text-3xl mb-4">Find Me Online</h2>
          <p className="text-gray-600 mb-6">
            Shop and connect with me on your favorite platforms!
          </p>
          <div className="flex justify-center gap-8">
            <a 
              href="https://www.facebook.com/ContempoCloset/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a 
              href="https://poshmark.com/closet/contempo_closet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <ShoppingBag className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

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