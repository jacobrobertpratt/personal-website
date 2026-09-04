
import "./globals.css";

import type { Metadata } from "next";

import { GLOBAL_APP_TITLE } from '@/global';

import Header from "@/gui/components/header";
import Footer from '@/gui/components/footer'

export const metadata: Metadata = {
  title: GLOBAL_APP_TITLE, // Tab Text //
  description: "Personal portfolio & projects."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full w-full">
            <body className="min-h-full min-w-full">
                
                <Header />

                <main className="min-h-screen min-w-full" >{children}</main>

                <Footer />

            </body>
        </html >
  );
}
