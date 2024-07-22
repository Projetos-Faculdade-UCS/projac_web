'use client';
import { Button } from '@/shared/ui/button';
import { IonIcon } from '@/shared/ui/ion-icon';
import { Label } from '@/shared/ui/label';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { Control, useFieldArray } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { ProjetoSchema } from '../../lib/schema';
import { FormPesquisadorProjeto } from '../custom-inputs/form-pesquisador-projeto';

type FormsetPesquisadoresProps = {
    control: Control<ProjetoSchema>;
};

const FormsetPesquisadorProjeto = ({ control }: FormsetPesquisadoresProps) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'pesquisadorProjeto',
        keyName: 'id',
    });

    function addPesquisadorProjeto(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        append({
            id: uuidv4(),
            pesquisadorId: '',
            cargo: '',
            horas: 0,
        });
    }

    return (
        <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2 font-medium">
                <IonIcon name="people-outline" className="text-xl" />
                Pesquisadores
                <span className="text-xs">({fields?.length || 0})</span>
            </span>
            <div className="flex flex-col gap-2">
                {fields && fields.length > 0 && (
                    <div className="flex w-full items-center gap-2 pl-1">
                        <div className="grid w-full grid-cols-1 gap-2 pl-1 md:grid-cols-3 xl:grid-cols-6">
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
                <ScrollArea className="max-h-80 ">
                    <div className="flex flex-col gap-4 py-1 pl-1">
                        {fields?.map((pesquisadorProjeto, index) => {
                            return (
                                <FormPesquisadorProjeto
                                    key={pesquisadorProjeto.id}
                                    index={index}
                                    control={control}
                                    onRemove={remove}
                                />
                            );
                        })}
                    </div>
                </ScrollArea>
                <Button
                    variant={'ghost'}
                    onClick={addPesquisadorProjeto}
                    type="button"
                    className="mt-1 h-auto w-full bg-accent py-1 text-accent-foreground"
                >
                    <IonIcon name="add-outline" className="flex text-lg" />
                </Button>
            </div>
        </div>
    );
};

FormsetPesquisadorProjeto.displayName = 'FormsetPesquisadorProjeto';

export { FormsetPesquisadorProjeto };
