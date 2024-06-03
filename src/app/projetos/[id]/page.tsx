import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { SubAreaGrid } from '@/entities/sub-area-grid/ui';
import { getProjeto } from '@/shared/api/projeto';
import { IonIcon } from '@/shared/ui/ion-icon';
import { Suspense } from 'react';

export default function ProjetoDetalhe({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const data = getProjeto(params.id);
    return (
        <main className="flex w-full flex-col bg-background px-2 py-2 text-foreground md:px-10">
            <div className="flex items-center">
                <SidebarOuterTrigger className="md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>
                <h1 className="text-primary">Projeto {params.id}</h1>
                <Suspense fallback={<div>Carregando...</div>}>
                    <SubAreaGrid promiseProj={data} />
                </Suspense>
            </div>
        </main>
    );
}
