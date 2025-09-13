import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LoginSection } from "@/components/LoginSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LoginSection />
      </main>
    </div>
  );
};

export default Index;