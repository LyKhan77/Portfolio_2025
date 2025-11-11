import { Card } from "./ui/card";
import { Brain, Palette, Code2 } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Computer Vision",
      description: "Building intelligent systems for object detection, face recognition, and activity tracking",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and aesthetically pleasing user interfaces with Figma and Canva",
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Developing robust web applications with modern frameworks and technologies",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A versatile developer specializing in AI, design, and full-stack solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3>{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <p className="text-muted-foreground">
            With expertise spanning AI Engineering, UI/UX Design, and Full Stack Development, I bring a unique 
            perspective to every project. My work in computer vision focuses on practical applications like PPE 
            detection, face recognition, and activity tracking that solve real-world problems.
          </p>
          <p className="text-muted-foreground">
            Whether it's designing beautiful user interfaces, developing robust web applications, or creating 
            intelligent computer vision systems, I'm passionate about leveraging technology to create impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}