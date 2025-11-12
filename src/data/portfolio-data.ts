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
    thumbnail: "/images/ppe-detection/1.png",
    gallery: [
      "/images/ppe-detection/1.png",
      "/images/ppe-detection/2.png",
      "/images/ppe-detection/3.png",
      "/images/ppe-detection/4.png",
    ],
    demo: "", // Add demo video URL
  },
  faceRecognition: {
    thumbnail: "/images/face-recognition/1.png",
    gallery: [
      "/images/face-recognition/1.png",
      "/images/face-recognition/2.png",
      "/images/face-recognition/3.png",
      "/images/face-recognition/4.png",
      "/images/face-recognition/5.png",
      "/images/face-recognition/6.png",
    ],
    demo: "",
  },
  activityRecognition: {
    thumbnail: "/images/activity-tracking/1.png",
    gallery: [
      "/images/activity-tracking/1.png",
      "/images/activity-tracking/2.png",
      "/images/activity-tracking/3.png",
      "/images/activity-tracking/4.png",
      "/images/activity-tracking/5.png",
      "/images/activity-tracking/6.png",
    ],
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
  kbbSuperApp: {
    thumbnail: "/images/kbb-superapp/1.png",
    gallery: [
      "/images/kbb-superapp/1.png",
      "/images/kbb-superapp/2.png",
      "/images/kbb-superapp/3.png",
      "/images/kbb-superapp/4.png",
      "/images/kbb-superapp/5.png",
      "/images/kbb-superapp/6.png",
      "/images/kbb-superapp/7.png",
      "/images/kbb-superapp/8.png",
    ],
  },
  catatCuan: {
    thumbnail: "/images/catat-cuan/1.png",
    gallery: [
      "/images/catat-cuan/1.png",
      "/images/catat-cuan/2.png",
      "/images/catat-cuan/3.png",
      "/images/catat-cuan/4.png",
      "/images/catat-cuan/5.png",
      "/images/catat-cuan/6.png",
      "/images/catat-cuan/7.png",
      "/images/catat-cuan/8.png",
    ],
  },
  diswayJkt: {
    thumbnail: "/images/disway-jkt/1.png",
    gallery: [
      "/images/disway-jkt/1.png",
      "/images/disway-jkt/2.png",
      "/images/disway-jkt/3.png",
      "/images/disway-jkt/4.png",
      "/images/disway-jkt/5.png",
      "/images/disway-jkt/6.png",
      "/images/disway-jkt/7.png",
      "/images/disway-jkt/8.png",
    ],
  },
  rsuMedimas: {
    thumbnail: "/images/rsu-medimas/1.png",
    gallery: [
      "/images/rsu-medimas/1.png",
      "/images/rsu-medimas/2.png",
      "/images/rsu-medimas/3.png",
    ],
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
    title: "PPE Detection - Pertamina EP",
    category: "Computer Vision",
    description: "Developing a web-based application and implementing a computer vision model to detect workers wearing complete safety gear (such as helmet, coverall, and boots) on CCTV cameras at work sites managed by PT Pertamina EP. My responsibilities include creating a dataset, building an automatic detection system, and integrating the AI system into the existing CCTV infrastructure.",
    technologies: ["Python", "OpenCV", "YOLO", "TensorFlow", "Deep Learning", "Web Dashboard (HTML,CSS,JS)", "CCTV Integration"],
    imageKey: "ppeDetection",
    github: "", // Add your GitHub URL
    demo: "", // Add demo URL if available
    documentation: documents.ppeDetectionDoc,
    featured: true,
    date: "2024-2025",
  },
  {
    id: "face-recognition",
    title: "Face Recognition",
    category: "Computer Vision",
    description: "An AI-Powered, real-time employee monitoring and attendance tracking platform. It combines face recognition, CCTV stream analysis, and intelligent schedulling to automatically log attendance, detect policy violations, and provide live updates via web dashboard and Telegram Bot.",
    technologies: ["Python", "OpenCV", "dlib", "Face Recognition (InsightFace)", "NumPy", "CCTV Integration", "Web Dashboard (HTML,TailwindCSS,JS)", "PostgreeSQL","Telegram Bot"],
    imageKey: "faceRecognition",
    github: "https://github.com/LyKhan77/AutoMonitoring-FR.git",
    demo: "",
    documentation: documents.faceRecognitionDoc,
    featured: true,
    date: "2025",
  },
  {
    id: "activity-recognition",
    title: "Activity Recognition/Tracking",
    category: "Computer Vision",
    description: "This is web application for real-time activity tracking from multiple CCTV camera streams, designed for monitoring operator activites in factory environments using AI-powered pose estimation and zone-based activity classification. Notes: Still in development.",
    technologies: ["Python", "YOLO", "bytrack", "OpenCV", "Pose Estimation", "CCTV Integration", "Web Dashboard (HTML,TailwindCSS,JS)", "chartJS"],
    imageKey: "activityRecognition",
    github: "https://github.com/LyKhan77/ActivityRecognition.git",
    demo: "",
    documentation: documents.activityRecognitionDoc,
    featured: true,
    date: "2025",
  },
  {
    id: "kbb-superapp",
    title: "KBB SuperApp",
    category: "UI/UX Design",
    description: "It is a government application for West Bandung Regency developed by the Communication and Information Agency. This application is designed for communities ranging from cities to villages, so I needed to create a diverse user experience.",
    technologies: ["Figma", "UI/UX Design", "Mobile App Design", "User Experience"],
    imageKey: "kbbSuperApp",
    featured: true,
    date: "2024",
  },
  {
    id: "catat-cuan",
    title: "Catat Cuan",
    category: "UI/UX Design",
    description: "This was a final project for my interaction design class. From that experience, I learned many new things, from creating complex user data and wireframing to socializing with the interviewers.",
    technologies: ["Figma", "UI/UX Design", "Interaction Design", "User Research", "Wireframing"],
    imageKey: "catatCuan",
    featured: true,
    date: "2024",
  },
  {
    id: "disway-jkt",
    title: "Disway JKT",
    category: "UI/UX Design",
    description: "This is a mobile application design that I created during my temporary internship. The design is for a mobile news, established by a company in Jakarta.",
    technologies: ["Figma", "UI/UX Design", "Mobile App Design", "News App"],
    imageKey: "diswayJkt",
    featured: true,
    date: "2024",
  },
  {
    id: "rsu-medimas",
    title: "RSU Medimas",
    category: "UI/UX Design",
    description: "Under Construction",
    technologies: ["Figma", "UI/UX Design", "Web Design"],
    imageKey: "rsuMedimas",
    featured: true,
    date: "2025",
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
