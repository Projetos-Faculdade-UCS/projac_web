import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { IonIcon } from '@/shared/ui/ion-icon';

export default function ListaProducoesAcademicas() {
    return (
        <main className="flex w-full flex-col bg-background px-2 py-2 text-foreground md:px-10">
            <div className="flex items-center">
                <SidebarOuterTrigger className="md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>
                <span>Produções Acadêmicas</span>
            </div>
        </main>
    );
}
