import { InfosGerais } from '@/entities/detalhe-projeto/ui/infos-gerais';
import { Titulo } from '@/entities/detalhe-projeto/ui/titulo';
import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { ProjetosApiManager } from '@/shared/api/projetos-api-manager';
import { IonIcon } from '@/shared/ui/ion-icon';
import { Skeleton } from '@/shared/ui/skeleton';
import { Suspense } from 'react';

export default function ProjetoDetalhe({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const data = ProjetosApiManager.getInstance().getProjeto(params.id);
    return (
        <main className="flex w-full flex-col bg-background px-2 py-2 text-foreground md:px-10">
            <div className="mb-4 flex items-center">
                <SidebarOuterTrigger className="pl-0 md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>
                <Suspense fallback={<Skeleton className="mb-2 h-4 w-56" />}>
                    <Titulo promiseProj={data} />
                </Suspense>
            </div>
            <Suspense fallback={<div>Carregando...</div>}>
                <InfosGerais promiseProj={data} />
            </Suspense>
        </main>
    );
}
