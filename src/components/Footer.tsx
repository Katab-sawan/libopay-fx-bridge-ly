
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              LiboPay
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Revolutionizing Libyan banking with secure, instant, and innovative financial solutions.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-teal-400">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-teal-400">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-teal-400">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Currency Exchange</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Money Transfer</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Digital Payments</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Business Banking</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Security</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span className="text-sm">Tripoli, Libya</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-teal-400" />
                <span className="text-sm">support@libopay.ly</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-teal-400" />
                <span className="text-sm">+218 21 XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 LiboPay. All rights reserved. Made with ❤️ in Libya.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>🇱🇾</span>
              <span>Regulated by Central Bank of Libya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
