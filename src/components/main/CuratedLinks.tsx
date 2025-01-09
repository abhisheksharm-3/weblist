import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Palette, GitBranch, Cpu, Box, Layers, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    title: "Development Tools",
    items: [
      { icon: Code, text: "VS Code Extensions" },
      { icon: GitBranch, text: "Git Resources" },
      { icon: Cpu, text: "CI/CD Tools" },
    ]
  },
  {
    title: "Design Resources",
    items: [
      { icon: Box, text: "UI Components" },
      { icon: Palette, text: "Color Palettes" },
      { icon: Layers, text: "Icon Libraries" },
    ]
  },
  {
    title: "Learning Paths",
    items: [
      { icon: Code, text: "Web Development" },
      { icon: Layers, text: "UI/UX Design" },
      { icon: Terminal, text: "DevOps" },
    ]
  }
];

const LinkItem = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center space-x-2 group">
    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
    <div className="flex items-center space-x-2">
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </div>
  </div>
);

const CuratedLinks = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 font-display">
        Discover Curated Links
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Card key={section.title} className="transition-colors hover:bg-accent">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.text}
                    className={cn(
                      "text-muted-foreground hover:text-primary",
                      "transition-colors cursor-pointer"
                    )}
                  >
                    <LinkItem icon={item.icon} text={item.text} />
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

export default CuratedLinks;