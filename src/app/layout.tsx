
import type { Metadata } from "next";

import { GLOBAL_APP_TITLE } from '@/global'

import { Html, Body, Main, Header, Navi, RootFooter } from "@/gui/core";
import { Menu } from "@/gui/widgets"

import { HeaderTitle, HeaderIcon } from "@/gui/client"

import "./globals.css";

export const metadata: Metadata = {
  title: GLOBAL_APP_TITLE, // Tab Text //
  description: "Personal portfolio of projects and work experience."
};

/** -------------- ROOT HEADER -------------- */

const RootLayoutStyles = {
    head: "bg-green-500"
}

function RootHeader({...props}) {
    return (
        <Header className={RootLayoutStyles.head}>
            <HeaderIcon />
            <HeaderTitle />
            <Menu />
        </Header>
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Html lang="en" >
            <Body >
                <RootHeader />
                <Main >
                    {children}
                </Main>
                <RootFooter />
            </Body>
        </Html >
  );
}


