import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!"
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "adithyanadith2002@gmail.com",
    href: "mailto:adithyanadith2002@gmail.com"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/adithyan-p-a-902b1228a",
    href: "https://linkedin.com/in/adithyan-p-a-902b1228a"
  }, {
    icon: Github,
    label: "GitHub",
    value: "github.com/adithyan666",
    href: "https://github.com/adithyan666"
  }];
  return <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message(not working right now)</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2" placeholder="your.email@example.com" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="mt-2 min-h-[120px]" placeholder="Tell me about your project..." />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map(info => <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-muted-foreground text-sm">{info.value}</div>
                      </div>
                    </a>)}
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always open to discussing new opportunities, innovative projects, 
                  and ways to bring your ideas to life through technology. Whether it's 
                  web development, machine learning solutions, or something entirely new, 
                  let's explore the possibilities together.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge className="px-4 py-2">Available for Freelance</Badge>
                  <Badge variant="outline" className="px-4 py-2">Open to Collaboration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;