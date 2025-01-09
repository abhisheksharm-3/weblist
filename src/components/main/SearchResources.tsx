"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MoreVertical } from 'lucide-react';

const SearchResources = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Results' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'aiml', label: 'AI/ML' },
    { id: 'productivity', label: 'Productivity' }
  ];

  const searchResults = [
    {
      category: { name: 'Development', color: 'text-blue-400' },
      timeAgo: 'Added 2 days ago',
      title: 'Advanced React Patterns and Best Practices',
      description: 'In-depth guide to React design patterns, performance optimization, and component architecture.',
      relevance: '98%',
      saves: 234
    },
    {
      category: { name: 'Design', color: 'text-purple-400' },
      timeAgo: 'Added 1 week ago',
      title: 'UI Design System Components',
      description: 'Collection of reusable UI components and design tokens for modern web applications.',
      relevance: '95%',
      saves: 189
    },
    {
      category: { name: 'Tools', color: 'text-green-400' },
      timeAgo: 'Added 3 days ago',
      title: 'Developer Productivity Tools 2024',
      description: 'Essential tools and extensions to boost your development workflow and efficiency.',
      relevance: '92%',
      saves: 156
    }
  ];

  return (
    <div className="w-full max-w-4xl p-4">
      <h2 className="text-2xl font-bold text-white mb-6">Search Resources</h2>
      
      {/* Search input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
        <Input 
          placeholder="Search for links, categories, or topics..."
          className="w-full bg-zinc-900/50 border-zinc-800 pl-10 py-6 text-white placeholder:text-zinc-400"
        />
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant="ghost"
            className={`${
              activeFilter === filter.id
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-white'
            } rounded-md px-4 py-2`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Search results */}
      <div className="space-y-4">
        {searchResults.map((result, index) => (
          <Card
            key={index}
            className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={result.category.color}>
                    {result.category.name}
                  </span>
                  <span className="text-zinc-500 text-sm">
                    {result.timeAgo}
                  </span>
                </div>
                <Button variant="ghost" size="icon" className="text-zinc-400">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>

              <h3 className="text-white text-xl font-medium mb-2">
                {result.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-4">
                {result.description}
              </p>

              <div className="flex items-center gap-4 text-zinc-400 text-sm">
                <span>relevance: {result.relevance}</span>
                <span>•</span>
                <span>saved by {result.saves} users</span>
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
          Load More Results
        </Button>
      </div>
    </div>
  );
};

export default SearchResources;