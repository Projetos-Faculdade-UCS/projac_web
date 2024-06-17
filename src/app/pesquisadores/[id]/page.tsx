import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { IonIcon } from '@/shared/ui/ion-icon';

export default function PesquisadorDetalhe({
    params,
}: {
    params: {
        id: string;
    };
}) {
    // const data = PesquisadorApiManager.getInstance().getPesquisador(params.id);
    return (
        <main className="flex w-full flex-col overflow-y-scroll bg-background p-3 text-foreground md:px-10">
            <div className="flex items-center">
                <SidebarOuterTrigger className="pl-0 md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>

                <h1 className="text-2xl font-semibold">
                    Pesquisador {params.id}
                </h1>
            </div>
        </main>
    );
}
