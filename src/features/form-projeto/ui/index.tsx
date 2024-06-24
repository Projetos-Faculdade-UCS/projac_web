'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ProjetoSchema, projetoSchema } from '../lib/schema';
import { FormResumo } from './form-steps/form-resumo';
import { InfosGerais } from './form-steps/infos-gerais';
import { Participantes } from './form-steps/participantes';
import { Resultados } from './form-steps/resultados';
import { StepperControlBar } from './stepper-control-bar';
import { StepperProgressBar } from './stepper-progress-bar';

export function FormProjeto() {
    const form = useForm<ProjetoSchema>({
        resolver: zodResolver(projetoSchema),
        defaultValues: {
            titulo: '',
            objetivo: '',
            valorSolicitado: 0,
            area: '',
            subareas: [],
            pesquisadorProjeto: [],
            agenciasFomentoIds: [],
            // producoesAcademicas: [],
            // valoresArrecadados: [],
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(console.log)}>
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
