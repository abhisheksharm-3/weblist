"use client";
import React, { FormEvent, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Check } from "lucide-react";
import { ResourceType } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { submitFormData } from "@/lib/server/appwrite";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const RESOURCE_TYPES = ["Article", "Tutorial", "Tool", "Course"] as const;

const resourceSchema = z.object({
  resourceURL: z.string().url("Please enter a valid URL"),
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description must be less than 500 characters"),
  category: z.enum(
    ["Development", "Design", "Marketing", "Business"] as const,
    {
      required_error: "Category is required",
    }
  ),
  tags: z.array(z.string()).default([]),
  resourceType: z.enum(["Article", "Tutorial", "Tool", "Course"] as const, {
    required_error: "Resource type is required",
  }),
});

const CATEGORIES = [
  { value: "Development", label: "Development" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Business", label: "Business" },
] as const;

const ResourceSubmissionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<
    Omit<ResourceType, "id" | "approved">
  >({
    resourceURL: "",
    title: "",
    description: "",
    category: "",
    tags: [],
    resourceType: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ResourceType, string>>
  >({});

  const mutation = useMutation({
    mutationFn: async (data: Omit<ResourceType, "id" | "approved">) => {
      const fullData: ResourceType = {
        ...data,
        id: uuidv4(),
        approved: false,
        tags: data.tags.length > 0 ? data.tags : [],
      };
      return await submitFormData(fullData);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your resource has been submitted for review.",
      });
      setFormData({
        resourceURL: "",
        title: "",
        description: "",
        category: "",
        tags: [],
        resourceType: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit resource. Please try again.",
        variant: "destructive",
      });
      console.error("Submission error:", error);
    },
  });

  const validateForm = () => {
    try {
      resourceSchema.parse(formData);
      return {};
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Partial<Record<keyof ResourceType, string>> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            errors[err.path[0] as keyof ResourceType] = err.message;
          }
        });
        return errors;
      }
      return {};
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      const processedData = {
        ...formData,
        tags: Array.isArray(formData.tags)
          ? formData.tags
          : (formData.tags as string)
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean),
      };

      try {
        // Parse one final time to ensure type safety
        const validatedData = resourceSchema.parse(processedData);
        mutation.mutate(validatedData);
      } catch (error) {
        console.error("Validation error:", error);
        if (error instanceof z.ZodError) {
          setErrors(
            error.errors.reduce((acc, curr) => {
              if (curr.path[0]) {
                acc[curr.path[0] as keyof ResourceType] = curr.message;
              }
              return acc;
            }, {} as Partial<Record<keyof ResourceType, string>>)
          );
        }
      }
    } else {
      setErrors(newErrors);
    }
  };

  const clearError = (field: keyof typeof formData) => {
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]:
        field === "tags" ? value.split(",").map((tag) => tag.trim()) : value,
    }));
    clearError(field);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-display">
            Submit a Resource
          </CardTitle>
          <CardDescription>
            Share valuable resources with the community. All submissions are
            reviewed before being published.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="url">
                Resource URL <span className="text-destructive">*</span>
              </Label>
              <Input
                id="url"
                type="url"
                placeholder="https://"
                value={formData.resourceURL}
                onChange={(e) =>
                  handleInputChange("resourceURL", e.target.value)
                }
              />
              {errors.resourceURL && (
                <p className="text-sm text-destructive">{errors.resourceURL}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">
                Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="title"
                placeholder="Give your resource a descriptive title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
              {errors.title && (
                <p className="text-sm text-destructive">{errors.title}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Description <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="Describe what makes this resource valuable..."
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
              />
              {errors.description && (
                <p className="text-sm text-destructive">{errors.description}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">
                Category <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleInputChange("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-sm text-destructive">{errors.category}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="Add tags (comma separated)"
                value={formData.tags}
                onChange={(e) => handleInputChange("tags", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>
                Resource Type <span className="text-destructive">*</span>
              </Label>
              <div className="flex flex-wrap gap-2">
                {RESOURCE_TYPES.map((type) => (
                  <Button
                    key={type}
                    type="button"
                    variant={
                      formData.resourceType === type ? "default" : "outline"
                    }
                    onClick={() => handleInputChange("resourceType", type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
              {errors.resourceType && (
                <p className="text-sm text-destructive">
                  {errors.resourceType}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Submit Resource
            </Button>
          </form>

          <Alert className="mt-8">
            <CardTitle className="mb-3 text-lg">
              Submission Guidelines
            </CardTitle>
            <AlertDescription>
              <ul className="space-y-2">
                {[
                  "Ensure the resource is high-quality and provides value to the community",
                  "Check if the resource hasn't been submitted before",
                  "Provide accurate and detailed description",
                  "Select the most appropriate category and tags",
                ].map((guideline, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-1" />
                    <span className="text-muted-foreground">{guideline}</span>
                  </li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceSubmissionForm;
