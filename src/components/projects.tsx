import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Figma, FileText, Filter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { projects, getAllCategories, projectAssets, type Project } from "../data/portfolio-data";
import { Link } from "react-router-dom";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", ...getAllCategories()];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const getProjectImage = (project: Project) => {
    if (project.category === "Computer Vision") {
      return "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032";
    }
    return projectAssets[project.imageKey].thumbnail;
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in Computer Vision, UI/UX Design, and Full Stack Development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="gap-2"
            >
              {category === "All" && <Filter className="h-4 w-4" />}
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full hover:shadow-lg transition-all hover:scale-[1.02] duration-300">
              <Link to={`/projects/${project.id}`} className="flex flex-col flex-1">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative group">
                    <ImageWithFallback
                      src={getProjectImage(project)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary/90 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription className="mb-4 line-clamp-3">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline">+{project.technologies.length - 4}</Badge>
                    )}
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="gap-2 pt-0 flex-wrap">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.figma && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.figma} target="_blank" rel="noopener noreferrer">
                      <Figma className="mr-2 h-4 w-4" />
                      Figma
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.documentation && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.documentation} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      Docs
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}