import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emily R.",
      position: "Marketing Manager at GreenLeaf Co.",
      content: "Their expertise transformed our online presence! The SEO strategies they implemented helped us rank on the first page of Google within 3 months. Our organic traffic increased by 120%, and leads doubled. Highly recommend their services!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "CEO at TechStart Solutions",
      content: "Working with Global Trend was a game-changer for our startup. Their data-driven approach and personalized strategies helped us achieve 300% growth in just 6 months. The team is professional, responsive, and truly understands small business needs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      position: "Founder of Boutique Beauty",
      content: "The Google Ads campaigns they created for us delivered incredible ROI. Our cost per acquisition dropped by 40% while our conversion rate increased by 85%. Their transparent communication and regular reporting kept us informed every step of the way.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-muted-foreground font-inter">
            See what our Happy Customers Says About us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group scale-hover shadow-elegant hover:shadow-glow transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-primary" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial content */}
                <blockquote className="text-muted-foreground font-inter leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground font-playfair">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-inter">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;