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
import { MultiSelectSubaria } from '../custom-inputs/multi-select-subarea';
import { SelectArea } from '../custom-inputs/select-area';

type InfoGeraisProps = {
    control: Control<ProjetoSchema>;
};

export function InfosGerais({ control }: InfoGeraisProps) {
    return (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-12">
            <FormField
                control={control}
                name="titulo"
                render={({ field }) => (
                    <FormItem className="col-span-1 flex flex-col justify-start xl:col-span-9">
                        <FormLabel>
                            Título
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Título" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name="area"
                render={({ field }) => (
                    <FormItem className="col-span-1 flex flex-col justify-start xl:col-span-3">
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
                name="objetivo"
                render={({ field }) => (
                    <FormItem className="col-span-1 flex flex-col justify-start xl:col-span-6">
                        <FormLabel>
                            Objetivo
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
                        <FormControl>
                            <Textarea
                                {...field}
                                placeholder="Objetivo"
                                className="h-28"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name="subareas"
                render={({ field }) => (
                    <FormItem className="col-span-1 flex flex-col justify-start xl:col-span-6">
                        <FormLabel>
                            Subáreas
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
                    <FormItem className="col-span-12">
                        <FormLabel>
                            Descrição
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
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
                    <FormItem className="col-span-1 flex flex-col justify-start xl:col-span-2">
                        <FormLabel>
                            Valor solicitado
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
                        <FormControl>
                            <CurrencyInput {...field} placeholder="R$ 0,00" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
