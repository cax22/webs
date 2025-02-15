import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "WebMeLOL - Professional Web Development",
    template: "%s | WebMeLOL",
  },
  description:
    "Custom websites for local businesses and professionals. Specializing in modern, responsive design with free GitHub hosting.",
  keywords: [
    "web development",
    "website design",
    "frontend development",
    "static websites",
    "professional websites",
    "responsive design",
    "free hosting",
  ],
  authors: [{ name: "WebMeLOL" }],
  creator: "WebMeLOL",
  publisher: "WebMeLOL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webmelol.com",
    siteName: "WebMeLOL",
    title: "WebMeLOL - Professional Web Development",
    description: "Custom websites for local businesses and professionals",
    images: [
      {
        url: "/og-image.jpg", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "WebMeLOL Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebMeLOL - Professional Web Development",
    description: "Custom websites for local businesses and professionals",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "KVnNEm36hqcqvuNSt2_5kzcwSHapDBBZrqnNm0X2iTk", // Add your Google verification code
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://webmelol.com" />
        <meta name="theme-color" content="#000000" />

        {/* Schema.org markup for business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "WebMeLOL",
              description:
                "Custom websites for local businesses and professionals",
              image: "https://webmelol.com/og-image.jpg",
              url: "https://webmelol.com",
              telephone: "",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
              },
              sameAs: [
                "https://www.linkedin.com/company/webmelol",
                "https://instagram.com/webmelol",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
