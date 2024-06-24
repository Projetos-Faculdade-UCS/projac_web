import { Button } from '@/shared/ui/button';
import { IonIcon } from '@/shared/ui/ion-icon';
import { ElementRef, forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { ProjetoSchema } from '../../lib/schema';
import { SelectPesquisador } from './select-pesquisador';

type FormsetPesquisadoresProps = ControllerRenderProps<
    ProjetoSchema,
    'pesquisadores'
>;

const FormsetPesquisadorProjeto = forwardRef<
    ElementRef<typeof Button>,
    Omit<FormsetPesquisadoresProps, 'ref'>
>(({ onChange, value }, ref) => {
    function handleChange(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        console.log(value);
        if (value) {
            onChange([...value, { pesquisador: '', cargo: '', horas: 0 }]);
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <span>Pesquisadores (2)</span>
                <Button variant={'link'} onClick={handleChange} type="button">
                    <IonIcon name="add-outline" />
                </Button>
            </div>
            <div className="flex flex-col gap-4">
                {value?.map((pesquisador, index) => (
                    <div
                        className="grid grid-cols-1 gap-2 md:grid-cols-2"
                        key={index}
                    >
                        <SelectPesquisador
                            value={pesquisador.pesquisador}
                            onChange={(pesquisador) => {
                                onChange([
                                    ...value.slice(0, index),
                                    { ...value[index], pesquisador },
                                    ...value.slice(index + 1),
                                ]);
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
});

FormsetPesquisadorProjeto.displayName = 'FormsetPesquisadorProjeto';

export { FormsetPesquisadorProjeto };
