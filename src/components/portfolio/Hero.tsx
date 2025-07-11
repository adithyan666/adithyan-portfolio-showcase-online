import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/adithyan-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Adithyan P A</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Blending code, creativity, and problem-solving to build meaningful tech solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              Computer Science Graduate passionate about web development and machine learning, 
              especially neural networks. I thrive on solving real-world problems with innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('portfolio')}
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Adithyan P A - Computer Science Graduate"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;