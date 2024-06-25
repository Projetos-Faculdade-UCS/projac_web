import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormRequiredIndicator,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Control } from 'react-hook-form';
import { ProjetoSchema, projetoSchema } from '../../lib/schema';
import { CurrencyInput } from '../custom-inputs/currency';
import { DatePickerInput } from '../custom-inputs/date-picker';
import { MultiSelectSubaria } from '../custom-inputs/multi-select-subarea';
import { SelectArea } from '../custom-inputs/select-area';

type InfoGeraisProps = {
    control: Control<ProjetoSchema>;
};

export function InfosGerais({ control }: InfoGeraisProps) {
    return (
        <div className="grid grid-flow-row-dense grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-4 xl:grid-cols-12">
            <FormField
                control={control}
                name="titulo"
                render={({ field }) => (
                    <FormItem className="flex flex-col justify-start md:col-span-3 xl:col-span-9">
                        <FormLabel>
                            Título
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="Meu projeto"
                                className="text-base sm:text-sm"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name="objetivo"
                render={({ field }) => (
                    <FormItem className="flex flex-col justify-start md:col-span-2 xl:col-span-6">
                        <FormLabel>
                            Objetivo
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
                        <FormControl>
                            <Textarea
                                {...field}
                                placeholder="Vamos fazer algo incrível!"
                                className="text-base sm:h-28 sm:text-sm"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="areaId"
                render={({ field }) => (
                    <FormItem className="flex flex-col justify-start xl:col-span-3">
                        <FormLabel>
                            Área
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
                        <FormControl>
                            <SelectArea {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="subareaIds"
                render={({ field }) => (
                    <FormItem className="flex flex-col justify-start md:col-span-2 xl:col-span-6">
                        <FormLabel>
                            Subáreas
                            <span className="text-xs">
                                {field?.value ? ` (${field.value.length})` : ''}
                            </span>
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
                        <FormControl>
                            <MultiSelectSubaria {...field} className="h-28" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name="descricao"
                render={({ field }) => (
                    <FormItem className="md:col-span-4 xl:col-span-12">
                        <FormLabel>
                            Descrição
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
                        <FormControl>
                            <Textarea
                                {...field}
                                placeholder="Conte mais..."
                                className="text-base sm:text-sm"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="valorSolicitado"
                render={({ field }) => (
                    <FormItem className="flex flex-col justify-start xl:col-span-2">
                        <FormLabel>
                            Valor solicitado
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
                        <FormControl>
                            <CurrencyInput
                                {...field}
                                placeholder="R$ 0,00"
                                className="text-base sm:text-sm"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="dataCriacao"
                render={({ field }) => (
                    <FormItem className="flex flex-col justify-start xl:col-span-3">
                        <FormLabel>
                            Data de criação
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
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
                    <FormItem className="flex flex-col justify-start xl:col-span-3">
                        <FormLabel>
                            Data de conclusão
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
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
