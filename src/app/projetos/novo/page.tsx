import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { FormProjeto } from '@/features/form-projeto/ui';
import { IonIcon } from '@/shared/ui/ion-icon';

export default function NovoProjeto() {
    return (
        <main className="flex w-full flex-col gap-6 overflow-y-scroll bg-background p-3 text-foreground md:px-20">
            <div className="flex h-auto items-center">
                <SidebarOuterTrigger className="pl-0 md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>
                <span className="flex items-center text-xl text-primary">
                    <span className="mr-2">🎉</span>
                    <span className="font-medium">Novo projeto</span>
                </span>
            </div>
            <FormProjeto />
        </main>
    );
}
