import "./globals.css";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ishakti Labs | Engineering Reliable Outcomes",
    template: "%s | Ishakti Labs",
  },
  description:
    "Ishakti Labs helps B2B product teams improve backend reliability and delivery confidence through focused engineering sprints.",
  openGraph: {
    title: "Ishakti Labs | Engineering Reliable Outcomes",
    description:
      "Fixed-scope reliability sprints for B2B product teams that need better release confidence and production readiness.",
    url: siteUrl,
    siteName: "Ishakti Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishakti Labs | Engineering Reliable Outcomes",
    description:
      "Practical backend reliability and delivery acceleration for B2B teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}