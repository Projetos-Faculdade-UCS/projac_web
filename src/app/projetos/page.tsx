import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { ListaProjetos } from '@/features/lista-projetos/ui';
import { ListaProjetosSkeleton } from '@/features/lista-projetos/ui/skeleton';
import { IonIcon } from '@/shared/ui/ion-icon';
import { Suspense } from 'react';

export default function ListaProjetosPage() {
    return (
        <main className="flex w-full flex-col gap-6 bg-background px-2 py-2 text-foreground md:px-10">
            <div className="flex items-center">
                <SidebarOuterTrigger className="md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>
                <span>Projetos</span>
            </div>
            <Suspense fallback={<ListaProjetosSkeleton />}>
                <ListaProjetos />
            </Suspense>
        </main>
    );
}
