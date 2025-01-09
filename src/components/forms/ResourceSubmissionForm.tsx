"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FormData {
    url: string;
    title: string;
    description: string;
    category: string;
    tags: string;
    resourceType: string;
}

interface FormErrors {
    [key: string]: string;
}

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
            // Handle form submission
            console.log('Form submitted:', formData);
        } else {
            setErrors(newErrors);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="bg-zinc-900 text-white">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold mb-2">Submit a Resource</h1>
          <p className="text-zinc-400 mb-6">
            Share valuable resources with the community. All submissions are reviewed before being published.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2">
                Resource URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="url"
                placeholder="https://"
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:outline-none"
                value={formData.url}
                onChange={handleInputChange}
              />
              {errors.url && <p className="text-red-500 mt-1 text-sm">{errors.url}</p>}
            </div>

            <div>
              <label className="block mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Give your resource a descriptive title"
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:outline-none"
                value={formData.title}
                onChange={handleInputChange}
              />
              {errors.title && <p className="text-red-500 mt-1 text-sm">{errors.title}</p>}
            </div>

            <div>
              <label className="block mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Describe what makes this resource valuable..."
                rows={4}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:outline-none"
                value={formData.description}
                onChange={handleInputChange}
              />
              {errors.description && <p className="text-red-500 mt-1 text-sm">{errors.description}</p>}
            </div>

            <div>
              <label className="block mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:outline-none"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="business">Business</option>
              </select>
              {errors.category && <p className="text-red-500 mt-1 text-sm">{errors.category}</p>}
            </div>

            <div>
              <label className="block mb-2">Tags</label>
              <input
                type="text"
                name="tags"
                placeholder="Add tags (comma separated)"
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:outline-none"
                value={formData.tags}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block mb-2">
                Resource Type <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                {['Article', 'Tutorial', 'Tool', 'Course'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`px-4 py-2 rounded border ${
                      formData.resourceType === type
                        ? 'bg-blue-600 border-blue-500'
                        : 'bg-zinc-800 border-zinc-700 hover:border-zinc-600'
                    }`}
                    onClick={() => {
                      setFormData(prev => ({
                        ...prev,
                        resourceType: type
                      }));
                      if (errors.resourceType) {
                        setErrors(prev => ({
                          ...prev,
                          resourceType: ''
                        }));
                      }
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {errors.resourceType && <p className="text-red-500 mt-1 text-sm">{errors.resourceType}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-medium transition-colors"
            >
              Submit Resource
            </button>
          </form>

          <div className="mt-8 p-4 bg-zinc-800 rounded">
            <h2 className="text-lg font-semibold mb-3">Submission Guidelines</h2>
            <ul className="space-y-2">
              {[
                'Ensure the resource is high-quality and provides value to the community',
                'Check if the resource hasn\'t been submitted before',
                'Provide accurate and detailed description',
                'Select the most appropriate category and tags'
              ].map((guideline, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-zinc-400">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceSubmissionForm;