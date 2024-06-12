import { ProjetoResumido } from '@/shared/lib/types';
import { Avatar, AvatarImage } from '@/shared/ui/avatar';
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
import { formatDateToTimeAgo, getIconName, getStatusHexColor } from '../lib';
import { CardMenu } from './card-menu';
import './paper-flip.scss';

type ProjetoCardProps = {
    projeto: ProjetoResumido;
};

export function ProjetoCard({ projeto }: ProjetoCardProps) {
    return (
        <Link href={`/projetos/${projeto.id}`}>
            <Card
                className="overflow-hidden rounded-md border-0 border-l-4 bg-primary-foreground shadow-md transition-transform duration-200 hover:shadow-lg"
                style={{
                    borderColor: projeto.area.cor,
                }}
            >
                <CardHeader className="relative">
                    <CardTitle className="text-xl">{projeto.titulo}</CardTitle>
                    <div className="absolute right-0 top-0 flex items-start justify-end pr-2 pt-2">
                        <div
                            className="paper-flip border-l-[3.5rem] border-t-[3.5rem] opacity-20"
                            style={{
                                borderTopColor: getStatusHexColor(
                                    projeto.status,
                                ),
                            }}
                        />
                        <IonIcon
                            name={getIconName(projeto.status)}
                            size="small"
                            style={{
                                color: getStatusHexColor(projeto.status),
                            }}
                        />
                    </div>
                    <CardDescription className="objetivoTruncado">
                        {projeto.objetivo}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-3 text-muted">
                        <div className="flex items-center gap-2 truncate">
                            <Avatar>
                                <AvatarImage
                                    src={projeto.coordenador.fotoPerfil}
                                    alt={`Foto do coordenador ${projeto.coordenador.nome}`}
                                    width={100}
                                    height={100}
                                />
                            </Avatar>
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
                        className="absolute bottom-2 left-0 flex items-center gap-2 rounded-r-sm px-2 py-[.125rem] shadow-md"
                        style={{
                            backgroundColor: projeto.area.cor,
                        }}
                    >
                        <span className="text-xs text-white">
                            {projeto.area.nome}
                        </span>
                    </div>
                    <CardMenu />
                </CardFooter>
            </Card>
        </Link>
    );
}
