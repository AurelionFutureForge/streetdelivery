
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-yellow-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-semibold">
                #1 Franchise Model
              </span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-primary fill-current" />
                <span className="text-sm text-gray-600 ml-1">Trusted by 1000+ Partners</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Deliver Success with 
              <span className="text-primary block">Street Delivery</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join India's fastest-growing franchise-based delivery network. 
              Powered by StreetMall's trusted ecosystem, we offer exclusive 
              opportunities for distributors and dealers nationwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary text-black hover:bg-primary-600 text-lg px-8 py-4">
                Start Your Franchise
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Active Partners</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-800">4.8/5</div>
                <div className="text-sm text-gray-600">Partner Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop&crop=center" 
                alt="Street Delivery Service"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fast & Reliable</h3>
                <p className="text-gray-600">Delivering excellence to every doorstep</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary rounded-full p-4 shadow-lg animate-bounce">
              <span className="text-2xl">🚚</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
