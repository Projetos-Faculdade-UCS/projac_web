'use client';
import { useCarousel } from '@/shared/ui/carousel';
import { IonIcon } from '@/shared/ui/ion-icon';
import { Stepper, StepperStep, useStepper } from '@/shared/ui/stepper';
import { useCallback } from 'react';

type StepperProgressBarProps = {
    // TODO
};

export const StepperProgressBar: React.FC<StepperProgressBarProps> = () => {
    const { api } = useCarousel();
    const setActiveStep = useStepper((state) => state.setActiveStep);

    const onSelect = useCallback(() => {
        if (!api) return;
        const selectedIndex = api.selectedScrollSnap();
        setActiveStep(selectedIndex);
    }, [api, setActiveStep]);

    api?.on('select', onSelect);

    return (
        <Stepper>
            <StepperStep index={0} title="Informações gerais">
                <IonIcon
                    name="information-outline"
                    className="flex text-base md:text-xl"
                />
            </StepperStep>
            <StepperStep index={1} title="Participantes">
                <IonIcon
                    name="people-outline"
                    className="flex text-base md:text-xl"
                />
            </StepperStep>
            <StepperStep index={2} title="Resultados">
                <IonIcon
                    name="analytics-outline"
                    className="flex text-base md:text-xl"
                />
            </StepperStep>
            <StepperStep index={3} title="Revisão" isLast>
                <IonIcon
                    name="receipt-outline"
                    className="flex text-base md:text-xl"
                />
            </StepperStep>
        </Stepper>
    );
};
