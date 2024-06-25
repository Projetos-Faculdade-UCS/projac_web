import { ProducaoAcademica } from '@/shared/lib/types';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { IonIcon } from '@/shared/ui/ion-icon';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/select';
import { Textarea } from '@/shared/ui/textarea';
import { ChangeEvent } from 'react';

type FormProducaoProps = {
    onChange: (value: ProducaoAcademica) => void;
    value: ProducaoAcademica;
    onRemove?: () => void;
};

export function FormProducao({
    onChange,
    value: producao,
    onRemove,
}: FormProducaoProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-6">
                <Input
                    className="md:col-span-4"
                    value={producao.titulo}
                    placeholder={getRandomTituloPlaceholder(producao.id)}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        onChange({
                            ...producao,
                            titulo: event.target.value,
                        })
                    }
                />
                <Select
                    onValueChange={(tipo) => onChange({ ...producao, tipo })}
                    defaultValue={producao.tipo}
                >
                    <SelectTrigger className="md:col-span-2">
                        <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ARTIGO">Artigo</SelectItem>
                        <SelectItem value="LIVRO">Livro</SelectItem>
                        <SelectItem value="CAPITULO">Capítulo</SelectItem>
                        <SelectItem value="PATENTE">Patente</SelectItem>
                        <SelectItem value="SOFTWARE">Software</SelectItem>
                        <SelectItem value="OUTRO">Outro</SelectItem>
                    </SelectContent>
                </Select>
                <Textarea
                    className="md:col-span-3 xl:col-span-6"
                    value={producao.descricao}
                    placeholder="Esta produção acadêmica fala sobre... "
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                        onChange({
                            ...producao,
                            descricao: event.target.value,
                        })
                    }
                />
            </div>
            <Button variant="link" onClick={onRemove}>
                <IonIcon name="trash-outline" />
            </Button>
        </div>
    );
}

function getRandomTituloPlaceholder(id: string) {
    const tipos = [
        'As crônicas de Nárnia',
        'O senhor dos anéis',
        'O código da Vinci',
        'O guia do mochileiro das galáxias',
        'A revolução dos bichos',
        'O pequeno príncipe',
        'O diário de Anne Frank',
    ];
    return tipos[id.charCodeAt(0) % tipos.length];
}
