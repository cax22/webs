"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Github, Linkedin, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sitemap = {
    main: [
      { label: "Services", href: "#services" },
      { label: "Development Process", href: "#process" },
      { label: "Examples", href: "/portfolio" },
      { label: "FAQ", href: "/faq" },
    ],
    services: [
      { label: "Web Development", href: "#web-development" },
      { label: "Business Sites", href: "#business" },
      { label: "Online Stores", href: "#stores" },
      { label: "Portfolio Sites", href: "/portfolio" },
    ],
  };

  const socials = [
    { icon: Github, href: "https://github.com/", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/webmelol",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/webmelol",
      label: "Instagram",
    },
  ];

  const handleContactClick = () => {
    console.log("Contact clicked");
  };

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Info Section */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold">
              WebMeLOL
            </Link>
            <p className="max-w-md text-sm text-muted-foreground">
              I build custom websites focused on performance and user
              experience. Each project is crafted to create an effective online
              presence for your business.
            </p>
            <div className="pt-2">
              <Link href="/quote">
                <Button
                  onClick={handleContactClick}
                  className="group"
                  variant="outline"
                >
                  Start a Project
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Services</h3>
              <ul className="space-y-3">
                {sitemap.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Navigation</h3>
              <ul className="space-y-3">
                {sitemap.main.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Connect Section */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Email */}
          <a
            href="mailto:contact@webmelol.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            contact@webmelol.com
          </a>

          {/* Social Links */}
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/site-map"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Sitemap
            </Link>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WebMeLOL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
