import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';
import { IonIcon } from '@/shared/ui/ion-icon';
import Link from 'next/link';
import './paper-flip.scss';

type ProjetoCardProps = {
    projeto: ProjetoResumido;
};

export function ProjetoCard({ projeto }: ProjetoCardProps) {
    return (
        <Link href={`/projetos/${projeto.id}`}>
            <Card
                className="cursor-pointer overflow-hidden rounded-sm border-0 border-l-4 shadow-md transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg"
                style={{
                    borderColor: projeto.area.color,
                }}
            >
                <CardHeader className="relative">
                    <div className="flex items-center justify-start">
                        <CardTitle className="text-xl">
                            {projeto.titulo}
                        </CardTitle>
                    </div>
                    <CardDescription className="objetivoTruncado">
                        {projeto.objetivo}
                    </CardDescription>
                    {/* paper flip effect done very wrong */}
                    <div className="absolute right-0 top-0 flex h-14 w-14 items-start justify-end pr-2 pt-2">
                        <div
                            className="paper-flip border-l-[3.5rem] border-t-[3.5rem]"
                            data-status={projeto.status}
                        ></div>
                        <IonIcon
                            name="close-outline"
                            size="small"
                            className="text-white"
                        />
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
                            {projeto.coordenador.nome}{' '}
                            {projeto.coordenador.sobrenome}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted">
                        <IonIcon name="calendar-outline" size="small" />
                        <span className="text-sm">{projeto.dataCriacao}</span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
