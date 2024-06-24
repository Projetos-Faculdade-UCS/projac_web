import { Button } from '@/shared/ui/button';
import { IonIcon } from '@/shared/ui/ion-icon';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { ElementRef, forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { ProjetoSchema } from '../../lib/schema';
import { FormProducao } from '../custom-inputs/form-producao';

type FormsetProducaoProps = ControllerRenderProps<
    ProjetoSchema,
    'producoesAcademicas'
>;

const FormsetProducao = forwardRef<
    ElementRef<typeof Button>,
    Omit<FormsetProducaoProps, 'ref'>
>(({ onChange, value }, ref) => {
    function handleChange(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const newProducao = {
            id: uuidv4(),
            titulo: '',
            descricao: '',
            tipo: '',
        };
        if (value) {
            onChange([...value, newProducao]);
        } else {
            onChange([newProducao]);
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pl-1">
                <span className="font-medium">
                    Produções
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
                    {value?.map((producao, index) => {
                        return (
                            <FormProducao
                                key={producao.id}
                                value={producao}
                                onChange={(producao) => {
                                    onChange([
                                        ...value.slice(0, index),
                                        producao,
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

FormsetProducao.displayName = 'FormsetProducao';

export { FormsetProducao };
