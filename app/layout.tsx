import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { nunito } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

const { metaInfo } = siteConfig;

export const metadata: Metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <header>
          <Header />
        </header>
        <main>
          <aside>
            <Sidebar />
          </aside>
          <section>
            <Providers>{children}</Providers>
          </section>
        </main>
      </body>
    </html>
  );
}
