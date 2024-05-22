import {
    SideBar,
    SideBarContent,
    SideBarFooter,
    SideBarHeader,
    SideBarItem,
    SidebarTrigger,
} from '@/entities/side-bar/ui';
import { poppins } from '@/shared/lib/fonts';
import { IonIcon } from '@/shared/ui/ion-icon';
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
                        <SidebarTrigger>
                            <IonIcon name="menu-outline" size="large" />
                        </SidebarTrigger>
                    </SideBarHeader>
                    <SideBarContent>
                        <SideBarItem
                            icon={
                                <IonIcon name="library-outline" size="large" />
                            }
                            href="/projetos"
                        >
                            Projetos
                        </SideBarItem>
                        <SideBarItem
                            icon={
                                <IonIcon name="people-outline" size="large" />
                            }
                            href="/pesquisadores"
                        >
                            Pesquisadores
                        </SideBarItem>
                        <SideBarItem href="/projetos/2">Projeto 2</SideBarItem>
                    </SideBarContent>
                    <SideBarFooter>
                        <h1 className="">Footer</h1>
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
