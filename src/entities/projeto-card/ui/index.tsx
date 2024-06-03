import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';
import { IonIcon } from '@/shared/ui/ion-icon';
import Link from 'next/link';
import { getResponsavel } from '../lib';

type ProjetoCardProps = {
    projeto: Projeto;
};

export function ProjetoCard({ projeto }: ProjetoCardProps) {
    return (
        <Link href={`/projetos/${projeto.id}`}>
            <Card
                className="cursor-pointer rounded-sm border-0 border-l-4 shadow-md transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg"
                style={{
                    borderColor: projeto.area.color,
                }}
            >
                <CardHeader className="relative">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">
                            {projeto.titulo}
                        </CardTitle>
                        <span className="text-xs text-muted">
                            {projeto.dataCriacao}
                        </span>
                    </div>
                    <CardDescription className="h-10 overflow-hidden text-ellipsis">
                        {projeto.objetivo}
                    </CardDescription>
                    <div className="absolute right-0 top-0 h-10 w-10  overflow-hidden">
                        <div className="relative h-full w-full">
                            <div className="absolute right-0 top-0 h-10 w-10 bg-primary" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-2">
                        <div className="flex h-[1.125rem] w-[1.125rem] items-center justify-center">
                            <span
                                className="h-3 w-3 rounded-full opacity-85"
                                style={{
                                    backgroundColor: projeto.area.color,
                                }}
                            />
                        </div>
                        <span className="text-sm text-muted">
                            {projeto.area.nome}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted">
                        <IonIcon name="person-outline" size="small" />
                        <span className="text-sm">
                            {getResponsavel(projeto.pesquisadores)?.nome}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
