import { Button } from '@/shared/ui/button';
import { IonIcon } from '@/shared/ui/ion-icon';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { ElementRef, forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { ProjetoSchema } from '../../lib/schema';
import { FormValorArrecadado } from '../custom-inputs/form-valor-arrecadado';

type FormsetValorArrecadadoProps = ControllerRenderProps<
    ProjetoSchema,
    'valoresArrecadados'
>;

const FormsetValorArrecadado = forwardRef<
    ElementRef<typeof Button>,
    Omit<FormsetValorArrecadadoProps, 'ref'>
>(({ onChange, value }, ref) => {
    function handleChange(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const newValorArrecadado = {
            id: uuidv4(),
            valor: 0,
            descricao: '',
            data: '',
        };
        if (value) {
            onChange([...value, newValorArrecadado]);
        } else {
            onChange([newValorArrecadado]);
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pl-1">
                <span className="font-medium">
                    Valores Arrecadados
                    <span className="ml-1 text-xs">({value?.length || 0})</span>
                </span>
                <Button
                    variant={'link'}
                    onClick={handleChange}
                    type="button"
                    className="h-auto py-0"
                    ref={ref}
                >
                    <IonIcon name="add-outline" className="flex text-lg" />
                </Button>
            </div>

            <ScrollArea className="h-80">
                <div className="flex flex-col gap-4 pl-1 pt-1">
                    {value?.map((valorArrecadado, index) => {
                        return (
                            <FormValorArrecadado
                                key={valorArrecadado.id}
                                value={valorArrecadado}
                                onChange={(valorArrecadado) => {
                                    onChange([
                                        ...value.slice(0, index),
                                        valorArrecadado,
                                        ...value.slice(index + 1),
                                    ]);
                                }}
                                onRemove={() => {
                                    onChange([
                                        ...value.slice(0, index),
                                        ...value.slice(index + 1),
                                    ]);
                                }}
                            />
                        );
                    })}
                </div>
            </ScrollArea>
        </div>
    );
});

FormsetValorArrecadado.displayName = 'FormsetValorArrecadado';

export { FormsetValorArrecadado };
