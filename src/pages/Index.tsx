import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProblemsSection from '@/components/ProblemsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogsSection from '@/components/BlogsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProblemsSection />
        <TestimonialsSection />
        <BlogsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
