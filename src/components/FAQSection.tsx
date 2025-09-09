import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Global Trend, and what do we do?",
      answer: "We're a digital marketing company dedicated to helping businesses grow online. From increasing visibility to driving high-quality traffic, we create customized strategies that deliver measurable, long-term results."
    },
    {
      question: "Who do we work with?",
      answer: "We partner with a wide range of businesses—from early-stage startups to growing brands. If you're looking to improve your digital presence and marketing performance, we're here to help."
    },
    {
      question: "How do we create strategies tailored to each client?",
      answer: "We take the time to understand your business goals, audience, industry, and competitors. Based on that, we build a strategy that's customized to your specific needs—focused, effective, and built to support real growth."
    },
    {
      question: "Can we improve your existing marketing campaigns?",
      answer: "Yes! We'll review your current campaigns to identify what's working and where there's room for improvement. Then, we optimize everything—from content and targeting to budget allocation—using data and insights to drive better results."
    },
    {
      question: "Do we offer social media management?",
      answer: "We do. Our social media services include content creation, engagement strategies, and performance tracking. Whether you need full account management or just a boost in strategy, we've got you covered."
    },
    {
      question: "How does our pricing work?",
      answer: "We keep our pricing flexible and affordable. Whether you're just starting out or scaling up, we offer custom packages that align with your goals and budget—so you get real value without overspending."
    },
    {
      question: "What's our onboarding process like?",
      answer: "Our onboarding is simple, strategic, and collaborative. We start with a discovery session to understand your business inside and out. From there, we map out your goals, build a custom plan, and get to work—quickly and clearly."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground font-inter">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card/80 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-playfair font-semibold text-lg hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-inter leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;