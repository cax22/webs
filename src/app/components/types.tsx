import React from "react";
import { Check, Store, Briefcase, ShoppingBag, User, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const WebsiteTypesGrid = () => {
  const websiteTypes = [
    {
      name: "Local Business",
      icon: Store,
      description:
        "Perfect for restaurants, shops, and local service providers",
      idealFor: [
        "Restaurants & Cafes",
        "Retail Stores",
        "Service Providers",
        "Local Professionals",
      ],
      features: [
        "Business Hours & Location",
        "Service/Menu Listings",
        "Photo Gallery",
        "Contact Forms",
        "Mobile Responsive",
        "Local SEO Optimization",
        "Google Maps Integration",
        "Social Media Links",
      ],
      customOptions: [
        "Online Booking System",
        "Virtual Tour Integration",
        "Review Management",
        "Menu Ordering System",
      ],
    },
    {
      name: "Professional Portfolio",
      icon: User,
      description: "Showcase your work and professional experience",
      idealFor: ["Photographers", "Artists", "Designers", "Freelancers"],
      features: [
        "Portfolio Gallery",
        "About Me Section",
        "Services Page",
        "Professional Bio",
        "Work History",
        "Testimonials",
        "Contact Form",
        "Blog Option",
      ],
      customOptions: [
        "Client Portal",
        "Digital Downloads",
        "Advanced Gallery",
        "Project Management",
      ],
    },
    {
      name: "E-Commerce Solution",
      icon: ShoppingBag,
      description: "Full-featured online store for your products",
      idealFor: [
        "Online Retailers",
        "Digital Products",
        "Subscription Services",
        "Boutique Shops",
      ],
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Secure Checkout",
        "Inventory Management",
        "Order Tracking",
        "Payment Gateway",
        "Customer Accounts",
        "Mobile Shopping",
      ],
      customOptions: [
        "Subscription Management",
        "Advanced Analytics",
        "Multi-currency Support",
        "Wholesale Portal",
      ],
    },
    {
      name: "Business Website",
      icon: Briefcase,
      description: "Professional presence for established businesses",
      idealFor: [
        "Small Businesses",
        "Corporate Offices",
        "Professional Services",
        "Organizations",
      ],
      features: [
        "Company Profile",
        "Service Pages",
        "Team Profiles",
        "Case Studies",
        "Blog Integration",
        "Newsletter Signup",
        "Multi-language Option",
        "Analytics Integration",
      ],
      customOptions: [
        "Intranet Portal",
        "Career Portal",
        "Document Management",
        "Marketing Automation",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Choose Your Website Type
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Select the website solution that matches your needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {websiteTypes.map((type) => (
            <Card
              key={type.name}
              className="group relative flex h-full flex-col transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-lg bg-secondary p-3 transition-colors group-hover:bg-secondary/80">
                    <type.icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl">
                  {type.name}
                </CardTitle>
                <CardDescription className="text-center">
                  {type.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow space-y-6">
                <div>
                  <h4 className="mb-3 font-semibold">Ideal For:</h4>
                  <ul className="space-y-2">
                    {type.idealFor.map((ideal) => (
                      <li key={ideal} className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{ideal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <ScrollArea className="h-[200px] pr-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 font-semibold">Core Features:</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-sm"
                          >
                            <Check className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 flex items-center font-semibold">
                        <Plus className="mr-2 h-4 w-4" />
                        Available Customizations:
                      </h4>
                      <ul className="space-y-2 pl-4 text-sm text-muted-foreground">
                        {type.customOptions.map((option) => (
                          <li key={option}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>

        <Alert className="mt-12">
          <AlertDescription>
            Every website is unique! Contact us to discuss custom features and
            get a personalized quote based on your specific needs.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default WebsiteTypesGrid;
