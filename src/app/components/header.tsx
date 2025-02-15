"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "Contact" },
] as const;

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#")) {
      e.preventDefault();

      // If we're already on the home page
      if (pathname === "/") {
        const element = document.getElementById(href.substring(2));
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // If we're on a different page, navigate home with the hash
        window.location.href = href;
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="group relative text-foreground/80 transition-colors hover:text-foreground"
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  );
};

const MobileNav = () => {
  const pathname = usePathname();

  const handleMobileClick = (href: string) => {
    if (href.startsWith("/#")) {
      if (pathname === "/") {
        const element = document.getElementById(href.substring(2));
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 bg-foreground" />
            <span className="h-0.5 w-4 bg-foreground" />
            <span className="h-0.5 w-5 bg-foreground" />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left text-primary">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col">
          <nav className="mt-8 flex flex-col space-y-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => handleMobileClick(href)}
                className="text-base text-foreground/80 transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Separator className="my-4" />
          <div className="flex items-center gap-3 text-foreground/80">
            <ThemeSwitcher />
            <span>Theme</span>
          </div>
          <Link href="/quote">
            <Button className="mt-auto w-full">Start a Project</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/80 py-4 shadow backdrop-blur-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            WebMeLOL
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <ThemeSwitcher />
            <Link href="/quote">
              <Button>Start a Project</Button>
            </Link>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
