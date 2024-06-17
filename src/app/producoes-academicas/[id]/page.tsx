import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { IonIcon } from '@/shared/ui/ion-icon';

export default function ProducaoAcademicaDetalhe({
    params,
}: {
    params: {
        id: string;
    };
}) {
    // const data = ProducaoAcademicaApiManager.getInstance().getProducaoAcademica(params.id);
    return (
        <main className="flex w-full flex-col overflow-y-scroll bg-background p-3 text-foreground md:px-10">
            <div className="flex items-center">
                <SidebarOuterTrigger className="pl-0 md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>

                <h1 className="text-2xl font-semibold">
                    Produção Acadêmica {params.id}
                </h1>
            </div>
        </main>
    );
}
