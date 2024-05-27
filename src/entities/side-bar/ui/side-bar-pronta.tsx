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

export function SideBarPronta() {
    return (
        <SideBar className="bg-primary-foreground" transitionDuration={600}>
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
                >
                    Início
                </SideBarItem>
                <SideBarItem
                    icon={<IonIcon name="library-outline" size="large" />}
                    component={<Link href="/projetos" />}
                >
                    Projetos
                </SideBarItem>
                <SideBarItem
                    icon={<IonIcon name="people-outline" size="large" />}
                    component={<Link href="/pesquisadores" />}
                >
                    Pesquisadores
                </SideBarItem>
                <SideBarItem component={<Link href="/projetos/2" />}>
                    Projeto 2
                </SideBarItem>
            </SideBarContent>
            <SideBarFooter>
                <h1 className="">Footer</h1>
            </SideBarFooter>
        </SideBar>
    );
}
