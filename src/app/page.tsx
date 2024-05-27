import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { IonIcon } from '@/shared/ui/ion-icon';

export default function Home() {
    return (
        <main className="flex w-full flex-col bg-background px-2 py-2 text-foreground md:px-10">
            <div className="flex items-center">
                <SidebarOuterTrigger className="md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>
                <h1 className="text-primary">Início</h1>
            </div>
        </main>
    );
}
