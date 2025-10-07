import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth/next";
import 'svgmap/dist/svgMap.min.css';
import SessionProvider from "@/utils/SessionProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/Providers";
import SessionTimeoutWrapper from "@/components/SessionTimeoutWrapper";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ThePrintVerse - Custom Printing Solutions | Metal Posters, Magnets & Frames",
  description: "Transform your memories into stunning custom prints. Premium metal posters, fridge magnets, picture frames, and more. Fast, high-quality printing services.",
  keywords: "custom printing, metal posters, fridge magnets, picture frames, photo printing, personalized gifts",
  openGraph: {
    title: "ThePrintVerse - Custom Printing Solutions",
    description: "Premium custom printing services for your memories",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ClientLayout>
            <SessionTimeoutWrapper />
            <Header />
            <Providers>
              {children}
            </Providers>
            <Footer />
          </ClientLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
