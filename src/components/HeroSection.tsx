import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50"></div>
        <img 
          src={heroImage} 
          alt="Digital Marketing Hero" 
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="floating-animation absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
        <div className="floating-animation absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="floating-animation absolute bottom-32 left-1/4 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Skyrocket <span className="text-gradient bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Your Brand</span><br />
            with <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Proven Tactics</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-inter leading-relaxed">
            Boost your brand with data-driven marketing that drives results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group shadow-elegant hover:shadow-glow transition-all duration-500 font-inter font-semibold text-lg px-8 py-4"
            >
              Schedule a call with us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm font-inter font-semibold text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent font-playfair">
                $26.9M+
              </div>
              <div className="text-white/80 font-inter">Raised in Funding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent font-playfair">
                $4.2M+
              </div>
              <div className="text-white/80 font-inter">Ad Spend Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent font-playfair">
                6+ Years
              </div>
              <div className="text-white/80 font-inter">of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;