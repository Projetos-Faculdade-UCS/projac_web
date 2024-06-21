import { cn } from '@/shared/lib/utils';
import { IonIcon } from '@/shared/ui/ion-icon';
import React, { HtmlHTMLAttributes } from 'react';
import { create } from 'zustand';

type StepperStore = {
    activeStep: number;
    setActiveStep: (value: number) => void;
};

const useStepper = create<StepperStore>((set) => ({
    activeStep: 0,
    setActiveStep: (value: number) => set({ activeStep: value }),
}));

type StepperProgressBarProps = HtmlHTMLAttributes<HTMLOListElement>;

const Stepper = ({
    className,
    children,
    ...props
}: StepperProgressBarProps) => {
    return (
        <ol
            className={cn(
                'relative flex flex-col gap-2 md:flex-row',
                className,
            )}
            {...props}
        >
            {children}
        </ol>
    );
};

type StepperStepProps = {
    index: number;
    children: React.ReactNode;
    title: React.ReactNode;
    isLast?: boolean;
};

function StepperStep({ index, children, title, isLast }: StepperStepProps) {
    const { activeStep } = useStepper();
    const isActive = activeStep === index;
    const isCompleted = activeStep > index;

    return (
        <li
            className={`group flex gap-x-2 md:block md:shrink md:basis-0
                
                ${!isLast && 'flex-1'}
            `}
        >
            <div className="flex min-h-8 min-w-8 flex-col items-center align-middle md:inline-flex md:w-full md:flex-row md:flex-wrap">
                <span
                    className={cn(
                        `flex size-7 flex-shrink-0 items-center justify-center rounded-full border border-outline bg-muted
                        font-medium text-muted-foreground shadow md:size-9`,
                        isActive &&
                            'border-primary bg-purple-50 text-primary shadow-lg',
                        isCompleted && 'bg-primary text-white',
                    )}
                >
                    {!isCompleted ? (
                        children
                    ) : (
                        <IonIcon
                            name="checkmark-outline"
                            className="flex text-base md:text-xl"
                        />
                    )}
                </span>
                <div
                    className={`mt-2 h-full w-px md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1 
                        ${isCompleted ? 'bg-indigo-600' : 'bg-gray-200'} group-last:hidden`}
                />
            </div>
            <div className="grow pb-5 md:mt-3 md:grow-0">
                <span
                    className={cn(
                        'block text-xs text-muted-foreground',
                        (isActive || isCompleted) && 'font-medium text-primary',
                        isActive && 'text-base font-semibold',
                    )}
                >
                    {title}
                </span>
            </div>
        </li>
    );
}

export { Stepper, StepperStep, useStepper };
