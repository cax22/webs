"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "Central Florida Window Cleaners",
    description:
      "Professional window cleaning service website with modern design and easy contact options",
    tags: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://centralfloridawindowcleaners.com/",
    imageUrl: "/window-cleaners.png",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="mt-4 text-lg text-muted-foreground">Recent Projects</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                draggable="false"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Site
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/quote">
          <Button className="gap-2">Start Your Project</Button>
        </Link>
      </div>
    </div>
  );
}
