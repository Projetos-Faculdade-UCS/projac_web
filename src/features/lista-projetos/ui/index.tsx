import { ProjetoCard } from '@/entities/projeto-card/ui';
import { getProjetos } from '../api/server';
import { ProjetosSearchParams } from '../lib/types';

export async function ListaProjetos({
    searchParams,
}: {
    searchParams?: ProjetosSearchParams;
}) {
    const projetos = await getProjetos(searchParams);
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projetos.map((projeto) => (
                <ProjetoCard key={projeto.id} projeto={projeto} />
            ))}
        </div>
    );
}
