import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/shared/ui/form';
import { Control } from 'react-hook-form';
import { ProjetoSchema } from '../../lib/schema';
import { FormsetPesquisadorProjeto } from '../custom-inputs/formset-pesquisador-projeto';

type ParticipantesProps = {
    control: Control<ProjetoSchema>;
};

export function Participantes({ control }: ParticipantesProps) {
    return (
        <div className="grid h-full grid-flow-row-dense grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-4 xl:grid-cols-12">
            <FormField
                control={control}
                name="pesquisadores"
                render={({ field }) => (
                    <FormItem className="flex flex-col justify-start md:col-span-4 xl:col-span-12">
                        <FormControl>
                            <FormsetPesquisadorProjeto {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
