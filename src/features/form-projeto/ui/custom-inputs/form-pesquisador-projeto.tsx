import { PesquisadorProjeto } from '@/shared/lib/types';
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
import { ChangeEvent } from 'react';
import { SelectPesquisador } from './select-pesquisador';

type FormPesquisadorProjetoProps = {
    onChange: (value: PesquisadorProjeto) => void;
    value: PesquisadorProjeto;
    onRemove?: () => void;
};

export function FormPesquisadorProjeto({
    value: pesquisadorProjeto,
    onChange,
    onRemove,
}: FormPesquisadorProjetoProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-6">
                <SelectPesquisador
                    className="md:col-span-3"
                    onChange={(pesquisadorId) =>
                        onChange({ ...pesquisadorProjeto, pesquisadorId })
                    }
                    value={pesquisadorProjeto.pesquisadorId}
                />
                <Select
                    onValueChange={(cargo) =>
                        onChange({ ...pesquisadorProjeto, cargo })
                    }
                    defaultValue={pesquisadorProjeto.cargo}
                >
                    <SelectTrigger className="md:col-span-2">
                        <SelectValue placeholder="Selecione um cargo" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="coordenador">
                            Coordernador
                        </SelectItem>
                        <SelectItem value="pesquisador">Pesquisador</SelectItem>
                        <SelectItem value="colaborador">Colaborador</SelectItem>
                        <SelectItem value="estagiario">Estagiário</SelectItem>
                    </SelectContent>
                </Select>
                <Input
                    className="md:col-span-1"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        onChange({
                            ...pesquisadorProjeto,
                            horas: event.target.valueAsNumber,
                        })
                    }
                    type="number"
                    value={pesquisadorProjeto.horas}
                />
            </div>
            <Button variant="link" onClick={onRemove}>
                <IonIcon name="trash-outline" />
            </Button>
        </div>
    );
}
