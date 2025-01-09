import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Palette, GitBranch, Cpu, Box, Layers, Terminal } from "lucide-react";

const CuratedLinks = () => {
  const sections = [
    {
      title: "Development Tools",
      items: [
        { icon: <Code className="w-4 h-4" />, text: "VS Code Extensions" },
        { icon: <GitBranch className="w-4 h-4" />, text: "Git Resources" },
        { icon: <Cpu className="w-4 h-4" />, text: "CI/CD Tools" },
      ]
    },
    {
      title: "Design Resources",
      items: [
        { icon: <Box className="w-4 h-4" />, text: "UI Components" },
        { icon: <Palette className="w-4 h-4" />, text: "Color Palettes" },
        { icon: <Layers className="w-4 h-4" />, text: "Icon Libraries" },
      ]
    },
    {
      title: "Learning Paths",
      items: [
        { icon: <Code className="w-4 h-4" />, text: "Web Development" },
        { icon: <Layers className="w-4 h-4" />, text: "UI/UX Design" },
        { icon: <Terminal className="w-4 h-4" />, text: "DevOps" },
      ]
    }
  ];

  return (
    <div className="w-screen max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-white">Discover Curated Links</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Card key={section.title} className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
                  >
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
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