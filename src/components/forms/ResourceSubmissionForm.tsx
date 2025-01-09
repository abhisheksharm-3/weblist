"use client"
import React, { FormEvent, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Check } from 'lucide-react';

interface FormData {
  url: string;
  title: string;
  description: string;
  category: string;
  tags: string;
  resourceType: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const RESOURCE_TYPES = ['Article', 'Tutorial', 'Tool', 'Course'] as const;

const CATEGORIES = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'business', label: 'Business' },
] as const;

const ResourceSubmissionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    url: '',
    title: '',
    description: '',
    category: '',
    tags: '',
    resourceType: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.url) newErrors.url = 'Resource URL is required';
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.resourceType) newErrors.resourceType = 'Resource type is required';
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const clearError = (field: keyof FormData) => {
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    clearError(field);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className='text-3xl font-bold font-display'>Submit a Resource</CardTitle>
          <CardDescription>
            Share valuable resources with the community. All submissions are reviewed before being published.
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
                value={formData.url}
                onChange={e => handleInputChange('url', e.target.value)}
              />
              {errors.url && (
                <p className="text-sm text-destructive">{errors.url}</p>
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
                onChange={e => handleInputChange('title', e.target.value)}
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
                onChange={e => handleInputChange('description', e.target.value)}
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
                onValueChange={value => handleInputChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(category => (
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
                onChange={e => handleInputChange('tags', e.target.value)}
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
                    variant={formData.resourceType === type ? "default" : "outline"}
                    onClick={() => handleInputChange('resourceType', type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
              {errors.resourceType && (
                <p className="text-sm text-destructive">{errors.resourceType}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Submit Resource
            </Button>
          </form>

          <Alert className="mt-8">
            <CardTitle className="mb-3 text-lg">Submission Guidelines</CardTitle>
            <AlertDescription>
              <ul className="space-y-2">
                {[
                  'Ensure the resource is high-quality and provides value to the community',
                  'Check if the resource hasn\'t been submitted before',
                  'Provide accurate and detailed description',
                  'Select the most appropriate category and tags'
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