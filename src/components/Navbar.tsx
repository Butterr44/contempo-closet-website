import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/2d24236d-afdf-4fdb-ac59-cb76a3b8bedf.png" 
              alt="Contempo Closet Logo" 
              className="h-20 object-contain"
            />
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-800 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <a 
              href="https://www.ebay.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-primary transition-colors font-medium"
            >
              Shop on eBay
            </a>
            <a 
              href="https://www.poshmark.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-primary transition-colors font-medium"
            >
              Shop on Poshmark
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};