import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { fredoka } from "@/config/fonts";
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
      <body className={`${fredoka.className} antialiased`}>
        <Providers>
          <header className="mb-4">
            <Header />
          </header>
          <main className="grid grid-cols-[1fr_2fr_1fr] min-h-[89vh]">
            <aside className="place-items-center">
              <Sidebar />
            </aside>
            <section className="col-span-2 bg-gray-100 rounded-tl-4xl p-8">
              {children}
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
