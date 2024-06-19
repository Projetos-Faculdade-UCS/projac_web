import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Control } from 'react-hook-form';
import { ProjetoSchema } from '../../lib/schema';
import { CurrencyInput } from '../custom-inputs/currency';
import { DatePickerInput } from '../custom-inputs/date-picker';

type InfoGeraisProps = {
    control: Control<ProjetoSchema>;
};

export function InfosGerais({ control }: InfoGeraisProps) {
    return (
        <div className="col-span-4 grid gap-4">
            <FormField
                control={control}
                name="titulo"
                render={({ field }) => (
                    <FormItem className="col-span-4">
                        <FormLabel>Título</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Título" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="descricao"
                render={({ field }) => (
                    <FormItem className="col-span-4">
                        <FormLabel>Descrição</FormLabel>
                        <FormControl>
                            <Textarea {...field} placeholder="Descrição" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="valorSolicitado"
                render={({ field }) => (
                    <FormItem className="col-span-4 flex flex-col justify-center md:col-span-1">
                        <FormLabel>Valor solicitado</FormLabel>
                        <FormControl>
                            <CurrencyInput {...field} placeholder="R$ 0,00" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="dataConclusao"
                render={({ field }) => (
                    <FormItem className="col-span-4 flex flex-col justify-center md:col-span-1">
                        <FormLabel>Data de conclusão</FormLabel>
                        <FormControl>
                            <DatePickerInput {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="dataConclusao"
                render={({ field }) => (
                    <FormItem className="col-span-4 flex flex-col justify-center md:col-span-1">
                        <FormLabel>Data de conclusão</FormLabel>
                        <FormControl>
                            <DatePickerInput {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
