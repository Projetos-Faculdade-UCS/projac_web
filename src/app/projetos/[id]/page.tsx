import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { IonIcon } from '@/shared/ui/ion-icon';

export default function ProjetoDetalhe({
    params,
}: {
    params: {
        id: string;
    };
}) {
    return (
        <main className="w-full bg-background text-foreground">
            <div className="flex items-center">
                <SidebarOuterTrigger className="md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>
                <h1 className="text-primary">Projeto {params.id}</h1>
            </div>
        </main>
    );
}
