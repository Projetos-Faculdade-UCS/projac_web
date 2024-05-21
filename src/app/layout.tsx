import {
    SideBar,
    SideBarContent,
    SideBarFooter,
    SideBarHeader,
    SideBarItem,
} from '@/entities/side-bar/ui';
import { poppins } from '@/shared/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Projac',
    description: 'Sistema de projetos acadêmicos',
};

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
                className={`${poppins.className} flex min-h-screen w-full flex-row bg-background`}
            >
                <SideBar className="bg-primary-foreground">
                    <SideBarHeader>
                        <h1 className="text-white">Header</h1>
                    </SideBarHeader>
                    <SideBarContent>
                        <SideBarItem href="/projetos">Projetos</SideBarItem>
                        <SideBarItem href="/projetos/2">Projeto 2</SideBarItem>
                    </SideBarContent>
                    <SideBarFooter>
                        <h1 className="text-white">Footer</h1>
                    </SideBarFooter>
                </SideBar>
                <main className="w-full">{children}</main>
                <script
                    type="module"
                    src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
                />
                <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
            </body>
        </html>
    );
}
