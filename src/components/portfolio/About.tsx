import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
const profileImage = "/lovable-uploads/25ce14dc-0ad3-4398-ba6f-c46ce1a18ebe.png";
const About = () => {
  return <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">B.Tech in Computer Science and Engineering</h3>
                    <p className="text-muted-foreground">Mar Athanasius College of Engineering - 2025</p>
                    <p className="text-sm text-muted-foreground">APJ Abdul Kalam Technological University</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Diploma in Computer Engineering</h3>
                    <p className="text-muted-foreground">IPT & GPTC Shoranur - 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Text Content */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive on solving real-world problems using a blend of technical expertise and creative thinking. 
              My projects reflect this passion and showcase my adaptability in addressing challenges across diverse domains.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm especially enthusiastic about leveraging my skills in Python, web development, and machine learning 
              to build impactful, user-centric solutions. Beyond coding, I'm a fast learner with strong adaptability—always 
              ready to take on new challenges and deliver results on time.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;