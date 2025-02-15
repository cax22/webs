"use client";

import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const sitemapData = [
  {
    title: "Main Pages",
    links: [
      { id: "home", name: "Home", path: "/" },
      { id: "about", name: "About", path: "/about" },
      { id: "portfolio", name: "Portfolio", path: "/portfolio" },
      { id: "getstarted", name: "Get Started", path: "/quote" },
      { id: "faq", name: "FAQ", path: "/faq" },
    ],
  },
  {
    title: "Services",
    links: [
      {
        id: "business",
        name: "Static Business Websites",
        path: "/getstarted?type=business",
      },
      {
        id: "portfolio-site",
        name: "Portfolio Sites",
        path: "/getstarted?type=portfolio",
      },
      {
        id: "landing",
        name: "Landing Pages",
        path: "/getstarted?type=landing",
      },
      { id: "blog", name: "Blog Websites", path: "/getstarted?type=blog" },
    ],
  },
  {
    title: "Legal & Info",
    links: [
      { id: "privacy", name: "Privacy Policy", path: "/privacy" },
      { id: "terms", name: "Terms of Service", path: "/terms" },
      { id: "sitemap", name: "Site Map", path: "/site-map" },
    ],
  },
];

export default function SiteMap() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-center text-4xl font-bold">Site Map</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-16">
          {sitemapData.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.id}>
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
      <Footer />
    </>
  );
}
