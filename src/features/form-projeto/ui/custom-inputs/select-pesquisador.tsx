import { Pesquisador } from '@/shared/lib/types';
import { cn } from '@/shared/lib/utils';
import { Avatar, AvatarImage } from '@/shared/ui/avatar';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/select';
import { useEffect, useState } from 'react';
import { Control, useWatch } from 'react-hook-form';
import { getPesquisadores } from '../../api/server';
import { ProjetoSchema } from '../../lib/schema';

type SelectPesquisadorProps = {
    value: string;
    control: Control<ProjetoSchema>;
    onChange: (value: string) => void;
    className?: string;
};

export function SelectPesquisador({
    value,
    control,
    onChange,
    className,
}: SelectPesquisadorProps) {
    const [pesquisadores, setPesquisadores] = useState<Pesquisador[]>([]);
    const pesquisadoresProjetos = useWatch({
        name: 'pesquisadorProjeto',
        control,
    });
    useEffect(() => {
        const IdsSelecionados = pesquisadoresProjetos
            ?.map((pesquisadorProjeto) => pesquisadorProjeto.pesquisadorId)
            .filter((p) => p !== value);

        getPesquisadores().then((pesquisadores) => {
            pesquisadores = pesquisadores.filter(
                (pesquisador) =>
                    !IdsSelecionados?.includes(String(pesquisador.id)),
            );
            setPesquisadores(pesquisadores);
        });
    }, [pesquisadoresProjetos]);

    return (
        <Select onValueChange={onChange} defaultValue={value}>
            <SelectTrigger className={cn('', className)}>
                {value ? (
                    <SelectValue />
                ) : (
                    <span className="text-gray-500">
                        Selecione um pesquisador
                    </span>
                )}
            </SelectTrigger>
            <SelectContent>
                {pesquisadores.map((pesquisador) => (
                    <SelectItem
                        key={pesquisador.id}
                        value={String(pesquisador.id)}
                    >
                        <div className="flex items-center gap-2">
                            <Avatar className="h-[1.125rem] w-[1.125rem]">
                                <AvatarImage
                                    src={pesquisador.fotoPerfil}
                                    alt={`Foto do pesquisador ${pesquisador.nome}`}
                                    width={100}
                                    height={100}
                                />
                            </Avatar>
                            {pesquisador.nome}
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
