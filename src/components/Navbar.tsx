import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-bold text-gray-800">
            Contempo Closet
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
              About
            </Link>
            <a 
              href="https://www.ebay.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Shop on eBay
            </a>
            <a 
              href="https://www.poshmark.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Shop on Poshmark
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};