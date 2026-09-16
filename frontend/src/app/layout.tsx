import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-next",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif-next",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "InternAtlas — Find Your Next Opportunity",
    template: "%s | InternAtlas",
  },
  description:
    "InternAtlas helps students discover internships, jobs, hackathons, competitions, scholarships and events — all in one place.",
  keywords: [
    "internships",
    "jobs for freshers",
    "hackathons",
    "scholarships",
    "student opportunities",
    "campus events",
  ],
  icons: {
    icon: "data:,", // Removes the default favicon
  },
  openGraph: {
    title: "InternAtlas — Find Your Next Opportunity",
    description:
      "Discover internships, jobs, hackathons, competitions, scholarships and events — all in one place.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
