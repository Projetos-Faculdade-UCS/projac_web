import { ValorArrecadado } from '@/shared/lib/types';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { IonIcon } from '@/shared/ui/ion-icon';
import { ChangeEvent } from 'react';
import { CurrencyInput } from './currency';
import { DatePickerInput } from './date-picker';

type FormValorArrecadadoProps = {
    onChange: (value: ValorArrecadado) => void;
    value: ValorArrecadado;
    onRemove?: () => void;
};

export function FormValorArrecadado({
    onChange,
    value,
    onRemove,
}: FormValorArrecadadoProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-6 xl:grid-cols-12">
                <Input
                    className="md:col-span-6 xl:col-span-6"
                    value={value.descricao}
                    placeholder="Descrição"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        onChange({
                            ...value,
                            descricao: event.target.value,
                        })
                    }
                />
                <DatePickerInput
                    className="md:col-span-3 xl:col-span-6"
                    onChange={(data) => onChange({ ...value, data })}
                    value={value.data}
                    name={`data-${value.id}`}
                    onBlur={() => {}}
                />
                <CurrencyInput
                    className="md:col-span-3 xl:col-span-3"
                    value={value.valor}
                    placeholder="R$ 0,00"
                    name={`valor-${value.id}`}
                    onBlur={() => {}}
                    onChange={(valorSolicitado) =>
                        onChange({
                            ...value,
                            valor: valorSolicitado,
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
