import { PesquisadorProjeto } from '@/shared/lib/types';
import { Avatar, AvatarImage } from '@/shared/ui/avatar';
import { IonIcon } from '@/shared/ui/ion-icon';
import Link from 'next/link';

type PesquisadoresTabProps = {
    pesquisadores: PesquisadorProjeto[];
};

export function PesquisadoresTab({ pesquisadores }: PesquisadoresTabProps) {
    return (
        <div className="flex flex-col gap-6 rounded-md rounded-tl-none border border-outline bg-primary-foreground px-4 py-3 shadow-sm ">
            {pesquisadores.length > 0 ? (
                pesquisadores.map((pesquisador) => (
                    <Link
                        key={pesquisador.id}
                        className="flex items-center gap-4"
                        href={`/pesquisadores/${pesquisador.id}`}
                    >
                        <Avatar className="h-[2.125rem] w-[2.125rem]">
                            <AvatarImage
                                src={pesquisador.fotoPerfil}
                                alt={`Foto do pesquisador ${pesquisador.nome}`}
                                width={100}
                                height={100}
                            />
                        </Avatar>
                        <div>
                            <span className="">
                                {pesquisador.nome} {pesquisador.sobrenome}
                            </span>
                            <div className="flex flex-col text-muted-foreground">
                                <p className="text-sm">{pesquisador.cargo}</p>
                                <div className="flex items-center gap-1 text-sm">
                                    <p>{pesquisador.horas}h no projeto</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <div className="my-6 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
                    <IonIcon name="people-outline" className="text-3xl" />
                    <span className="w-48">Não há pesquisadores.</span>
                </div>
            )}
        </div>
    );
}
