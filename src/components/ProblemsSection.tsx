import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Settings, BarChart3, Target } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Evolving Digital Market Demands",
      description: "The digital landscape doesn't wait. Shifting consumer expectations, emerging technologies, and constant disruption make it harder than ever to stay competitive. If you're struggling to keep up, you're not alone.",
      solution: "Our tailored solutions are built to solve these exact challenges—helping you adapt fast, stay relevant, and grow smarter.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Technology Integration Hurdles",
      description: "Disconnected systems. Outdated infrastructure. New tools that don't play well with old ones. Integrating modern technology shouldn't slow you down—it should drive your business forward.",
      solution: "We help you overcome the friction of digital transformation, ensuring every piece fits together for maximum efficiency and ROI.",
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=600&h=400&fit=crop"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Complex Business Process",
      description: "When processes become tangled, productivity suffers. Bottlenecks, redundancies, and manual workarounds drain your resources and limit growth.",
      solution: "We specialise in unraveling complexity—streamlining workflows, automating where it matters, and building systems that scale with your business.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Achieving Sustainable Growth",
      description: "Growth that burns out isn't growth—it's risk. True progress lies in building momentum without sacrificing stability.",
      solution: "We help you align bold goals with smart strategy—balancing innovation, resource management, and scalability to fuel long-term success.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Bridging Gaps, Delivering Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Connecting your brand to the right audience with data-driven digital marketing strategies that deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="group scale-hover shadow-elegant hover:shadow-glow transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={problem.image} 
                    alt={problem.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full">
                    {problem.icon}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-playfair font-semibold text-foreground group-hover:text-primary transition-colors">
                      {problem.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                      {problem.description}
                    </p>
                    
                    <p className="text-foreground font-inter text-sm font-medium">
                      {problem.solution}
                    </p>
                    
                    <Button 
                      className="w-full shadow-elegant font-inter font-semibold group-hover:shadow-glow transition-all duration-300"
                    >
                      Solve the Problem
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;