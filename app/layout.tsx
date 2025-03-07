import { nunito } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
