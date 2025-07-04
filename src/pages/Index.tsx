
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FranchiseModel from "@/components/FranchiseModel";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FranchiseModel />
      <ExclusiveOffers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
