import { ProjetoCardSkeleton } from '@/entities/projeto-card/ui/skeleton';

export function ListaProjetosSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            <ProjetoCardSkeleton />
            <ProjetoCardSkeleton />
        </div>
    );
}
