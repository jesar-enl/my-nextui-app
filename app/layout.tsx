import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Image from "next/image";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { adventSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/our_logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-adventist antialiased",
          adventSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex justify-between">
            <div className="flex flex-col h-screen w-[88.7%]">
              <Navbar />
              <main className="container mx-auto max-w-7xl flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <div className="fixed bg-ming w-[11.3%] h-screen top-0 right-0 text-white">
              <Image
                alt="logo"
                className="top-0 right-0"
                height={230}
                src="/images/white.png"
                width={250}
              />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
