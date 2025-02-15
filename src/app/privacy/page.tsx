"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Privacy() {
  const lastUpdated = "February 7, 2024";

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Privacy Policy</CardTitle>
            <CardDescription>Last Updated: {lastUpdated}</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold">Introduction</h2>
                <p className="text-muted-foreground">
                  This Privacy Policy explains how WebStudio (&quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;) collects, uses, and
                  protects your information when you use our web development
                  services or visit our website.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground">
                  We collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Project requirements and preferences</li>
                  <li>Communication records</li>
                  <li>Website usage data through analytics</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground">
                  Your information is used for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Providing web development services</li>
                  <li>Communicating about your project</li>
                  <li>Sending project updates and quotes</li>
                  <li>Improving our services</li>
                  <li>Legal obligations and contract fulfillment</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">Information Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your
                  information, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Secure communication channels</li>
                  <li>Limited access to personal information</li>
                  <li>Regular security assessments</li>
                  <li>Secure data storage practices</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your information for as long as needed to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Complete your project</li>
                  <li>Provide ongoing support</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">Third-Party Services</h2>
                <p className="text-muted-foreground">
                  We use the following third-party services:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>GitHub Pages for website hosting</li>
                  <li>Google Analytics for website statistics</li>
                  <li>Communication platforms for project management</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  These services have their own privacy policies and data
                  handling practices.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">Your Rights</h2>
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Request corrections to your data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">Cookie Policy</h2>
                <p className="text-muted-foreground">
                  Our website uses essential cookies to ensure basic
                  functionality. We also use analytics cookies to understand how
                  visitors use our site. You can control cookie preferences
                  through your browser settings.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">Contact Information</h2>
                <p className="text-muted-foreground">
                  For privacy-related questions or concerns, contact us at:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Email: privacy@webstudio.com</li>
                  <li>Through our contact form</li>
                </ul>
              </section>

              <div className="mt-8 text-sm text-muted-foreground">
                <p>
                  This Privacy Policy may be updated periodically. We will
                  notify you of any material changes by posting the new Privacy
                  Policy on this page and updating the &quot;Last Updated&quot;
                  date.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
