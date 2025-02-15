"use client";

import { useState, FormEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

const projectTypes = [
  {
    value: "static-business",
    label: "Static Business Website",
    price: "Starting at $499",
    description: "Modern, responsive website with free hosting",
  },
  {
    value: "static-portfolio",
    label: "Portfolio/Personal Site",
    price: "Starting at $399",
    description: "Showcase your work with a professional site",
  },
  {
    value: "static-landing",
    label: "Landing Page",
    price: "Starting at $299",
    description: "Single-page site to promote your product/service",
  },
  {
    value: "static-blog",
    label: "Blog Website",
    price: "Starting at $449",
    description: "Content-focused site with easy updates",
  },
  {
    value: "custom",
    label: "Custom Project",
    price: "Custom quote",
    description: "Contact for specific requirements",
  },
];

const budgetRanges = [
  "Under $500",
  "$500 - $1,000",
  "$1,000 - $2,000",
  "$2,000+",
];

const timelines = [
  "1-2 weeks",
  "2-4 weeks",
  "1-2 months",
  "2+ months",
  "Flexible",
];

const features = [
  "Modern Design",
  "Mobile Responsive",
  "Free Hosting Setup",
  "Basic SEO Setup",
  "Contact Form",
  "Analytics Setup",
  "Social Media Links",
  "Content Updates Guide",
];

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email?.includes("@"))
      newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.projectType)
      newErrors.projectType = "Project type is required";
    if (!formData.budget) newErrors.budget = "Budget is required";
    if (!formData.timeline) newErrors.timeline = "Timeline is required";
    if (!formData.description)
      newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
      if (!webhookUrl) throw new Error("Webhook URL not configured");

      const message = {
        embeds: [
          {
            title: "New Project Inquiry",
            color: 0x00ff00,
            fields: [
              { name: "Name", value: formData.name, inline: true },
              { name: "Email", value: formData.email, inline: true },
              { name: "Phone", value: formData.phone, inline: true },
              {
                name: "Project Type",
                value: formData.projectType,
                inline: true,
              },
              { name: "Budget", value: formData.budget, inline: true },
              { name: "Timeline", value: formData.timeline, inline: true },
              { name: "Description", value: formData.description },
            ],
            footer: {
              text: "This is a project inquiry and not a binding agreement. Final pricing and details to be discussed.",
            },
            timestamp: new Date().toISOString(),
          },
        ],
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });

      alert("Quote request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting quote request:", error);
      alert("Failed to submit quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-4xl font-bold">Get a Quote</h1>
          <p className="mb-6 text-muted-foreground">
            Let&apos;s discuss your project and create a website that works for
            you.
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Project Types</CardTitle>
              <CardDescription>Available website packages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectTypes.map((type) => (
                  <div key={type.value} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{type.label}</span>
                      <span className="text-primary font-semibold">
                        {type.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Included Features</CardTitle>
              <CardDescription>Standard with most projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Project Inquiry</CardTitle>
              <CardDescription>
                Share your project details below. All prices are estimates and
                subject to discussion. Free consultation included.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span className="text-sm text-red-500">{errors.name}</span>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">{errors.email}</span>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Your phone number"
                  />
                  {errors.phone && (
                    <span className="text-sm text-red-500">{errors.phone}</span>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, projectType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.projectType && (
                    <span className="text-sm text-red-500">
                      {errors.projectType}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.budget && (
                    <span className="text-sm text-red-500">
                      {errors.budget}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, timeline: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>
                          {timeline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.timeline && (
                    <span className="text-sm text-red-500">
                      {errors.timeline}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="min-h-[100px]"
                  />
                  {errors.description && (
                    <span className="text-sm text-red-500">
                      {errors.description}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
