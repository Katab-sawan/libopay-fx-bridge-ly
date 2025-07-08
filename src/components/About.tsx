
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Mission for Libya
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            LiboPay is more than a fintech platform—we're building the financial infrastructure 
            that Libya deserves. Our goal is to bridge the gap between traditional banking 
            and modern digital finance, making financial services accessible, secure, and efficient for every Libyan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-teal-500/20 flex-shrink-0">
                <Target className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  To become Libya's leading financial technology platform, enabling seamless 
                  currency exchange, secure transactions, and modern banking solutions that 
                  empower individuals and businesses across the nation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-500/20 flex-shrink-0">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Built for Libyans</h3>
                <p className="text-slate-400 leading-relaxed">
                  We understand the unique challenges of Libya's financial landscape. 
                  From currency fluctuations to limited banking access, we're solving 
                  real problems with innovative solutions designed by Libyans, for Libyans.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-500/20 flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-slate-400 leading-relaxed">
                  Leveraging cutting-edge technology including real-time APIs, blockchain security, 
                  and AI-powered insights to deliver banking services that rival global standards 
                  while meeting local needs.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Join the Revolution</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-slate-300">Real-time Exchange</span>
                  <span className="text-teal-400 font-semibold">✓ Active</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-slate-300">Secure Transactions</span>
                  <span className="text-green-400 font-semibold">✓ Protected</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-slate-300">Mobile Banking</span>
                  <span className="text-blue-400 font-semibold">✓ Available</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-slate-300">24/7 Support</span>
                  <span className="text-purple-400 font-semibold">✓ Ready</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg border border-amber-500/30">
                <h4 className="text-lg font-semibold text-white mb-2">🇱🇾 Made in Libya</h4>
                <p className="text-slate-300 text-sm">
                  Proudly developed in Libya, regulated by local authorities, 
                  and committed to strengthening Libya's digital economy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full px-6 py-3 border border-teal-500/30">
            <span className="text-teal-400 text-lg">🚀</span>
            <span className="text-white font-medium">
              Launching Soon - Join the waitlist to be among the first users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
