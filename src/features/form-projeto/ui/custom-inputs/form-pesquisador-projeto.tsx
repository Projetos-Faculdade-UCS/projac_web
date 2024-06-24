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
                <div className="flex flex-col gap-1 md:col-span-3">
                    <SelectPesquisador
                        onChange={(pesquisador_id) =>
                            onChange({ ...pesquisadorProjeto, pesquisador_id })
                        }
                        value={pesquisadorProjeto.pesquisador_id}
                    />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                    <Select
                        onValueChange={(cargo) =>
                            onChange({ ...pesquisadorProjeto, cargo })
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione um cargo" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="coordernador">
                                Coordernador
                            </SelectItem>
                            <SelectItem value="pesquisador">
                                Pesquisador
                            </SelectItem>
                            <SelectItem value="colaborador">
                                Colaborador
                            </SelectItem>
                            <SelectItem value="estagiario">
                                Estagiário
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-1 md:col-span-1">
                    <Input
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
            </div>
            <Button variant="link" onClick={onRemove}>
                <IonIcon name="trash-outline" />
            </Button>
        </div>
    );
}
