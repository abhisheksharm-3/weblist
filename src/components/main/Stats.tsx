import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MetricCards = () => {
  const metrics = [
    {
      title: "Total Links",
      value: "500+",
    },
    {
      title: "Categories",
      value: "15",
    },
    {
      title: "Monthly Users",
      value: "2.5K",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full p-4">
      {metrics.map((metric, index) => (
        <Card 
          key={index} 
          className="bg-zinc-900/50 border-zinc-800"
        >
          <CardContent className="p-6 text-center">
            <h3 className="text-white text-lg mb-2">{metric.title}</h3>
            <p className="text-blue-400 text-4xl font-semibold">
              {metric.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricCards;