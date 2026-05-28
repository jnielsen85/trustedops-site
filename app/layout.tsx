import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./tokens.css";
import "react-international-phone/style.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LaunchDarklyProvider } from "@/components/LaunchDarklyProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TrustedOps — Better Talent Economics",
    template: "%s — TrustedOps",
  },
  description: "TrustedOps helps you build and run high-leverage offshore teams with a managed operations backbone.",
  metadataBase: new URL("https://trustedops.team"),
  openGraph: {
    title: "TrustedOps — Better Talent Economics",
    description: "Build and run high-leverage offshore teams with a managed operations backbone.",
    type: "website",
  },
  icons: {
    icon: "/brand/favicon_32.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>
        <LaunchDarklyProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LaunchDarklyProvider>
      </body>
    </html>
  );
}
