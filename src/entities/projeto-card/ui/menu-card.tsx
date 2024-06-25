'use client';
import { Button } from '@/shared/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { IonIcon } from '@/shared/ui/ion-icon';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deletarProjeto } from '../api/server';

export function MenuCard({ projetoId }: { projetoId: number }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant={'link'} className="p-0 focus-visible:ring-0">
                    <IonIcon
                        name="ellipsis-horizontal"
                        size="small"
                        className="text-muted-foreground"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="w-full gap-2" asChild>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <IonIcon name="star-outline" className="text-lg" />
                        Adicionar aos favoritos
                    </button>
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full gap-2" asChild>
                    <button type="button" onClick={(e) => e.preventDefault()}>
                        <IonIcon
                            name="share-social-outline"
                            className="text-lg"
                        />
                        Compartilhar
                    </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="w-full gap-2 text-destructive"
                    asChild
                >
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            deletarProjeto(String(projetoId));
                            router.refresh();
                            setOpen(false);
                        }}
                    >
                        <IonIcon name="trash-outline" className="text-lg" />
                        Excluir
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
