import { Pesquisador } from '@/shared/lib/types';
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
                        {pesquisador.nome}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
