import { ProjetoCard } from '@/entities/projeto-card/ui';
import { ProjetosApiManager } from '@/shared/api/projetos-api-manager';

export async function ListaProjetos() {
    const projetos = await ProjetosApiManager.getInstance().getProjetos();
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projetos.map((projeto) => (
                <ProjetoCard key={projeto.id} projeto={projeto} />
            ))}
        </div>
    );
}
