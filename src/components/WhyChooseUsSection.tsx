import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, MessageCircle, Users, Zap, Shield, Lightbulb } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "We Understand Small Businesses",
      description: "At Global Trend, we know what it's like to build something from the ground up. Many of our clients are small business owners who wear multiple hats and need a digital marketing partner that truly gets it.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Clear, Honest Communication",
      description: "We keep things simple, transparent, and honest. Digital marketing can be confusing, but we believe you deserve to know exactly what's happening with your campaigns.",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Personalised Approach",
      description: "No two businesses are the same, and neither are our strategies. Whether you're a local shop or a growing e-commerce brand, we tailor every aspect of your digital marketing plan to your goals.",
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Flexible and Affordable",
      description: "We understand that budget matters—especially for small businesses trying to make every penny count. That's why our services are built to be both flexible and affordable.",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Expertise You Can Trust",
      description: "With years of experience across SEO, PPC, content marketing, and web design, our team brings trusted expertise to every project. We stay up to date with the latest trends.",
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Results-Driven Solutions",
      description: "We don't believe in one-size-fits-all solutions. Our data-driven approach ensures that every strategy is built around real results that move your business forward.",
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed">
            At Global Trend, we're not just another digital marketing agency—we're a partner who genuinely cares about your journey. We understand the late nights, the big dreams, and the tough decisions that come with running a small business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group scale-hover shadow-elegant hover:shadow-glow transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-playfair font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground font-inter leading-relaxed">
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

export default WhyChooseUsSection;