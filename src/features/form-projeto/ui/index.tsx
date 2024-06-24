'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createProjeto } from '../api/server';
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
            dataCriacao: '',
            valorSolicitado: 0,
            areaId: '',
            subareaIds: [],
            pesquisadorProjeto: [],
            agenciasFomentoIds: [],
            producoesAcademicas: [],
            valoresArrecadados: [],
        },
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((data) => {
                    // transform data to plain object
                    const finalProjeto = {};
                    for (const key in data) {
                        if (data[key] !== undefined) {
                            finalProjeto[key] = data[key];
                        }
                    }
                    console.log(finalProjeto);
                    createProjeto(finalProjeto).then(
                        (response) => {
                            console.log(response);
                        },
                        (error) => {
                            console.error(error);
                        },
                    );
                })}
            >
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
