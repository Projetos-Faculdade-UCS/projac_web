'use client';
import { Area } from '@/shared/lib/types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/select';
import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { getAreas } from '../../api/server';
import { ProjetoSchema } from '../../lib/schema';

type SelectAreaProps = ControllerRenderProps<ProjetoSchema, 'areaId'>;

const SelectArea = React.forwardRef<
    HTMLSelectElement,
    Omit<SelectAreaProps, 'ref'>
>(({ onChange, value, ...props }, ref) => {
    const [areas, setAreas] = React.useState<Area[]>([]);
    React.useEffect(() => {
        getAreas().then((areas) => setAreas(areas));
    }, []);

    return (
        <Select onValueChange={onChange} defaultValue={value}>
            <SelectTrigger>
                <SelectValue
                    placeholder="Selecione uma área"
                    ref={ref}
                    {...props}
                />
            </SelectTrigger>
            <SelectContent>
                {areas.map((area) => (
                    <SelectItem key={area.id} value={String(area.id)}>
                        <span
                            className=" mr-2 inline-block h-3 w-3 rounded-full"
                            style={{ backgroundColor: area.cor }}
                        />
                        {area.nome}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
});

SelectArea.displayName = 'SelectArea';

export { SelectArea };
