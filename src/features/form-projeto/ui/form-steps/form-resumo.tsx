import { ScrollArea } from '@/shared/ui/scroll-area';
import { useStepper } from '@/shared/ui/stepper';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ProjetoSchema } from '../../lib/schema';

export function FormResumo() {
    const { getValues } = useFormContext<ProjetoSchema>();
    const [values, setValues] = useState({} as ProjetoSchema);
    const activeStep = useStepper((state) => state.activeStep);

    useEffect(() => {
        if (activeStep === 3) {
            setValues(getValues());
        }
    }, [activeStep, getValues]);

    return (
        <div className="flex h-full flex-col gap-6">
            <ScrollArea className="h-96 rounded-md bg-slate-950 p-4">
                <pre>
                    <code className="text-white">
                        {JSON.stringify(values, null, 2)}
                    </code>
                </pre>
            </ScrollArea>
        </div>
    );
}
