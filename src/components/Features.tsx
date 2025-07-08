
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  CreditCard, 
  BarChart3,
  Lock,
  ArrowRightLeft,
  Bell
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Instant Transactions",
      description: "Lightning-fast transfers and currency exchanges with real-time processing and immediate confirmations."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Bank-Grade Security",
      description: "Military-grade encryption, multi-factor authentication, and advanced fraud protection systems."
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8 text-blue-400" />,
      title: "Live Exchange Rates",
      description: "Real-time LYD/USD conversion rates updated every second to ensure you get the best value."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "Mobile First",
      description: "Designed for Libya's mobile-first economy with intuitive apps for iOS and Android."
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-400" />,
      title: "Local Focus",
      description: "Built specifically for Libya with local partnerships, regulations, and cultural understanding."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: "Smart Analytics",
      description: "Comprehensive spending insights, financial planning tools, and personalized recommendations."
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: "Privacy Protected",
      description: "Your financial data stays private with zero-knowledge architecture and local data storage."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-indigo-400" />,
      title: "Digital Payments",
      description: "Seamless integration with local merchants and international payment networks."
    },
    {
      icon: <Bell className="w-8 h-8 text-pink-400" />,
      title: "Smart Notifications",
      description: "Intelligent alerts for transactions, rate changes, and account activities."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose LiboPay?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience the future of banking with features designed specifically 
            for Libya's evolving financial landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-sm border-slate-700 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-slate-800/50 w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-teal-300 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
