'use client';
import { Button } from '@/shared/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProjetoSchema, projetoSchema } from '../lib/schema';

export function FormProjeto() {
    const [formData, setFormData] = useState<ProjetoSchema | null>(null);
    const form = useForm<ProjetoSchema>({
        resolver: zodResolver(projetoSchema),
        defaultValues: {
            titulo: '',
            // objetivo: '',
            // descricao: '',
            // valorSolicitado: 0,
            // dataConclusao: null,
            // producoesAcademicas: [],
            // valoresArrecadados: [],
        },
    });

    return (
        <Form {...form}>
            <form
                id={'pedro'}
                onSubmit={form.handleSubmit((data) => setFormData(data))}
            >
                <FormField
                    control={form.control}
                    name="titulo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Título</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Título" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant={'outline'} className="mt-4">
                    Criar Projeto
                </Button>
            </form>
            <div className="mt-4">
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </Form>
    );
}
