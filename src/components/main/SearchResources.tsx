"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MoreVertical } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Filter {
  id: string;
  label: string;
}

interface Category {
  name: string;
  variant: "default" | "secondary" | "destructive" | "outline";
}

interface SearchResult {
  category: Category;
  timeAgo: string;
  title: string;
  description: string;
  relevance: string;
  saves: number;
}

const SearchResources = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filters: Filter[] = [
    { id: 'all', label: 'All Results' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'aiml', label: 'AI/ML' },
    { id: 'productivity', label: 'Productivity' }
  ];

  const searchResults: SearchResult[] = [
    {
      category: { name: 'Development', variant: 'default' },
      timeAgo: 'Added 2 days ago',
      title: 'Advanced React Patterns and Best Practices',
      description: 'In-depth guide to React design patterns, performance optimization, and component architecture.',
      relevance: '98%',
      saves: 234
    },
    {
      category: { name: 'Design', variant: 'secondary' },
      timeAgo: 'Added 1 week ago',
      title: 'UI Design System Components',
      description: 'Collection of reusable UI components and design tokens for modern web applications.',
      relevance: '95%',
      saves: 189
    },
    {
      category: { name: 'Tools', variant: 'outline' },
      timeAgo: 'Added 3 days ago',
      title: 'Developer Productivity Tools 2024',
      description: 'Essential tools and extensions to boost your development workflow and efficiency.',
      relevance: '92%',
      saves: 156
    }
  ];

  return (
    <div className="w-full max-w-7xl p-4 space-y-6">
      <h2 className="text-3xl font-bold font-display mb-8">Search Resources</h2>
      
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input 
          placeholder="Search for links, categories, or topics..."
          className="pl-10 h-12"
        />
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Search results */}
      <div className="space-y-4">
        {searchResults.map((result, index) => (
          <Card key={index} className="transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Badge variant={result.category.variant}>
                    {result.category.name}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {result.timeAgo}
                  </span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Add to Collection</DropdownMenuItem>
                    <DropdownMenuItem>Share Resource</DropdownMenuItem>
                    <DropdownMenuItem>Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <h3 className="text-xl font-medium mb-2">
                {result.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {result.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Relevance: {result.relevance}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>Saved by {result.saves} users</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="secondary">
          Load More Results
        </Button>
      </div>
    </div>
  );
};

export default SearchResources;