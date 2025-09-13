import { Button } from "@/components/ui/button";
import { Train, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Train className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">KMRL DocIntel</h1>
              <p className="text-xs text-white/80">Document Intelligence Platform</p>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-white/80 hover:text-white transition-smooth">
            Features
          </a>
          <a href="#security" className="text-white/80 hover:text-white transition-smooth">
            Security
          </a>
          <a href="#login" className="text-white/80 hover:text-white transition-smooth">
            Access
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Link to="/dashboard">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <FileText className="mr-2 h-4 w-4" />
              Dashboard Demo
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="secondary" size="sm">
              <Shield className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};