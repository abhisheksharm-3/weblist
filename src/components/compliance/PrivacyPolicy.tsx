import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, User, Activity, Lock, FileText, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 text-white">
      <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-zinc-400 mb-8">Last updated: January 2024</p>

      <div className="space-y-6">
        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-3">Introduction</h2>
            <p className="text-zinc-400">
              At WebList, we take your privacy seriously. This privacy policy describes how we collect, use, and protect
              your personal information when you use our service.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Information We Collect</h2>
            <ul className="space-y-3">
              {[
                { icon: <User className="w-5 h-5 text-blue-400" />, text: "Basic account information (email, username)" },
                { icon: <Activity className="w-5 h-5 text-green-400" />, text: "Usage data (how you interact with our service)" },
                { icon: <FileText className="w-5 h-5 text-purple-400" />, text: "Submitted resource information" }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-zinc-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">How We Use Your Information</h2>
            <ul className="space-y-3">
              {[
                "To provide and improve our services",
                "To communicate with you about service updates",
                "To maintain the security of our platform"
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-indigo-400" />
                  <span className="text-zinc-400">{text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Data Protection</h2>
            <p className="text-zinc-400 mb-4">
              We implement appropriate technical and organizational measures to ensure a level of security appropriate to
              the risk, including:
            </p>
            <ul className="space-y-3">
              {[
                { icon: <Lock className="w-5 h-5 text-yellow-400" />, text: "Encryption of data in transit and at rest" },
                { icon: <Shield className="w-5 h-5 text-red-400" />, text: "Regular security assessments" },
                { icon: <User className="w-5 h-5 text-green-400" />, text: "Access controls and authentication" }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-zinc-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Your Rights</h2>
            <p className="text-zinc-400 mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="space-y-3">
              {[
                "Right to access and correction",
                "Right to deletion",
                "Right to data portability"
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-zinc-400">{text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-zinc-400 mb-4">
              If you have any questions about our privacy policy or how we handle your data, please contact us at:
            </p>
            <a 
              href="mailto:privacy@WebList.com" 
              className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              privacy@WebList.com
            </a>
          </CardContent>
        </Card>

        <p className="text-sm text-zinc-500 text-center mt-8">
          This privacy policy was last updated on January 5, 2024. We may update this policy from time to time.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;