'use client';
import { Projeto } from '@/shared/lib/types';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { createProjeto } from '../api/server';
import defaultValues from '../lib/default-info';
import { ProjetoSchema, projetoSchema } from '../lib/schema';
import { FormResumo } from './form-steps/form-resumo';
import { InfosGerais } from './form-steps/infos-gerais';
import { Participantes } from './form-steps/participantes';
import { Resultados } from './form-steps/resultados';
import { StepperControlBar } from './stepper-control-bar';
import { StepperProgressBar } from './stepper-progress-bar';

export function FormProjeto() {
    const router = useRouter();
    const form = useForm<ProjetoSchema>({
        resolver: zodResolver(projetoSchema),
        defaultValues,
    });

    const onSubmit = async (data: ProjetoSchema) => {
        const resp = await createProjeto(data);
        if (resp.status === 201) {
            toast.success('Projeto criado com sucesso');
            router.push(`/projetos/${(resp.data as Projeto).id}`);
        } else {
            console.log('error', resp.data);
            toast.error('Erro ao criar projeto - API retornou erros');
            //load my form with apiErrors
        }
    };
    const onError = (formErrors: FieldErrors<ProjetoSchema>) => {
        console.log('errors', formErrors);
        toast.error('Erro ao criar projeto - Zod retornou erros');
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onError)}>
                <Carousel>
                    <StepperProgressBar />
                    <CarouselContent className="py-6">
                        <CarouselItem className="pl-5 pr-2">
                            <InfosGerais control={form.control} />
                        </CarouselItem>
                        <CarouselItem className="pl-6">
                            <Participantes control={form.control} />
                        </CarouselItem>
                        <CarouselItem className="pl-6">
                            <Resultados control={form.control} />
                        </CarouselItem>
                        <CarouselItem className="pl-6">
                            <FormResumo />
                        </CarouselItem>
                    </CarouselContent>
                    <StepperControlBar />
                </Carousel>
            </form>
        </Form>
    );
}
