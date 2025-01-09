import React from 'react';
import { Card, CardHeader } from '@/components/ui/card';

const RecentAdditions = () => {
  const items = [
    {
      title: "Next.js 13 Documentation",
      description: "Comprehensive guide to building with Next.js 13"
    },
    {
      title: "TailwindCSS Tips & Tricks",
      description: "Advanced techniques for TailwindCSS"
    },
    {
      title: "React Performance Optimization",
      description: "Best practices for optimizing React applications"
    }
  ];

  return (
    <div className="w-full max-w-7xl p-4">
      <h2 className="text-3xl font-bold mb-8 font-display">Recent Additions</h2>
      
      <div className="space-y-2">
        {items.map((item, index) => (
          <Card 
            key={index} 
            className="hover:bg-accent transition-colors cursor-pointer"
          >
            <CardHeader>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentAdditions;