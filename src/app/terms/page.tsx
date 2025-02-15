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

export default function Terms() {
  const lastUpdated = "February 7, 2024";

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Terms of Service</CardTitle>
            <CardDescription>Last Updated: {lastUpdated}</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold">1. Service Overview</h2>
                <p className="text-muted-foreground">
                  WebStudio provides frontend web development services,
                  including website design and development. By accessing our
                  services, you agree to these terms in their entirety.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">2. Project Scope</h2>
                <p className="text-muted-foreground">
                  Services are limited to frontend development and static
                  website creation. Each project includes:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Website design and development</li>
                  <li>Mobile responsive implementation</li>
                  <li>Basic SEO setup</li>
                  <li>GitHub Pages hosting setup</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">3. Payment Terms</h2>
                <p className="text-muted-foreground">
                  Project pricing is provided as estimates and may vary based on
                  specific requirements. Payment terms:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>50% deposit required to begin work</li>
                  <li>Remaining balance due upon project completion</li>
                  <li>All prices are in USD</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">4. Project Timeline</h2>
                <p className="text-muted-foreground">
                  Project timelines are estimates and may vary based on project
                  complexity and client feedback. Delays in client feedback may
                  extend project timelines.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">5. Deliverables</h2>
                <p className="text-muted-foreground">
                  Final deliverables include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Completed website hosted on GitHub Pages</li>
                  <li>Basic documentation for content updates</li>
                  <li>Source code access if requested</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">6. Revisions</h2>
                <p className="text-muted-foreground">
                  Projects include two rounds of revisions. Additional revisions
                  may incur extra charges at an hourly rate.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  7. Client Responsibilities
                </h2>
                <p className="text-muted-foreground">
                  Clients are responsible for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Providing necessary content and assets</li>
                  <li>Timely communication and feedback</li>
                  <li>Final content accuracy and legality</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  8. Intellectual Property
                </h2>
                <p className="text-muted-foreground">
                  Upon full payment, clients receive rights to the final website
                  design. Third-party assets (fonts, images, etc.) are subject
                  to their respective licenses.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  9. Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  WebStudio is not liable for any damages arising from the use
                  or inability to use our services. Maximum liability is limited
                  to the amount paid for services.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  10. Service Termination
                </h2>
                <p className="text-muted-foreground">
                  Either party may terminate services with written notice.
                  Clients are responsible for payment of work completed up to
                  termination date.
                </p>
              </section>

              <div className="mt-8 text-sm text-muted-foreground">
                <p>
                  By using our services, you acknowledge that you have read,
                  understood, and agree to these terms. These terms may be
                  updated without notice; continued use of services constitutes
                  acceptance of updated terms.
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
