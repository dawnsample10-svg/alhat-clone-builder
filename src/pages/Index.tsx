import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/PromoBanner";
import FeaturedDrinks from "@/components/FeaturedDrinks";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <PromoBanner />
    <FeaturedDrinks />
    <CtaBanner />
    <Footer />
  </div>
);

export default Index;
