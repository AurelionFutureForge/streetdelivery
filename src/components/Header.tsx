
import { Button } from "@/components/ui/button";
import { Truck, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Truck className="h-6 w-6 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Street Delivery</h1>
              <p className="text-sm text-gray-600">by StreetMall</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#franchise" className="text-gray-700 hover:text-primary transition-colors">Franchise</a>
            <a href="#offers" className="text-gray-700 hover:text-primary transition-colors">Offers</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex space-x-3">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
              Login
            </Button>
            <Button className="bg-primary text-black hover:bg-primary-600">
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#franchise" className="text-gray-700 hover:text-primary transition-colors">Franchise</a>
              <a href="#offers" className="text-gray-700 hover:text-primary transition-colors">Offers</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                  Login
                </Button>
                <Button className="bg-primary text-black hover:bg-primary-600">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
