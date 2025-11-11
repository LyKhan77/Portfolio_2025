import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { skills } from "../data/portfolio-data";
import { Brain, Palette, Code, Wrench } from "lucide-react";

export function Skills() {
  // Map category names to icons
  const getCategoryIcon = (category: string) => {
    if (category.includes("AI") || category.includes("Computer Vision")) {
      return Brain;
    } else if (category.includes("UI/UX")) {
      return Palette;
    } else if (category.includes("Full Stack")) {
      return Code;
    } else {
      return Wrench;
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((category, index) => {
            const Icon = getCategoryIcon(category.category);
            return (
              <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3>{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="hover:bg-primary/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
