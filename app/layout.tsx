import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishakti Labs — Engineering reliable outcomes",
  description:
    "Ishakti Labs delivers AI-assisted (human-reviewed) backend reliability & delivery sprints to reduce production risk and improve delivery confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}