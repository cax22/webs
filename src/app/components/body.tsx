"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Code,
  Search,
  Settings,
  Layout,
  CheckCircle2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import WebsiteTypesGrid from "./types";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const AnimatedButton = ({
  children,
  onClick,
  className = "",
  variant = "default",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: "default" | "outline";
  disabled?: boolean;
}) => (
  <Button
    onClick={onClick}
    variant={variant}
    disabled={disabled}
    className={cn(
      "group relative inline-flex items-center justify-center gap-2",
      "transition-all duration-300 hover:scale-105 active:scale-95",
      disabled && "opacity-50 cursor-not-allowed",
      className
    )}
  >
    {children}
  </Button>
);

const FadeInSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      className={cn(
        "transform transition-all duration-1000 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ProjectDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    details: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Start Your Project</DialogTitle>
          <DialogDescription>
            Share your project details and I&apos;ll get back to you within 24
            hours.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </FormControl>
          </FormItem>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </FormControl>
          </FormItem>
          <FormItem>
            <FormLabel>Project Type</FormLabel>
            <Select
              value={formData.projectType}
              onValueChange={(value) => handleInputChange("projectType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Business Website</SelectItem>
                <SelectItem value="portfolio">Portfolio</SelectItem>
                <SelectItem value="store">Online Store</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem>
            <FormLabel>Project Details</FormLabel>
            <FormControl>
              <Input
                placeholder="Brief description of what you need"
                value={formData.details}
                onChange={(e) => handleInputChange("details", e.target.value)}
              />
            </FormControl>
          </FormItem>
        </div>
        <DialogFooter>
          <Button
            onClick={() => onOpenChange(false)}
            disabled={!formData.name || !formData.email}
          >
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  features,
}: FeatureCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Dialog open={showDetails} onOpenChange={setShowDetails}>
      <DialogTrigger asChild>
        <Card className="flex h-full cursor-pointer flex-col transition-all duration-300 hover:shadow-lg">
          <CardContent className="flex flex-1 flex-col p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{description}</p>
            <ul className="mt-auto space-y-2">
              {features.slice(0, 3).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-sm text-primary">
                  + {features.length - 3} more features
                </li>
              )}
            </ul>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-primary" />
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

const Body = () => {
  const [showProjectDialog, setShowProjectDialog] = useState(false);

  const handleProjectRequest = useCallback(() => {
    setShowProjectDialog(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technologies",
      features: [
        "Responsive design for all devices",
        "Content management system",
        "Standard security features",
        "Basic SEO setup",
        "Performance optimization",
      ],
    },
    {
      icon: Layout,
      title: "User Experience",
      description: "Focused on usability and engagement",
      features: [
        "Intuitive navigation",
        "Fast loading pages",
        "Mobile-friendly design",
        "Clear call-to-actions",
        "Accessible layouts",
      ],
    },
    {
      icon: Search,
      title: "Search Optimization",
      description: "Built to be found online",
      features: [
        "Clean code structure",
        "Performance focused",
        "Standard meta setup",
        "Sitemap included",
        "Analytics ready",
      ],
    },
    {
      icon: Settings,
      title: "Easy Management",
      description: "Simple tools to update your site",
      features: [
        "Content management",
        "User documentation",
        "Update guides",
        "Basic admin tools",
        "Backup setup",
      ],
    },
  ];

  const faqs = [
    {
      question: "What's included in the development?",
      answer:
        "Development includes responsive design, content management system, standard security, and basic SEO setup. Additional features available based on project needs.",
    },
    {
      question: "How long does it take?",
      answer:
        "Most projects take 1-4 weeks from start to finish, depending on complexity and feedback timing.",
    },
    {
      question: "Can I update the website myself?",
      answer:
        "Yes, you'll get a content management system for basic updates. Documentation is provided for common tasks.",
    },
    {
      question: "What about hosting and updates?",
      answer:
        "I can recommend hosting options and provide initial setup. After launch, you'll have documentation for managing your site.",
    },
  ];
  return (
    <div className="relative min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="py-16 text-center sm:py-20">
          <FadeInSection>
            <h1 className="mb-8 text-4xl font-bold sm:text-5xl md:text-6xl">
              Professional <span className="text-primary">Web Development</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              Custom websites built with modern technologies, focused on
              performance and user experience.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/quote">
                <Button className="w-full sm:w-auto group">
                  Start a Project
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="w-full sm:w-auto">
                  View Examples
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </header>

        {/* Services Section */}
        <section className="py-16" id="services">
          <FadeInSection>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need for your website
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <FeatureCard key={service.title} {...service} />
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Website Types */}
        <section id="examples">
          <WebsiteTypesGrid />
        </section>

        {/* FAQ Section */}
        <section className="py-16" id="process">
          <FadeInSection>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl">
                  Common Questions
                </CardTitle>
                <CardDescription className="text-center">
                  Important information about the development process
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b last:border-0"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="hover:text-primary">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="rounded-lg bg-muted/50 p-4">
                          <p className="text-sm text-muted-foreground">
                            {item.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
              <CardFooter className="flex justify-center pb-6 pt-2">
                <Link href="/faq">
                  <Button variant="outline" className="flex items-center gap-2">
                    Got Questions? <MessageCircle className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </FadeInSection>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <FadeInSection>
            <Card className="overflow-hidden">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <h2 className="mb-6 text-3xl font-bold">
                  Ready to Get Started?
                </h2>
                <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
                  Let&apos;s discuss your project and create a website that
                  works for you.
                </p>
                <div className="flex flex-col items-center gap-4">
                  <Link href="/quote">
                    <Button className="px-8 py-6 text-lg group">
                      Start Your Project
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary">Modern web development</Badge>
                    <Badge variant="secondary">Project-based work</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </section>
      </div>

      {/* Project Dialog */}
      <ProjectDialog
        open={showProjectDialog}
        onOpenChange={setShowProjectDialog}
      />

      {/* Mobile Action Button */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <AnimatedButton
          onClick={handleProjectRequest}
          className="rounded-full p-4 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Body;
