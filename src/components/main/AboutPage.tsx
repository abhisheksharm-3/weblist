import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Folder, Users, CheckCircle, Twitter, Github, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="scroll-m-20 text-4xl font-bold font-display tracking-tight lg:text-5xl mb-4">About WebList</h1>
        <p className="text-muted-foreground">
          A curated collection of valuable resources for developers, designers, and tech enthusiasts
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-8 leading-7">
            WebList started as a personal collection of bookmarks in Notion, carefully curated over years of web
            development and design experience. Our mission is to share these valuable resources with the broader
            community, helping developers and designers discover high-quality tools, tutorials, and resources that can
            accelerate their learning and improve their workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <Folder className="w-8 h-8 text-primary" />
              </div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">1000+ Resources</h3>
              <p className="text-sm text-muted-foreground">
                Carefully curated links across various categories
              </p>
            </div>

            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">Growing Community</h3>
              <p className="text-sm text-muted-foreground">
                Join thousands of developers and designers
              </p>
            </div>

            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                Every resource is manually verified
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Meet the Curator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <img
              src="https://github.com/abhisheksharm-3.png"
              alt="Abhishek Sharma"
              className="rounded-full mr-4"
              width={64}
              height={64}
            />
            <div>
              <h3 className="font-semibold">Abhishek Sharma</h3>
              <p className="text-sm text-muted-foreground mb-2">Full Stack Developer & Resource Curator</p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" asChild>
                  <a href="#" className="hover:text-primary">
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="#" className="hover:text-primary">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="#" className="hover:text-primary">
                    <Globe className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Get Involved</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6 leading-7">
            We believe in the power of community. Help us grow this resource collection by submitting your favorite
            tools, articles, and resources. Together, we can build the most comprehensive library of development and
            design resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              Submit a Resource
            </Button>
            <Button variant="secondary" size="lg">
              Join Our Community
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;