import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import digitalMarketingImg from '@/assets/digital-marketing.jpg';
import webDesignImg from '@/assets/web-design.jpg';
import seoServicesImg from '@/assets/seo-services.jpg';
import consultationImg from '@/assets/consultation.jpg';
import copywritingImg from '@/assets/copywriting.jpg';
import googleAdsImg from '@/assets/google-ads.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: "Digital Marketing Services",
      description: "We specialise in helping small businesses grow through strategic, results-driven outsource marketing solutions. You can rely on our experienced SEO professionals to manage every aspect of your online presence—from technical SEO and content strategy to social media campaigns and PPC advertising.",
      image: digitalMarketingImg,
      delay: "0s"
    },
    {
      title: "Creative Website Design",
      description: "We design visually striking, user-friendly websites that not only look great but are built to perform. Our creative website design services are tailored for businesses that want to stand out online, engage their audience, and drive conversions.",
      image: webDesignImg,
      delay: "0.2s"
    },
    {
      title: "Search Engine Optimization",
      description: "We deliver strategic Search Engine Optimization (SEO) services designed to help small businesses rank higher, attract the right audience, and grow sustainably online. Our team of SEO specialists uses ethical, data-driven techniques.",
      image: seoServicesImg,
      delay: "0.4s"
    },
    {
      title: "Digital Marketing Consultancy",
      description: "Our Digital Marketing Consultancy service is designed to empower businesses with expert guidance, clear strategy, and real results. Whether you're launching a new brand or looking to improve existing campaigns, our consultants bring years of industry experience.",
      image: consultationImg,
      delay: "0.6s"
    },
    {
      title: "Copy Writing",
      description: "Our professional copywriting services are crafted to give small businesses a powerful voice online. Whether you need compelling website content, persuasive product descriptions, engaging blog posts, or optimised landing pages, our expert copywriters create content that speaks directly to your audience.",
      image: copywritingImg,
      delay: "0.8s"
    },
    {
      title: "Google Ads",
      description: "We create and manage high-converting Google and Bing Ads campaigns that help businesses generate quality leads and maximise ROI. Our certified PPC specialists craft tailored advertising strategies that put your brand in front of the right audience at the right time.",
      image: googleAdsImg,
      delay: "1s"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            How our Growth Marketing Solutions Help Your Business Scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group scale-hover shadow-elegant hover:shadow-glow transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
              style={{animationDelay: service.delay}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-playfair font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground font-inter leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;