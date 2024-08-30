import { Button } from '@/shared/ui/button';
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { IonIcon } from '@/shared/ui/ion-icon';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/select';
import { Control } from 'react-hook-form';
import { ProjetoSchema } from '../../lib/schema';
import { SelectPesquisador } from './select-pesquisador';

type FormPesquisadorProjetoProps = {
    control: Control<ProjetoSchema>;
    index: number;
    onRemove: (index: number) => void;
};

export function FormPesquisadorProjeto({
    control,
    index,
    onRemove,
}: FormPesquisadorProjetoProps) {
    return (
        <div className="flex items-start">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-6">
                <FormField
                    control={control}
                    name={`pesquisadorProjeto.${index}.pesquisadorId`}
                    render={({ field }) => (
                        <FormItem className="md:col-span-3">
                            <FormControl>
                                <SelectPesquisador
                                    {...field}
                                    control={control}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name={`pesquisadorProjeto.${index}.cargo`}
                    render={({ field }) => (
                        <FormItem className="md:col-span-2">
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger>
                                        {field.value ? (
                                            <SelectValue />
                                        ) : (
                                            <span className="text-gray-500">
                                                Selecione um cargo
                                            </span>
                                        )}
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="coordenador">
                                            Coordernador
                                        </SelectItem>
                                        <SelectItem value="pesquisador">
                                            Pesquisador
                                        </SelectItem>
                                        <SelectItem value="colaborador">
                                            Colaborador
                                        </SelectItem>
                                        <SelectItem value="estagiario">
                                            Estagiário
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name={`pesquisadorProjeto.${index}.horas`}
                    render={({ field }) => (
                        <FormItem className="md:col-span-1">
                            <FormControl>
                                <Input
                                    onChange={(e) => {
                                        field.onChange(Number(e.target.value));
                                    }}
                                    type="number"
                                    value={
                                        field.value ? field.value : undefined
                                    }
                                    placeholder="0"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <Button
                variant="link"
                onClick={() => onRemove(index)}
                className="text-destructive"
            >
                <IonIcon name="trash-outline" />
            </Button>
        </div>
    );
}
