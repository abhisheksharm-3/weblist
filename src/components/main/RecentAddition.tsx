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
    <div className="w-full max-w-3xl p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Recent Additions</h2>
      
      <div className="space-y-2">
        {items.map((item, index) => (
          <Card 
            key={index} 
            className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <CardHeader>
              <div>
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentAdditions;