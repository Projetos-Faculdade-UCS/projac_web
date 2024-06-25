import { SideBarPronta } from '@/entities/side-bar/ui/side-bar-pronta';
import { poppins } from '@/shared/lib/fonts';
import { Toaster } from '@/shared/ui/sonner';
import { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body
                className={`${poppins.className} flex h-screen w-full flex-row bg-background`}
            >
                <SideBarPronta />
                {children}
                <Toaster richColors position="top-right" />
                <Script
                    type="module"
                    src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
                />
                <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: 'Acadion',
    description: 'Sistema de projetos acadêmicos',
};
