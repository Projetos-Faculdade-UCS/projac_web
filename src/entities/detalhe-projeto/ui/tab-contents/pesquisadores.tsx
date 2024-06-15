import { Pesquisador } from '@/shared/lib/types';
import { Avatar, AvatarImage } from '@/shared/ui/avatar';
import { IonIcon } from '@/shared/ui/ion-icon';

type PesquisadoresTabProps = {
    pesquisadores: Pesquisador[];
};

export function PesquisadoresTab({ pesquisadores }: PesquisadoresTabProps) {
    return (
        <div className="flex flex-col gap-4">
            {pesquisadores.map((pesquisador) => (
                <div key={pesquisador.id} className="flex items-start gap-4">
                    <Avatar className="mt-2 h-[2.125rem] w-[2.125rem]">
                        <AvatarImage
                            src={pesquisador.fotoPerfil}
                            alt={`Foto do pesquisador ${pesquisador.nome}`}
                            width={100}
                            height={100}
                        />
                    </Avatar>
                    <div>
                        <span className="font-semibold">
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
                </div>
            ))}
        </div>
    );
}
