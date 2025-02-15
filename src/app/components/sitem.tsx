"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const sitemapData = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Get Started", path: "/getstarted" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Static Business Websites", path: "/getstarted" },
      { name: "Portfolio Sites", path: "/getstarted" },
      { name: "Landing Pages", path: "/getstarted" },
      { name: "Blog Websites", path: "/getstarted" },
    ],
  },
  {
    title: "Legal & Info",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Sitemap", path: "/sitemap" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">Sitemap</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sitemapData.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="text-xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="group flex items-center text-muted-foreground hover:text-foreground"
                    >
                      <ChevronRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
