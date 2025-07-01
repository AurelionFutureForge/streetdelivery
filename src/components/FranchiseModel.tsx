
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, TrendingUp, Award, Shield, Handshake } from "lucide-react";

const FranchiseModel = () => {
  const franchiseTypes = [
    {
      title: "District Distributor",
      icon: Building2,
      territory: "Entire District Coverage",
      benefits: ["Exclusive territorial rights", "Maximum earning potential", "Regional market leadership", "Premium partner status"],
      color: "bg-primary-600"
    },
    {
      title: "Franchise Distributor", 
      icon: Users,
      territory: "City & Town Operations",
      benefits: ["Urban market access", "Comprehensive support system", "Proven business framework", "Growth-oriented partnership"],
      color: "bg-primary-500"
    },
    {
      title: "Dealer Network",
      icon: Handshake,
      territory: "Local Community Focus",
      benefits: ["Easy entry opportunity", "Flexible business model", "Community-based operations", "Scalable growth path"],
      color: "bg-primary-400"
    }
  ];

  const modelFeatures = [
    {
      icon: TrendingUp,
      title: "Proven Success Model",
      description: "Join a franchise system with demonstrated market success and sustainable growth"
    },
    {
      icon: Award, 
      title: "Strong Brand Power",
      description: "Leverage StreetMall's established market presence and customer loyalty"
    },
    {
      icon: Shield,
      title: "Protected Territory",
      description: "Secure exclusive rights with no internal competition in your area"
    }
  ];

  return (
    <section id="franchise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-black">Partnership Opportunities</Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Join Our Franchise Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with StreetMall's Street Delivery and become part of India's fastest-growing 
            delivery network. Choose the partnership level that matches your ambitions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {franchiseTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
                <div className={`absolute top-0 left-0 right-0 h-2 ${type.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{type.title}</CardTitle>
                  <div className="text-gray-600 font-medium">{type.territory}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modelFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FranchiseModel;
