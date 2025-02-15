"use client";

import React, { useState } from "react";
import { Search, Mail, Phone, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FAQp = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      id: "item-1",
      question: "What services do you offer?",
      answer:
        "I provide custom website development services including: responsive website design, landing page creation, and website maintenance. Each project is tailored to meet your specific needs and goals.",
    },
    {
      id: "item-2",
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and requirements. A basic website typically takes 2-4 weeks to complete. I'll provide a detailed timeline estimate after our initial consultation.",
    },
    {
      id: "item-3",
      question: "Am I Gay?",
      answer: "Yes.",
    },
    {
      id: "item-4",
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and requirements. A basic website typically takes 2-4 weeks to complete. I'll provide a detailed timeline estimate after our initial consultation.",
    },
    {
      id: "item-5",
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and requirements. A basic website typically takes 2-4 weeks to complete. I'll provide a detailed timeline estimate after our initial consultation.",
    },
    {
      id: "item-6",
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and requirements. A basic website typically takes 2-4 weeks to complete. I'll provide a detailed timeline estimate after our initial consultation.",
    },
  ];

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Contact Card - Full width on mobile, sidebar on desktop */}
        <Card className="lg:w-72 w-full h-fit">
          <CardHeader>
            <CardTitle className="text-xl">Contact Page</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="text-gray-500" size={20} />
              <span className="break-all">
                <a href="mailto:contact@webmelol.com">contact@webmelol.com</a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-gray-500" size={20} />
              <span>+1 (863) 327-5473</span>
            </div>
            <Link href="/quote" className="block">
              <Button className="w-full mt-4 flex items-center justify-center gap-2">
                Want a quote? <ArrowRight size={16} />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* FAQ Card - Full width */}
        <Card className="flex-1">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-2xl sm:text-3xl text-center">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="relative mb-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search
                  className="absolute left-3 top-3 text-gray-400"
                  size={16}
                />
              </div>
            </div>

            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left px-4 text-sm sm:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 text-sm sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No matching FAQ found. Please try a different search term.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQp;
