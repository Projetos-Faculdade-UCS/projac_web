'use client';
import {
    SideBar,
    SideBarContent,
    SideBarFooter,
    SideBarHeader,
    SideBarItem,
    SidebarTrigger,
} from '@/entities/side-bar/ui';
import { IonIcon } from '@/shared/ui/ion-icon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SideBarPronta() {
    const path = usePathname();

    return (
        <SideBar transitionDuration={600}>
            <SideBarHeader>
                <SidebarTrigger
                    icon={<IonIcon name="menu-outline" size="large" />}
                >
                    <Link
                        href={'/'}
                        className="flex items-center gap-2 text-xl font-semibold text-white"
                    >
                        <Image
                            src="/projac-branco.png"
                            alt="Logo"
                            width={35}
                            height={35}
                        />
                        Projac
                    </Link>
                </SidebarTrigger>
            </SideBarHeader>
            <SideBarContent>
                <SideBarItem
                    icon={
                        <IonIcon
                            name="home-outline"
                            size="large"
                            className="p-[0.3125rem]"
                        />
                    }
                    component={<Link href="/" />}
                    active={path === '/'}
                >
                    Início
                </SideBarItem>
                <SideBarItem
                    icon={
                        <IonIcon
                            name="reader-outline"
                            size="large"
                            className="p-[0.3125rem]"
                        />
                    }
                    component={<Link href="/projetos" />}
                    active={path === '/projetos'}
                >
                    Projetos
                </SideBarItem>
                <SideBarItem
                    className="text-xs"
                    icon={
                        <IonIcon
                            name="library-outline"
                            size="large"
                            className="p-[0.3125rem]"
                        />
                    }
                    component={<Link href="/producoes-academicas" />}
                    active={path === '/producoes-academicas'}
                >
                    Produções Acadêmicas
                </SideBarItem>
                <SideBarItem
                    icon={
                        <IonIcon
                            name="people-outline"
                            size="large"
                            className="p-[0.3125rem]"
                        />
                    }
                    component={<Link href="/pesquisadores" />}
                    active={path === '/pesquisadores'}
                >
                    Pesquisadores
                </SideBarItem>
            </SideBarContent>
            <SideBarFooter>
                <h1 className="">Footer</h1>
            </SideBarFooter>
        </SideBar>
    );
}
