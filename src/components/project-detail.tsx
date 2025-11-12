import { useParams, Link } from "react-router-dom";
import { getProjectById, projectAssets } from "../data/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The project you are looking for does not exist.
        </p>
        <Button asChild>
          <Link to="/">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  const assets = projectAssets[project.imageKey];
  const galleryImages = assets?.gallery || [];

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link to="/">← Back to Projects</Link>
        </Button>
      </div>

      <Card className="p-6 md:p-8">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
            {project.title}
          </CardTitle>
          <p className="text-muted-foreground text-lg mb-6">
            {project.description}
          </p>
        </CardHeader>

        <CardContent className="px-0 pb-0 space-y-8">
          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {(project.github || project.demo || project.figma) && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Links</h3>
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild variant="outline">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.figma && (
                  <Button asChild variant="outline">
                    <a href={project.figma} target="_blank" rel="noopener noreferrer">
                      Figma
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Image Gallery */}
          {galleryImages.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Screenshots & Designs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((imageUrl, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={`${project.title} Screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}