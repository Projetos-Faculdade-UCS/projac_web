'use client';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { IonIcon } from '@/shared/ui/ion-icon';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProjetoSchema, projetoSchema } from '../lib/schema';
import { InfosGerais } from './form-steps/infos-gerais';

export function FormProjeto() {
    const [formData, setFormData] = useState<ProjetoSchema | null>(null);
    const form = useForm<ProjetoSchema>({
        resolver: zodResolver(projetoSchema),
        defaultValues: {
            titulo: '',
            // objetivo: '',
            descricao: '',
            valorSolicitado: 0,
            dataConclusao: null,
            area: '',
            // producoesAcademicas: [],
            // valoresArrecadados: [],
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => setFormData(data))}>
                <InfosGerais control={form.control} />
                <div className="flex w-full justify-end gap-4">
                    <Button variant={'outline'} className="mt-4">
                        <Link href="/projetos">Cancelar</Link>
                    </Button>

                    <Button
                        type="submit"
                        variant={'default'}
                        className=" mt-4 gap-2 "
                    >
                        <IonIcon name="save-outline" />
                        Salvar
                    </Button>
                </div>
            </form>
            <div className="mt-4">
                <pre className="rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(formData, null, 2)}
                    </code>
                </pre>
            </div>
        </Form>
    );
}
