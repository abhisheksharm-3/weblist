import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, User, Activity, Lock, FileText, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const collectedInfo = [
    {
      id: "account-info",
      icon: <User className="w-5 h-5 text-primary" />,
      text: "Basic account information (email, username)",
    },
    {
      id: "usage-data",
      icon: <Activity className="w-5 h-5 text-primary" />,
      text: "Usage data (how you interact with our service)",
    },
    {
      id: "resource-info",
      icon: <FileText className="w-5 h-5 text-primary" />,
      text: "Submitted resource information",
    },
  ];

  const informationUsage = [
    { id: "service-improvement", text: "To provide and improve our services" },
    {
      id: "communication",
      text: "To communicate with you about service updates",
    },
    { id: "security", text: "To maintain the security of our platform" },
  ];

  const dataProtection = [
    {
      id: "encryption",
      icon: <Lock className="w-5 h-5 text-primary" />,
      text: "Encryption of data in transit and at rest",
    },
    {
      id: "assessments",
      icon: <Shield className="w-5 h-5 text-primary" />,
      text: "Regular security assessments",
    },
    {
      id: "access-control",
      icon: <User className="w-5 h-5 text-primary" />,
      text: "Access controls and authentication",
    },
  ];

  const userRights = [
    { id: "access-correction", text: "Right to access and correction" },
    { id: "deletion", text: "Right to deletion" },
    { id: "portability", text: "Right to data portability" },
  ];

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="scroll-m-20 text-4xl font-bold font-display tracking-tight lg:text-5xl mb-4">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-7">
              At WebList, we take your privacy seriously. This privacy policy
              describes how we collect, use, and protect your personal
              information when you use our service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {collectedInfo.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {informationUsage.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Protection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4 leading-7">
              We implement appropriate technical and organizational measures to
              ensure a level of security appropriate to the risk, including:
            </p>
            <ul className="space-y-3">
              {dataProtection.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4 leading-7">
              You have the following rights regarding your personal data:
            </p>
            <ul className="space-y-3">
              {userRights.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4 leading-7">
              If you have any questions about our privacy policy or how we
              handle your data, please contact us at:
            </p>
            <a
              href="mailto:privacy@WebList.com"
              className="text-primary hover:text-primary/80 flex items-center gap-2 transition-colors"
            >
              <Mail className="w-5 h-5" />
              privacy@WebList.com
            </a>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground/60 text-center mt-8">
          This privacy policy was last updated on January 5, 2025. We may update
          this policy from time to time.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
