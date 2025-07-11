import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "bg-primary/10 text-primary",
      skills: ["Python", "HTML", "CSS", "JavaScript", "Java"]
    },
    {
      title: "Frameworks & Technologies",
      icon: Database,
      color: "bg-accent/10 text-accent",
      skills: ["Flask", "TensorFlow", "OpenCV", "Bootstrap", "MySQL"]
    },
    {
      title: "Development Environments",
      icon: Settings,
      color: "bg-secondary/10 text-secondary-foreground",
      skills: ["VS Code", "Eclipse IDE", "Jupyter Notebook", "Spyder", "PyCharm"]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "bg-coral-pink/10 text-coral-pink",
      skills: ["Neural Networks", "Computer Vision", "Deep Learning", "Data Science", "AI Solutions"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks that power my development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm py-2 px-4 hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto card-hover">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Version Control & Collaboration</h3>
              <div className="flex justify-center">
                <Badge variant="outline" className="text-lg py-2 px-6">
                  Git
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;