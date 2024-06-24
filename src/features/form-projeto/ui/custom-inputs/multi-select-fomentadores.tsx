import { AgenciaFomento } from '@/shared/lib/types';
import { forwardRef, useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { getFomentadores } from '../../api/server';
import { ProjetoSchema } from '../../lib/schema';

type MultiSelectFomentadoresProps = ControllerRenderProps<
    ProjetoSchema,
    'agenciasFomentoIds'
>;

const MultiSelectFomentadores = forwardRef<
    HTMLSelectElement,
    Omit<MultiSelectFomentadoresProps, 'ref'>
>(({ onChange, value, ...props }, ref) => {
    const [fomentadores, setFomentadores] = useState<AgenciaFomento[]>([]);
    useEffect(() => {
        getFomentadores().then(setFomentadores);
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(
            event.target.selectedOptions,
            (option) => {
                return option.value;
            },
        );
        onChange(selectedOptions);
    };

    return (
        <div className="flex flex-col gap-2">
            <select
                ref={ref}
                multiple
                // className="hidden"
                value={value}
                onChange={handleChange}
                {...props}
            >
                {fomentadores.map((fomentador) => (
                    <option
                        key={fomentador.id}
                        value={fomentador.id.toString()}
                    >
                        {fomentador.sigla}
                    </option>
                ))}
            </select>
        </div>
    );
});

MultiSelectFomentadores.displayName = 'MultiSelectFomentadores';

export { MultiSelectFomentadores };
