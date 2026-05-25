
import type { Metadata } from "next";
import { Body, Main, RootHeader, RootFooter } from "@/gui/core";
import { GLOBAL_APP_TITLE, GlobalClassNameDictionary } from '@/global'

import "./globals.css";

export const metadata: Metadata = {
  title: GLOBAL_APP_TITLE, // Tab Text //
  description: "Personal portfolio of projects and work experience."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
      return (
        <html lang="en" className={GlobalClassNameDictionary.html.classname}>
            <Body className={GlobalClassNameDictionary.body.classname}>
                <RootHeader />
                <Main className={GlobalClassNameDictionary.main.classname}>{children}</Main>
                <RootFooter />
            </Body>
        </html >
  );
}


