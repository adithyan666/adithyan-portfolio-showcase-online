import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:adithyanadith2002@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/adithyan-p-a-902b1228a",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/adithyan666",
      label: "GitHub"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">Adithyan P A</h3>
            <p className="text-background/80 leading-relaxed">
              Computer Science Graduate passionate about creating innovative solutions 
              through web development and machine learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block mx-auto text-background/80 hover:text-background transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 p-3 rounded-full hover:bg-background/20 transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 text-background group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center">
            © {currentYear} Adithyan P A. Made with{" "}
            <Heart className="h-4 w-4 mx-1 text-coral-pink" fill="currentColor" />{" "}
            and passion for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;