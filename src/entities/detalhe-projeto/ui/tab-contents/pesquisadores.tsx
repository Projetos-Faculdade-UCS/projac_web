import { Pesquisador } from '@/shared/lib/types';
import { Avatar, AvatarImage } from '@/shared/ui/avatar';

type PesquisadoresTabProps = {
    pesquisadores: Pesquisador[];
};

export function PesquisadoresTab({ pesquisadores }: PesquisadoresTabProps) {
    return (
        <div className="flex flex-col gap-4">
            {pesquisadores.map((pesquisador) => (
                <div key={pesquisador.id} className="flex items-center gap-4">
                    <Avatar className="h-[2.125rem] w-[2.125rem]">
                        <AvatarImage
                            src={pesquisador.fotoPerfil}
                            alt={`Foto do pesquisador ${pesquisador.nome}`}
                            width={100}
                            height={100}
                        />
                    </Avatar>
                    <div>
                        <span className="font-semibold">
                            {pesquisador.nome}
                        </span>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <p className="text-sm ">{pesquisador.cargo}</p>
                            <div className="rounded-full bg-muted-foreground p-[.125rem]" />
                            <p className="text-sm ">
                                {pesquisador.horas}h no projeto
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
