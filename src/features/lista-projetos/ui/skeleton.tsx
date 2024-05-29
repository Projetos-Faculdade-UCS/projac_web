import { ProjetoCardSkeleton } from '@/entities/projeto-card/ui/skeleton';

export function ListaProjetosSkeleton() {
    return (
        <div className="flex flex-col gap-6">
            <ProjetoCardSkeleton />
            <ProjetoCardSkeleton />
        </div>
    );
}
