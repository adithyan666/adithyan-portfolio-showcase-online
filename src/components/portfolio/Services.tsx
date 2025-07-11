import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Brain, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Responsive, modern, and clean web solutions tailored to your needs. From concept to deployment, I create user-friendly websites that deliver exceptional experiences.",
      icon: Globe,
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimization", "Cross-browser Compatibility"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Machine Learning Solutions",
      description: "Specialized in neural networks for smart, data-driven applications. Transform your data into actionable insights with cutting-edge AI technologies.",
      icon: Brain,
      features: ["Neural Networks", "Computer Vision", "Data Analysis", "AI Integration"],
      color: "bg-accent/10 text-accent"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering businesses with innovative web solutions and intelligent machine learning applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="card-hover group">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-lg ${service.color} mr-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Why Choose My Services?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Fast</div>
                  <p className="text-muted-foreground">Quick turnaround times without compromising quality</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Adaptive</div>
                  <p className="text-muted-foreground">Solutions that grow and evolve with your needs</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-foreground mb-2">Reliable</div>
                  <p className="text-muted-foreground">Consistent delivery of high-quality results</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;