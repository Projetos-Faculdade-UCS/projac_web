import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { IonIcon } from '@/shared/ui/ion-icon';

export default function ListaPesquisadores() {
    return (
        <main className="w-full bg-background text-foreground">
            <div className="flex items-center">
                <SidebarOuterTrigger className="md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>
                <span>Pesquisadores</span>
            </div>
        </main>
    );
}
