/**
 * Portfolio Data Management System
 * 
 * This file serves as a centralized data store for your portfolio.
 * You can easily update your projects, skills, and assets here.
 * 
 * HOW TO ADD PROJECTS:
 * 1. Add your project images to the `projectAssets` object
 * 2. Add your project details to the `projects` array
 * 3. Reference the asset key in your project's `imageKey` field
 * 
 * HOW TO ADD DOCUMENTS:
 * 1. Add document URLs or paths to the `documents` object
 * 2. Reference them in your projects using the `documents` field
 */

// ============================================
// PROJECT ASSETS
// ============================================
export const projectAssets = {
  // Computer Vision Projects
  ppeDetection: {
    thumbnail: "", // Add your image URL or path here
    gallery: [
      // Add multiple images for gallery view
      // "path/to/image1.jpg",
      // "path/to/image2.jpg",
    ],
    demo: "", // Add demo video URL
  },
  faceRecognition: {
    thumbnail: "",
    gallery: [],
    demo: "",
  },
  activityRecognition: {
    thumbnail: "",
    gallery: [],
    demo: "",
  },
  
  // UI/UX Design Projects
  mobileApp1: {
    thumbnail: "",
    gallery: [],
    figmaLink: "", // Add Figma link
  },
  mobileApp2: {
    thumbnail: "",
    gallery: [],
    figmaLink: "",
  },
  mobileApp3: {
    thumbnail: "",
    gallery: [],
    figmaLink: "",
  },
  webDesign: {
    thumbnail: "",
    gallery: [],
    figmaLink: "",
  },
};

// ============================================
// DOCUMENTS & RESOURCES
// ============================================
export const documents = {
  // Project Documentation
  ppeDetectionDoc: "",
  faceRecognitionDoc: "",
  activityRecognitionDoc: "",
  
  // Design Files
  mobileDesignSpecs: "",
  webDesignSpecs: "",
  
  // Certifications or Papers
  certifications: [
    // "path/to/certification1.pdf",
    // "path/to/certification2.pdf",
  ],
  
  // Resume/CV
  resume: "",
};

// ============================================
// PROJECTS DATA
// ============================================
export interface Project {
  id: string;
  title: string;
  category: "Computer Vision" | "UI/UX Design" | "Full Stack" | "Other";
  description: string;
  technologies: string[];
  imageKey: keyof typeof projectAssets;
  github?: string;
  demo?: string;
  figma?: string;
  documentation?: string;
  featured: boolean;
  date?: string;
}

export const projects: Project[] = [
  // Computer Vision Projects
  {
    id: "ppe-detection",
    title: "PPE Detection",
    category: "Computer Vision",
    description: "Real-time Personal Protective Equipment detection system using computer vision to ensure workplace safety compliance. Detects helmets, vests, gloves, and other safety equipment.",
    technologies: ["Python", "OpenCV", "YOLO", "TensorFlow", "Deep Learning"],
    imageKey: "ppeDetection",
    github: "", // Add your GitHub URL
    demo: "", // Add demo URL if available
    documentation: documents.ppeDetectionDoc,
    featured: true,
    date: "2024",
  },
  {
    id: "face-recognition",
    title: "Face Recognition",
    category: "Computer Vision",
    description: "Advanced face recognition system with real-time detection and identification capabilities. Includes features like face encoding, matching, and secure authentication.",
    technologies: ["Python", "OpenCV", "dlib", "Face Recognition", "NumPy"],
    imageKey: "faceRecognition",
    github: "",
    demo: "",
    documentation: documents.faceRecognitionDoc,
    featured: true,
    date: "2024",
  },
  {
    id: "activity-recognition",
    title: "Activity Recognition / Tracking",
    category: "Computer Vision",
    description: "Intelligent activity recognition and tracking system that identifies and monitors human activities in real-time using pose estimation and movement analysis.",
    technologies: ["Python", "MediaPipe", "OpenCV", "TensorFlow", "LSTM"],
    imageKey: "activityRecognition",
    github: "",
    demo: "",
    documentation: documents.activityRecognitionDoc,
    featured: true,
    date: "2024",
  },
  
  // UI/UX Design Projects
  {
    id: "mobile-app-1",
    title: "Mobile App Design - Project 1",
    category: "UI/UX Design",
    description: "Modern mobile application UI/UX design with focus on user experience and intuitive navigation. Created with Figma following best design practices.",
    technologies: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
    imageKey: "mobileApp1",
    figma: projectAssets.mobileApp1.figmaLink,
    featured: true,
    date: "2024",
  },
  {
    id: "mobile-app-2",
    title: "Mobile App Design - Project 2",
    category: "UI/UX Design",
    description: "Sleek and responsive mobile interface design with emphasis on modern aesthetics and user-centric features.",
    technologies: ["Figma", "UI/UX", "Mobile Design", "User Research"],
    imageKey: "mobileApp2",
    figma: projectAssets.mobileApp2.figmaLink,
    featured: false,
    date: "2024",
  },
  {
    id: "mobile-app-3",
    title: "Mobile App Design - Project 3",
    category: "UI/UX Design",
    description: "Innovative mobile app interface with creative design elements and smooth user flow.",
    technologies: ["Figma", "Canva", "UI/UX", "Mobile Design"],
    imageKey: "mobileApp3",
    figma: projectAssets.mobileApp3.figmaLink,
    featured: false,
    date: "2024",
  },
  {
    id: "web-design",
    title: "Web Application Design",
    category: "UI/UX Design",
    description: "Comprehensive web application design with responsive layouts and modern interface components.",
    technologies: ["Figma", "UI/UX", "Web Design", "Responsive Design"],
    imageKey: "webDesign",
    figma: projectAssets.webDesign.figmaLink,
    featured: true,
    date: "2024",
  },
];

// ============================================
// SKILLS DATA
// ============================================
export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export const skills: SkillCategory[] = [
  {
    category: "AI Engineer - Computer Vision",
    skills: ["Python", "OpenCV", "TensorFlow", "YOLO", "MediaPipe", "Deep Learning", "Image Processing"],
  },
  {
    category: "UI/UX Design",
    skills: ["Figma", "Canva", "User Research", "Prototyping", "Wireframing", "Design Systems"],
  },
  {
    category: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "Laravel", "React", "Python", "PostgreSQL", "MySQL", "REST APIs"],
  },
  {
    category: "Other",
    skills: ["Docker", "Git", "Linux", "CI/CD", "Agile"],
  },
];

// ============================================
// PERSONAL INFO
// ============================================
export const personalInfo = {
  name: "Angly Khan Surya",
  title: "AI Engineer & UI/UX Designer",
  bio: "Specialized in Computer Vision, UI/UX Design, and Full Stack Development. Passionate about creating intelligent systems and beautiful user experiences.",
  email: "anglykhan07@gmail.com",
  phone: "+6285156987589",
  location: "Jakarta, Indonesia",
  social: {
    github: "https://github.com/LyKhan77",
    linkedin: "https://www.linkedin.com/in/anglykhan/",
    portfolio: "https://yourportfolio.com",
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category);
}

/**
 * Get project by ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

/**
 * Get all categories
 */
export function getAllCategories(): string[] {
  return Array.from(new Set(projects.map(project => project.category)));
}
