import React from "react";
import { Card, CardHeader } from "@/components/ui/card";

const RecentAdditions = () => {
  const items = [
    {
      id: "next-13-docs",
      title: "Next.js 13 Documentation",
      description: "Comprehensive guide to building with Next.js 13",
    },
    {
      id: "tailwind-tips",
      title: "TailwindCSS Tips & Tricks",
      description: "Advanced techniques for TailwindCSS",
    },
    {
      id: "react-perf",
      title: "React Performance Optimization",
      description: "Best practices for optimizing React applications",
    },
  ];

  return (
    <div className="w-full max-w-7xl p-4">
      <h2 className="scroll-m-20 text-4xl font-bold font-display tracking-tight lg:text-5xl mb-4">
        Recent Additions
      </h2>

      <div className="space-y-2">
        {items.map((item) => (
          <Card
            key={item.id}
            className="hover:bg-accent transition-colors cursor-pointer"
          >
            <CardHeader>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentAdditions;
