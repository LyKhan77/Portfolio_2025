import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-primary">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {personalInfo.title}
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {personalInfo.bio}
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" onClick={scrollToContact}>
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">View My Work</a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Button variant="ghost" size="icon" asChild>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}