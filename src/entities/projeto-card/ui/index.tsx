import { Button } from '@/shared/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';
import { IonIcon } from '@/shared/ui/ion-icon';
import Link from 'next/link';
import { formatDateToTimeAgo, getIconName } from '../lib';
import './paper-flip.scss';

type ProjetoCardProps = {
    projeto: ProjetoResumido;
};

export function ProjetoCard({ projeto }: ProjetoCardProps) {
    return (
        <Link href={`/projetos/${projeto.id}`}>
            <Card
                className="overflow-hidden rounded-sm border-0 border-l-4 shadow-md transition-transform duration-200 hover:shadow-lg"
                style={{
                    borderColor: projeto.area.color,
                }}
            >
                <CardHeader className="relative">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">
                            {projeto.titulo}
                        </CardTitle>
                        <Button variant={'link'}>
                            <IonIcon name="ellipsis-vertical" size="small" />
                        </Button>
                    </div>
                    <CardDescription className="objetivoTruncado">
                        {projeto.objetivo}
                    </CardDescription>
                    {/* paper flip effect done very wrong */}
                    <div className="absolute right-0 top-0 flex items-start justify-end pr-2 pt-2">
                        <div
                            className="paper-flip border-l-[3.5rem] border-t-[3.5rem]"
                            data-status={projeto.status}
                        ></div>
                        <IonIcon
                            name={getIconName(projeto.status)}
                            size="small"
                            className="text-white"
                        />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-3 text-muted">
                        <div className="flex items-center gap-2 truncate">
                            <IonIcon
                                name="person-outline"
                                size="small"
                                className="shrink-0"
                            />
                            <span className="truncate text-sm">
                                {projeto.coordenador.nome}{' '}
                                {projeto.coordenador.sobrenome}
                            </span>
                        </div>
                        <div className="h-1 w-1 shrink-0 rounded-full bg-muted"></div>
                        <span className="text-nowrap text-sm">
                            {formatDateToTimeAgo(projeto.dataCriacao)}
                        </span>
                    </div>
                </CardContent>
                <CardFooter className="relative">
                    <div
                        className="absolute bottom-2 left-0 flex items-center gap-2 rounded-r-md px-2 py-[.125rem] shadow-md"
                        style={{
                            backgroundColor: projeto.area.color,
                        }}
                    >
                        <span className="text-xs text-white">
                            {projeto.area.nome}
                        </span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
