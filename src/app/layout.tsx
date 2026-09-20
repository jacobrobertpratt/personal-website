
import "./globals.css";

import { Section } from "@/components/section";
import Header from "@/components/header/header";

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

                <Section />
                {/* <Footer /> */}


            </body>
        </html >
    );
}
