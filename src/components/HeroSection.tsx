import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/metro-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kochi Metro Station"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            <Shield className="mr-2 h-3 w-3" />
            Enterprise-Grade Security
          </Badge>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Intelligent Document
            <span className="block bg-gradient-to-r from-accent to-secondary-light bg-clip-text text-transparent">
              Management
            </span>
            for Kochi Metro
          </h1>

          {/* Description */}
          <p className="mb-10 text-xl text-white/90 sm:text-2xl lg:max-w-3xl mx-auto">
            AI-powered platform for secure document collection, processing, and intelligent 
            categorization across all KMRL departments with bilingual support.
          </p>

          {/* Features Grid */}
          <div className="mb-10 grid gap-4 sm:grid-cols-3 lg:gap-6">
            <div className="flex items-center justify-center space-x-2 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-white font-medium">AI Processing</span>
            </div>
            <div className="flex items-center justify-center space-x-2 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <Languages className="h-5 w-5 text-accent" />
              <span className="text-white font-medium">English & Malayalam</span>
            </div>
            <div className="flex items-center justify-center space-x-2 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-white font-medium">Secure & Compliant</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Access Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};