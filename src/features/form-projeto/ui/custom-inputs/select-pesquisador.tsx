import { Pesquisador } from '@/shared/lib/types';
import { Avatar, AvatarImage } from '@/shared/ui/avatar';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/select';
import { useEffect, useState } from 'react';
import { getPesquisadores } from '../../api/server';

type SelectPesquisadorProps = {
    value: string;
    onChange: (value: string) => void;
};

export function SelectPesquisador({ value, onChange }: SelectPesquisadorProps) {
    const [pesquisadores, setPesquisadores] = useState<Pesquisador[]>([]);

    useEffect(() => {
        getPesquisadores().then((pesquisadores) =>
            setPesquisadores(pesquisadores),
        );
    }, []);

    return (
        <Select onValueChange={onChange} defaultValue={value}>
            <SelectTrigger>
                <SelectValue placeholder="Selecione um pesquisador" />
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
