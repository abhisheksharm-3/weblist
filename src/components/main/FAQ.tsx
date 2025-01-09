import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How are the resources curated?",
      answer: "Each resource is carefully reviewed and evaluated based on its quality, relevance, and usefulness to our community. We consider factors such as content accuracy, presentation, and practical application before adding it to our collection."
    },
    {
      question: "Can I submit my own resources?",
      answer: "Yes! We welcome community submissions. You can use our submission form to share valuable resources. Each submission is reviewed by our team to ensure it meets our quality standards before being published."
    },
    {
      question: "How often are new resources added?",
      answer: "We add new resources on a weekly basis. Our team constantly reviews new submissions and actively searches for high-quality content to add to the collection. You can follow our social media channels for updates on new additions."
    },
    {
      question: "Is there a cost to access the resources?",
      answer: "No, LinkVault is completely free to use. Our mission is to make quality resources accessible to everyone in the development and design community. While some linked resources might be premium products, access to LinkVault itself is free."
    },
    {
      question: "How can I report a broken link?",
      answer: "If you encounter a broken link, please use the 'Report Link' button available on each resource card. Our team will review and update or remove the resource as needed. We appreciate your help in maintaining the quality of our collection."
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h1>
        <p className="text-zinc-400">
          Find answers to common questions about LinkVault
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-zinc-900 rounded-lg border border-zinc-800"
          >
            <AccordionTrigger className="px-4 py-4 text-white hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-zinc-400">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-8">
        <p className="text-zinc-400 mb-4">Still have questions?</p>
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default FAQSection;