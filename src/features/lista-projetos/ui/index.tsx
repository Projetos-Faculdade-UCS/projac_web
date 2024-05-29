import { ProjetoCard } from '@/entities/projeto-card/ui';
import { getProjetos } from '../api';

export async function ListaProjetos() {
    const projetos = await getProjetos();
    return (
        <div className="flex flex-col gap-6">
            {projetos.map((projeto) => (
                <ProjetoCard key={projeto.id} projeto={projeto} />
            ))}
        </div>
    );
}
