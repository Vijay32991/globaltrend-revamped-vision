import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogsSection = () => {
  const blogs = [
    {
      title: "The Ultimate Guide to SEO in 2025 🔍",
      description: "Discover the latest trends, strategies, and tools to boost your search rankings and stay ahead of the competition.",
      author: "Sarah Wilson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      category: "SEO"
    },
    {
      title: "7 Proven Google Ads Strategies for Maximum ROI 💸",
      description: "Learn actionable tips and tricks to optimize your Google Ads campaigns for better conversions and lower costs.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "PPC"
    },
    {
      title: "Crafting High-Converting Landing Pages That Sell 🛒",
      description: "Explore the secrets behind landing pages that drive clicks, leads, and sales effortlessly.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      category: "Conversion"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Latest Blogs
          </h2>
          <p className="text-xl text-muted-foreground font-inter">
            Stay updated with the latest digital marketing insights and strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card 
              key={index}
              className="group scale-hover shadow-elegant hover:shadow-glow transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg font-playfair font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-inter leading-relaxed text-sm">
                  {blog.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground font-inter">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {blog.date}
                    </div>
                  </div>
                  <span>{blog.readTime}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-inter font-semibold text-primary hover:text-primary-glow"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;