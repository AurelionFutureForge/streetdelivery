
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Crown, Star, Zap, Calendar, Phone } from "lucide-react";

const ExclusiveOffers = () => {
  const partnerBenefits = [
    {
      category: "District Distributors", 
      icon: Crown,
      color: "bg-gradient-to-br from-primary-600 to-primary-700",
      badge: "PREMIUM",
      benefits: [
        "Complete setup assistance & training",
        "Exclusive territorial rights protection",
        "Advanced technology & equipment support",
        "Performance-based incentives & bonuses",
        "Priority customer support & guidance",
        "Marketing campaigns & promotional materials"
      ]
    },
    {
      category: "StreetMall Franchise Distributors",
      icon: Gift,
      color: "bg-gradient-to-br from-primary-400 to-primary-500",
      badge: "EXCLUSIVE",
      benefits: [
        "Dedicated setup assistance",
        "Comprehensive training programs",
        "Technology access & support",
        "Business development assistance",
        "Marketing support materials"
      ]
    },
    {
      category: "Dealers",
      icon: Star,
      color: "bg-gradient-to-br from-primary-300 to-primary-400", 
      badge: "SPECIAL",
      benefits: [
        "Quick start support package",
        "Basic training & guidance",
        "Enhanced earning opportunities",
        "Referral reward programs"
      ]
    }
  ];

  const marketingHighlights = [
    {
      title: "Launch Special",
      description: "Exclusive benefits for early partners joining our network",
      highlight: "Limited Time",
      icon: Calendar
    },
    {
      title: "Expert Support",
      description: "Direct access to our franchise specialists for guidance",
      highlight: "24/7 Available",
      icon: Phone
    }
  ];

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-black">Partner Benefits</Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Exclusive Advantages for StreetMall Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive support and benefits designed specifically for our 
            StreetMall franchise partners. Your success is our priority.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {partnerBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
                <div className={`${benefit.color} p-6 text-white relative`}>
                  <Badge className="absolute top-4 right-4 bg-white text-black font-bold">
                    {benefit.badge}
                  </Badge>
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-bold">{benefit.category}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {benefit.benefits.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-primary pl-4">
                        <p className="text-gray-700 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-yellow-50 rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Why Choose Street Delivery?</h3>
            <p className="text-gray-600">Join India's most supportive franchise network</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {marketingHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="border-primary border-2">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{highlight.title}</h4>
                    <p className="text-gray-600 mb-4">{highlight.description}</p>
                    <Badge className="bg-primary text-black font-bold text-lg px-4 py-2">
                      {highlight.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-black hover:bg-primary-600 text-lg px-12 py-4">
            <Zap className="mr-2 h-5 w-5" />
            Start Your Journey Today
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            Ready to become a part of India's leading delivery network?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffers;
