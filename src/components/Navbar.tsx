import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Sell With Me", href: "/sell-with-me" },
    { name: "Shop on Poshmark", href: "https://poshmark.com/closet/contempo_closet", external: true },
    { name: "Shop on eBay", href: "https://www.ebay.com/str/stefaniescloset", external: true },
  ];

  const handleNavigation = (item: { href: string; external?: boolean }) => {
    if (item.external) {
      window.open(item.href, '_blank');
    } else {
      navigate(item.href);
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-20 items-center">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2" onClick={() => navigate("/")}>
            <img 
              src="/lovable-uploads/a80e49a7-eb23-4270-aadd-fce7f4d9591e.png" 
              alt="Contempo Closet Logo" 
              className="h-16 cursor-pointer"
            />
          </div>

          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-4">
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="justify-start"
                      onClick={() => handleNavigation(item)}
                    >
                      {item.name}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => handleNavigation(item)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}