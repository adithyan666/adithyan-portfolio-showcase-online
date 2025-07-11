import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Real-Time Traffic Sign Detection System",
      description: "Real-time classification of traffic signs for autonomous vehicles using TensorFlow. Advanced computer vision system with high accuracy for road safety applications.",
      technologies: ["TensorFlow", "Python", "OpenCV", "Computer Vision", "Neural Networks"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
      category: "Machine Learning"
    },
    {
      title: "Inventory Management System",
      description: "Full-stack inventory management tool built with Flask and MySQL. Complete CRUD operations with user authentication and real-time inventory tracking.",
      technologies: ["Flask", "MySQL", "Python", "HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      category: "Web Development"
    },
    {
      title: "AI-powered Stethoscope",
      description: "A health-tech innovation using TensorFlow and Arduino IDE to detect cardiac and respiratory diseases. IoT integration for remote health monitoring.",
      technologies: ["TensorFlow", "Arduino IDE", "Python", "IoT", "Healthcare AI"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Healthcare AI"
    },
    {
      title: "Portfolio Webpage",
      description: "Personal responsive website showcasing projects and skills. Modern design with smooth animations and mobile-first approach.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      category: "Web Development"
    },
    {
      title: "Variational Autoencoders",
      description: "Advanced neural network implementation for addressing class imbalance in datasets. Deep learning research project with practical applications.",
      technologies: ["TensorFlow", "Python", "Deep Learning", "Data Science", "Research"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      category: "Research"
    }
  ];

  const categories = ["All", "Machine Learning", "Web Development", "Healthcare AI", "Research"];

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative projects spanning web development, machine learning, and cutting-edge technology solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="group card-hover overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;