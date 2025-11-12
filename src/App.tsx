import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";
import { ProjectDetail } from "./components/project-detail"; // New import
import { personalInfo } from "./data/portfolio-data";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}