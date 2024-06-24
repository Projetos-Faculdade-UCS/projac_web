import { Button } from '@/shared/ui/button';
import { IonIcon } from '@/shared/ui/ion-icon';
import { Label } from '@/shared/ui/label';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { ElementRef, forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { ProjetoSchema } from '../../lib/schema';
import { FormPesquisadorProjeto } from './form-pesquisador-projeto';

type FormsetPesquisadoresProps = ControllerRenderProps<
    ProjetoSchema,
    'pesquisadorProjeto'
>;

const FormsetPesquisadorProjeto = forwardRef<
    ElementRef<typeof Button>,
    Omit<FormsetPesquisadoresProps, 'ref'>
>(({ onChange, value }, ref) => {
    function handleChange(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const newPesquisadorProjeto = {
            id: uuidv4(),
            pesquisador_id: '',
            cargo: '',
            horas: 0,
        };
        if (value) {
            onChange([...value, newPesquisadorProjeto]);
        } else {
            onChange([newPesquisadorProjeto]);
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pl-1">
                <span className="font-medium">
                    Pesquisadores
                    <span className="ml-1 text-xs">({value?.length || 0})</span>
                </span>
                <Button
                    variant={'link'}
                    onClick={handleChange}
                    type="button"
                    ref={ref}
                >
                    <IonIcon name="add-outline" className="text-lg" />
                </Button>
            </div>
            <div className="flex flex-col gap-4">
                {value && value.length > 0 && (
                    <div className="flex w-full items-center gap-2 pl-1">
                        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-6">
                            <Label className="font-normal md:col-span-3">
                                Nome
                            </Label>
                            <Label className="font-normal md:col-span-2">
                                Cargo
                            </Label>
                            <Label className="font-normal md:col-span-1">
                                horas
                            </Label>
                        </div>
                        <div className="w-[3.25rem]"></div>
                    </div>
                )}
                <ScrollArea className="h-80">
                    <div className="flex flex-col gap-4 pl-1 pt-1">
                        {value?.map((pesquisadorProjeto, index) => {
                            return (
                                <FormPesquisadorProjeto
                                    key={pesquisadorProjeto.id}
                                    value={pesquisadorProjeto}
                                    onChange={(pesquisadorProjeto) => {
                                        onChange([
                                            ...value.slice(0, index),
                                            pesquisadorProjeto,
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
        </div>
    );
});

FormsetPesquisadorProjeto.displayName = 'FormsetPesquisadorProjeto';

export { FormsetPesquisadorProjeto };
