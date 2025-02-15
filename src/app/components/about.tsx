"use client";

import { GraduationCap, Code, Rocket, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Frontend Development Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Engineering Student | Web Developer
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Academic Background</h2>
                </div>
                <p className="text-muted-foreground">
                  Currently pursuing an Engineering degree, with a focus on
                  technical problem-solving and analytical thinking. This
                  academic foundation informs my structured approach to web
                  development projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    Development Approach
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  Using Visual Studio Code and modern web technologies, I create
                  custom websites from scratch. Each project is hand-coded with
                  attention to detail and optimized for performance.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Development Services</h2>
              </div>
              <p className="text-muted-foreground">
                Specializing in frontend web development with a focus on
                creating responsive, modern websites. Every project receives
                personalized attention and includes:
              </p>
              <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  • Custom code written from scratch
                </div>
                <div className="flex items-center gap-2">
                  • Modern React-based development
                </div>
                <div className="flex items-center gap-2">
                  • Mobile-first responsive design
                </div>
                <div className="flex items-center gap-2">
                  • Free hosting through GitHub Pages
                </div>
                <div className="flex items-center gap-2">
                  • Performance optimization
                </div>
                <div className="flex items-center gap-2">
                  • Post-launch support
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Project Approach</h2>
              </div>
              <p className="text-muted-foreground">
                Client satisfaction is my top priority. Each project begins with
                understanding your specific needs and continues with regular
                updates throughout development. My engineering background
                combined with web development expertise ensures clean,
                efficient, and user-friendly solutions.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Link href="/portfolio">
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View Projects
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button className="gap-2">Start a Project</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              All services provided are for frontend web development only.
              Project quotes are estimates and subject to change based on
              specific requirements. Free hosting is provided through GitHub
              Pages with its standard terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
