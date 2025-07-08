
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

interface HeroProps {
  onAuthClick: () => void;
}

const Hero = ({ onAuthClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-teal-300 bg-clip-text text-transparent mb-4">
              LiboPay
            </h1>
            <div className="flex items-center justify-center gap-2 text-teal-300 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent flex-1"></div>
              <span className="text-sm uppercase tracking-widest">Financial Technology</span>
              <div className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent flex-1"></div>
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionizing
            <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Libyan Banking
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of finance with instant LYD to USD conversions, 
            secure transactions, and modern banking solutions designed for Libya's digital economy.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white">Real-time Exchange</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white">Bank-grade Security</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-white">Libya-focused</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onAuthClick}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <p className="text-slate-400 mb-4 text-sm uppercase tracking-wide">Trusted by Libyans</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-slate-400">🏛️ Regulated</div>
              <div className="text-2xl font-bold text-slate-400">🔒 Encrypted</div>
              <div className="text-2xl font-bold text-slate-400">⚡ Instant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
