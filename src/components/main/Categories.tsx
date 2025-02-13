import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Code,
  Palette,
  Clock,
  Monitor,
  Briefcase,
  BookOpen,
} from "lucide-react";

const BrowseCategories = () => {
  const categories = [
    {
      id: "development",
      title: "Development",
      icon: Code,
      description: "Programming resources, tutorials, and tools",
      subcategories: [
        { id: "dev-frontend", name: "Frontend", links: 124 },
        { id: "dev-backend", name: "Backend", links: 98 },
        { id: "dev-devops", name: "DevOps", links: 56 },
      ],
    },
    {
      id: "design",
      title: "Design",
      icon: Palette,
      description: "UI/UX resources, inspiration, and tools",
      subcategories: [
        { id: "design-ui", name: "UI Design", links: 87 },
        { id: "design-ux", name: "UX Research", links: 45 },
        { id: "design-systems", name: "Design Systems", links: 34 },
      ],
    },
    {
      id: "productivity",
      title: "Productivity",
      icon: Clock,
      description: "Tools and methods for better workflow",
      subcategories: [
        { id: "prod-task", name: "Task Management", links: 76 },
        { id: "prod-time", name: "Time Tracking", links: 43 },
        { id: "prod-notes", name: "Note Taking", links: 65 },
      ],
    },
    {
      id: "ai-ml",
      title: "AI & ML",
      icon: Monitor,
      description: "Artificial Intelligence and Machine Learning",
      subcategories: [
        { id: "ai-ml", name: "Machine Learning", links: 92 },
        { id: "ai-deep", name: "Deep Learning", links: 67 },
        { id: "ai-neural", name: "Neural Networks", links: 45 },
      ],
    },
    {
      id: "career",
      title: "Career",
      icon: Briefcase,
      description: "Job search and career development",
      subcategories: [
        { id: "career-interview", name: "Interview Prep", links: 83 },
        { id: "career-resume", name: "Resume Building", links: 54 },
        { id: "career-jobs", name: "Job Boards", links: 41 },
      ],
    },
    {
      id: "learning",
      title: "Learning",
      icon: BookOpen,
      description: "Educational resources and courses",
      subcategories: [
        { id: "learn-courses", name: "Online Courses", links: 156 },
        { id: "learn-tutorials", name: "Tutorials", links: 123 },
        { id: "learn-docs", name: "Documentation", links: 89 },
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl p-4">
      <h2 className="scroll-m-20 text-4xl font-bold font-display tracking-tight lg:text-5xl mb-4">
        Browse Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <category.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-medium">{category.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.subcategories.map((sub) => (
                  <div
                    key={sub.id}
                    className="flex justify-between items-center"
                  >
                    <span>{sub.name}</span>
                    <span className="text-muted-foreground bg-secondary px-2 py-1 rounded text-sm">
                      {sub.links} links
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrowseCategories;
