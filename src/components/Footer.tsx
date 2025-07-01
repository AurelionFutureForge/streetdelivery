
import { Truck, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Truck className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Street Delivery</h3>
                <p className="text-sm text-gray-400">by StreetMall</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              India's leading franchise-based delivery network,
              empowering entrepreneurs and connecting communities
              through reliable delivery services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary hover:text-black transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary hover:text-black transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Franchise Options</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">District Distributor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Franchise Distributor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dealer Network</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Investment Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Territory Map</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketing Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Technical Help</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partner Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 +91 82489 73009</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>admin@streetmallcommerce.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary"
                />
                <button className="bg-primary text-black px-4 py-2 rounded-r-lg hover:bg-primary-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Street Delivery by StreetMall. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-sm md:text-right">
              <a href="#" className="hover:text-primary mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-primary mr-4">Terms of Service</a>
              <a href="#" className="hover:text-primary">Franchise Agreement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
