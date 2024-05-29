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
                        className="text-xl font-semibold text-white"
                    >
                        Projac
                    </Link>
                </SidebarTrigger>
            </SideBarHeader>
            <SideBarContent>
                <SideBarItem
                    icon={<IonIcon name="home-outline" size="large" />}
                    component={<Link href="/" />}
                    active={path === '/'}
                >
                    Início
                </SideBarItem>
                <SideBarItem
                    icon={<IonIcon name="library-outline" size="large" />}
                    component={<Link href="/projetos" />}
                    active={path === '/projetos'}
                >
                    Projetos
                </SideBarItem>
                <SideBarItem
                    icon={<IonIcon name="people-outline" size="large" />}
                    component={<Link href="/pesquisadores" />}
                    active={path === '/pesquisadores'}
                >
                    Pesquisadores
                </SideBarItem>
                <SideBarItem
                    component={<Link href="/projetos/2" />}
                    active={path === '/projetos/1'}
                >
                    Projeto 2
                </SideBarItem>
            </SideBarContent>
            <SideBarFooter>
                <h1 className="">Footer</h1>
            </SideBarFooter>
        </SideBar>
    );
}
