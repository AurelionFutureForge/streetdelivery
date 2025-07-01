
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-black">Get In Touch</Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our franchise experts and discover how Street Delivery
            by StreetMall can transform your business aspirations into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 +91 82489 73009</p>
                  <p className="text-gray-600">+91 9876543211 (Franchise Hotline)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">admin@streetmallcommerce.com</p>
                  <p className="text-gray-600">support@streetmall.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    StreetMall Corporate Office<br />
                    123 Business District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <Card className="mt-8 border-primary border-2">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-800 mb-3">Quick Response Guarantee</h4>
                <p className="text-gray-600 mb-4">
                  Our franchise experts will contact you within 2 hours during business hours.
                  Get personalized consultation and detailed franchise information.
                </p>
                <Badge className="bg-primary text-black">Response within 2 hours</Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="Enter your full name" className="border-gray-300 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input placeholder="Enter your phone number" className="border-gray-300 focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" className="border-gray-300 focus:border-primary" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Franchise Interest
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none">
                    <option>Select franchise type</option>
                    <option>District Distributor</option>
                    <option>Franchise Distributor</option>
                    <option>Dealer Network</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Investment Capacity
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none">
                    <option>Select investment range</option>
                    <option>₹50K - ₹2 Lakhs</option>
                    <option>₹2 - ₹5 Lakhs</option>
                    <option>₹5 - ₹10 Lakhs</option>
                    <option>Above ₹10 Lakhs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your business goals and any questions you have..."
                    className="border-gray-300 focus:border-primary min-h-[100px]"
                  />
                </div>

                <Button size="lg" className="w-full bg-primary text-black hover:bg-primary-600 text-lg py-4">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message & Get Callback
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
