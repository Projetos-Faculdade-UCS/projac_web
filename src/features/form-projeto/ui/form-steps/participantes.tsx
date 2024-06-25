import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui/form';
import { Control } from 'react-hook-form';
import { ProjetoSchema } from '../../lib/schema';
import { MultiSelectFomentador } from '../custom-inputs/multi-select-fomentador';
import { FormsetPesquisadorProjeto } from '../formsets/formset-pesquisador-projeto';

type ParticipantesProps = {
    control: Control<ProjetoSchema>;
};

export function Participantes({ control }: ParticipantesProps) {
    return (
        <div className="grid h-full grid-flow-row-dense grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-4 xl:grid-cols-12">
            <FormField
                control={control}
                name="pesquisadorProjeto"
                render={({ field }) => (
                    <FormItem className="flex flex-col justify-start md:col-span-4 xl:col-span-7">
                        <FormControl>
                            <FormsetPesquisadorProjeto {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name={'agenciasFomentoIds'}
                render={({ field }) => (
                    <FormItem className="md:col-span-4 xl:col-span-5">
                        <FormLabel>
                            Agências de fomento
                            <span className="ml-1 text-xs">
                                ({field.value?.length || 0})
                            </span>
                        </FormLabel>
                        <FormControl>
                            <MultiSelectFomentador {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
