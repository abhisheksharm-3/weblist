"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PopularResources = () => {
  const [activeTab, setActiveTab] = useState("all");

  const timeFilters = [
    { id: "all", label: "All Time" },
    { id: "month", label: "This Month" },
    { id: "week", label: "This Week" },
    { id: "today", label: "Today" },
  ];

  const resources = [
    {
      id: "web-dev-guide",
      category: { name: "Development", variant: "default" as const },
      timeAgo: "3 days ago",
      title: "Complete Guide to Modern Web Development",
      description:
        "Comprehensive resource covering everything from basic HTML to advanced React patterns and modern backend architectures.",
      views: "2.5k",
      saves: 342,
    },
    {
      id: "ui-ux-collection",
      category: { name: "Design", variant: "secondary" as const },
      timeAgo: "1 week ago",
      title: "Ultimate UI/UX Design Resources Collection",
      description:
        "Curated collection of design tools, inspiration sources, and UI kits for modern web and mobile applications.",
      views: "1.8k",
      saves: 256,
    },
    {
      id: "ml-fundamentals",
      category: { name: "AI/ML", variant: "outline" as const },
      timeAgo: "2 weeks ago",
      title: "Machine Learning Fundamentals & Resources",
      description:
        "Essential collection of ML tutorials, papers, and tools for beginners and advanced practitioners.",
      views: "1.5k",
      saves: 198,
    },
  ];

  return (
    <div className="w-full max-w-7xl p-4 space-y-6">
      <h2 className="scroll-m-20 text-4xl font-bold font-display tracking-tight lg:text-5xl mb-4">
        Popular Resources
      </h2>

      {/* Time filter tabs */}
      <div className="flex flex-wrap gap-2">
        {timeFilters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeTab === filter.id ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setActiveTab(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Resource cards */}
      <div className="space-y-4">
        {resources.map((resource) => (
          <Card key={resource.id} className="transition-colors hover:bg-accent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Badge variant={resource.category.variant}>
                    {resource.category.name}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    {resource.timeAgo}
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
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem>Save</DropdownMenuItem>
                    <DropdownMenuItem>Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <h3 className="text-xl font-medium mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {resource.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
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

      <div className="flex justify-center">
        <Button variant="secondary">Load More</Button>
      </div>
    </div>
  );
};

export default PopularResources;
