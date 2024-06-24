import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/shared/ui/form';
import { Control } from 'react-hook-form';
import { ProjetoSchema } from '../../lib/schema';
import { FormsetProducao } from '../formsets/formset-producao';
import { FormsetValorArrecadado } from '../formsets/formset-valor-arrecadado';

type ResultadosProps = {
    control: Control<ProjetoSchema>;
};

export function Resultados({ control }: ResultadosProps) {
    return (
        <div className="grid gap-4 md:grid-cols-4 xl:grid-cols-12">
            <FormField
                control={control}
                name="producoesAcademicas"
                render={({ field }) => (
                    <FormItem className="md:col-span-4 xl:col-span-6">
                        <FormControl>
                            <FormsetProducao {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="valoresArrecadados"
                render={({ field }) => (
                    <FormItem className="md:col-span-4 xl:col-span-6">
                        <FormControl>
                            <FormsetValorArrecadado {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
