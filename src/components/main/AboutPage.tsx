import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Folder, Users, CheckCircle, Twitter, Github } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 text-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-3">About LinkVault</h1>
        <p className="text-zinc-400">
          A curated collection of valuable resources for developers, designers, and tech enthusiasts
        </p>
      </div>

      <Card className="bg-zinc-900 mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            LinkVault started as a personal collection of bookmarks in Notion, carefully curated over years of web
            development and design experience. Our mission is to share these valuable resources with the broader
            community, helping developers and designers discover high-quality tools, tutorials, and resources that can
            accelerate their learning and improve their workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <Folder className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="font-semibold mb-2">1000+ Resources</h3>
              <p className="text-zinc-400 text-sm">
                Carefully curated links across various categories
              </p>
            </div>

            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="font-semibold mb-2">Growing Community</h3>
              <p className="text-zinc-400 text-sm">
                Join thousands of developers and designers
              </p>
            </div>

            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-zinc-400 text-sm">
                Every resource is manually verified
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Meet the Curator</h2>
          <div className="flex items-center">
            <img
              src="/api/placeholder/64/64"
              alt="John Doe"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-zinc-400 text-sm mb-2">Full Stack Developer & Resource Curator</p>
              <div className="flex space-x-3">
                <a href="#" className="text-zinc-400 hover:text-indigo-500">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-indigo-500">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Get Involved</h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            We believe in the power of community. Help us grow this resource collection by submitting your favorite
            tools, articles, and resources. Together, we can build the most comprehensive library of development and
            design resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium transition-colors">
              Submit a Resource
            </button>
            <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-md font-medium transition-colors">
              Join Our Community
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;