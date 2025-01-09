"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Heart, MoreVertical } from 'lucide-react';

const PopularResources = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const timeFilters = [
    { id: 'all', label: 'All Time' },
    { id: 'month', label: 'This Month' },
    { id: 'week', label: 'This Week' },
    { id: 'today', label: 'Today' }
  ];

  const resources = [
    {
      category: { name: 'Development', color: 'text-blue-400' },
      timeAgo: '3 days ago',
      title: 'Complete Guide to Modern Web Development',
      description: 'Comprehensive resource covering everything from basic HTML to advanced React patterns and modern backend architectures.',
      views: '2.5k',
      saves: 342
    },
    {
      category: { name: 'Design', color: 'text-green-400' },
      timeAgo: '1 week ago',
      title: 'Ultimate UI/UX Design Resources Collection',
      description: 'Curated collection of design tools, inspiration sources, and UI kits for modern web and mobile applications.',
      views: '1.8k',
      saves: 256
    },
    {
      category: { name: 'AI/ML', color: 'text-purple-400' },
      timeAgo: '2 weeks ago',
      title: 'Machine Learning Fundamentals & Resources',
      description: 'Essential collection of ML tutorials, papers, and tools for beginners and advanced practitioners.',
      views: '1.5k',
      saves: 198
    }
  ];

  return (
    <div className="w-full max-w-4xl p-4">
      <h2 className="text-2xl font-bold text-white mb-6">Popular Resources</h2>
      
      {/* Time filter tabs */}
      <div className="flex gap-2 mb-6">
        {timeFilters.map((filter) => (
          <Button
            key={filter.id}
            variant="ghost"
            className={`${
              activeTab === filter.id
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-white'
            } rounded-md px-4 py-2`}
            onClick={() => setActiveTab(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Resource cards */}
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <Card
            key={index}
            className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={resource.category.color}>
                    {resource.category.name}
                  </span>
                  <span className="text-zinc-500 text-sm">
                    {resource.timeAgo}
                  </span>
                </div>
                <Button variant="ghost" size="icon" className="text-zinc-400">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>

              <h3 className="text-white text-xl font-medium mb-2">
                {resource.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-4">
                {resource.description}
              </p>

              <div className="flex items-center gap-4 text-zinc-400 text-sm">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{resource.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{resource.saves} saves</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          variant="secondary"
          className="bg-zinc-800 text-white hover:bg-zinc-700"
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default PopularResources;