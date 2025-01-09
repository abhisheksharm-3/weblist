import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Code, Palette, Clock, Monitor, Briefcase, BookOpen } from 'lucide-react';

const BrowseCategories = () => {
  const categories = [
    {
      title: "Development",
      icon: Code,
      description: "Programming resources, tutorials, and tools",
      subcategories: [
        { name: "Frontend", links: 124 },
        { name: "Backend", links: 98 },
        { name: "DevOps", links: 56 }
      ]
    },
    {
      title: "Design",
      icon: Palette,
      description: "UI/UX resources, inspiration, and tools",
      subcategories: [
        { name: "UI Design", links: 87 },
        { name: "UX Research", links: 45 },
        { name: "Design Systems", links: 34 }
      ]
    },
    {
      title: "Productivity",
      icon: Clock,
      description: "Tools and methods for better workflow",
      subcategories: [
        { name: "Task Management", links: 76 },
        { name: "Time Tracking", links: 43 },
        { name: "Note Taking", links: 65 }
      ]
    },
    {
      title: "AI & ML",
      icon: Monitor,
      description: "Artificial Intelligence and Machine Learning",
      subcategories: [
        { name: "Machine Learning", links: 92 },
        { name: "Deep Learning", links: 67 },
        { name: "Neural Networks", links: 45 }
      ]
    },
    {
      title: "Career",
      icon: Briefcase,
      description: "Job search and career development",
      subcategories: [
        { name: "Interview Prep", links: 83 },
        { name: "Resume Building", links: 54 },
        { name: "Job Boards", links: 41 }
      ]
    },
    {
      title: "Learning",
      icon: BookOpen,
      description: "Educational resources and courses",
      subcategories: [
        { name: "Online Courses", links: 156 },
        { name: "Tutorials", links: 123 },
        { name: "Documentation", links: 89 }
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl p-4">
      <h2 className="text-3xl font-bold mb-8 font-display">Browse Categories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Card key={index}>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <category.icon className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-medium">{category.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{category.description}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {category.subcategories.map((sub, subIndex) => (
                <div 
                  key={subIndex} 
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