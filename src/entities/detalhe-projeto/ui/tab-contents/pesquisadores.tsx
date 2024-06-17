import { Pesquisador } from '@/shared/lib/types';
import { Avatar, AvatarImage } from '@/shared/ui/avatar';
import { IonIcon } from '@/shared/ui/ion-icon';
import Link from 'next/link';

type PesquisadoresTabProps = {
    pesquisadores: Pesquisador[];
};

export function PesquisadoresTab({ pesquisadores }: PesquisadoresTabProps) {
    return (
        <div className="flex flex-col gap-4 rounded-md rounded-tl-none border bg-primary-foreground px-4 py-2 shadow-sm ">
            {pesquisadores.map((pesquisador) => (
                <Link
                    key={pesquisador.id}
                    className="flex items-start gap-4"
                    href={`/pesquisadores/${pesquisador.id}`}
                >
                    <Avatar className="mt-2 h-[2.125rem] w-[2.125rem]">
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
                            <p className="text-sm ">{pesquisador.cargo}</p>
                            <div className="flex items-center gap-1 text-sm">
                                <IonIcon name="time-outline" />
                                <p>{pesquisador.horas}h no projeto</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
