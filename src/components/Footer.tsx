import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-playfair font-bold text-gradient">
                Global Trend
              </div>
              <p className="text-secondary-foreground/80 font-inter leading-relaxed">
                Leading the change in digital marketing with data-driven strategies that deliver real results for businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Facebook size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Twitter size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Instagram size={20} />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-playfair font-semibold">Our Services</h3>
              <ul className="space-y-2 font-inter">
                <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Website Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SEO Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Google Ads</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Copywriting</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Consultation</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-playfair font-semibold">Quick Links</h3>
              <ul className="space-y-2 font-inter">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#blogs" className="hover:text-primary transition-colors">Our Blogs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-playfair font-semibold">Get in Touch</h3>
              <div className="space-y-3 font-inter">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary" />
                  <a href="mailto:hello@globaltrend.co.in" className="hover:text-primary transition-colors">
                    hello@globaltrend.co.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-primary" />
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-primary mt-1" />
                  <span>123 Business Street, Digital City, DC 12345</span>
                </div>
              </div>
              <Button className="w-full shadow-elegant font-inter font-semibold">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-secondary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/80 font-inter text-sm">
              © 2024 Global Trend. All rights reserved. Designed with ❤️ for growing businesses.
            </p>
            <div className="flex space-x-6 text-sm font-inter">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;