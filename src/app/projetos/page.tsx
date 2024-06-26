import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { ListaProjetos } from '@/features/lista-projetos/ui';
import { ListaProjetosSkeleton } from '@/features/lista-projetos/ui/skeleton';
import { Button } from '@/shared/ui/button';
import { IonIcon } from '@/shared/ui/ion-icon';
import Link from 'next/link';
import { Suspense } from 'react';

export default function ListaProjetosPage() {
    return (
        <main className="flex w-full flex-col gap-6 overflow-y-scroll bg-background p-3 text-foreground md:px-10">
            <div className="flex items-center">
                <SidebarOuterTrigger className="pl-0 md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>
                <div className="flex items-center">
                    <span className="text-xl font-medium">Projetos</span>
                    <Button
                        className="ml-2 rounded-full bg-purple-200/50 px-2 text-sm"
                        variant={'link'}
                        asChild
                    >
                        <Link href="/projetos/novo">
                            <IonIcon
                                name="add-outline"
                                className="text-xl"
                                style={{
                                    color: 'var(--primary)',
                                }}
                            />
                        </Link>
                    </Button>
                </div>
            </div>
            <Suspense fallback={<ListaProjetosSkeleton />}>
                <ListaProjetos />
            </Suspense>
        </main>
    );
}

export const fetchCache = 'force-no-store';
