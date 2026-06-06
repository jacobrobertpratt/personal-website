
import type { Metadata } from "next";

import Link from 'next/link';

import { Html, Body, Main, Header, Footer } from "@/gui/core";
import { HeaderTitle, HeaderIcon } from "@/gui/client";
import { Menu } from "@/gui/widgets";

import { GLOBAL_APP_COPYWRITE, GLOBAL_APP_TITLE, GlobalLayoutClassNames } from '@/global';


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

/** -------------- ROOT FOOTER -------------- */

export function NavList({...props}) {
    return (
    <nav {...props}>
        <ul className="flex space-x-6">
            {props.children}
        </ul>
    </nav>);
}

// List of links to use -> move to global.tsx (or better just build based on locaiton).
const links: {href:string,text:string}[] = [
    { href:'/',text:'Home'},
    { href:'/projects',text:'Thesis'}
];

function buildTitleText() {
    return (
        <div className="mb-4 md:mb-0 justify-left">
            <span className="text-xl font-bold">
                {GLOBAL_APP_TITLE}
            </span>
        </div>
    );
}

function buildCopyWriteText() {
    return (
        <div className="mt-4 md:mt-0 text-sm text-gray-400 text-right">
            {GLOBAL_APP_COPYWRITE}
        </div>
    );
}

function buildLinkArrayItems({
    classname
}: {
    classname: string
}) {
    return (
        links.map((link,idx:number) => (
            <li key={idx+1}>
                <Link href={link.href} className={classname}>{link.text}</Link>
            </li>
        ))
    );
}

export function RootFooter({...props}) {
    
    return (
        <Footer className={GlobalLayoutClassNames.root.footer.foot}>
            {buildTitleText()}
            <NavList className={GlobalLayoutClassNames.root.footer.navl}>
                {buildLinkArrayItems({classname: GlobalLayoutClassNames.root.footer.link})}
            </NavList>
            {/* {buildFooterLinks()} */}
            {buildCopyWriteText()}
        </Footer>
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


