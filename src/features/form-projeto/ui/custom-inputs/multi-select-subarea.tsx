'use client';
import { Subarea } from '@/shared/lib/types';
import { cn } from '@/shared/lib/utils';
import { IonIcon } from '@/shared/ui/ion-icon';
import { ScrollArea } from '@/shared/ui/scroll-area';
import React, { HtmlHTMLAttributes } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { getSubareas } from '../../api/server';
import { ProjetoSchema } from '../../lib/schema';

type MultiSelectSubariaProps = ControllerRenderProps<
    ProjetoSchema,
    'subareas'
> & {
    className?: string;
};

const MultiSelectSubaria = React.forwardRef<
    HTMLSelectElement,
    Omit<MultiSelectSubariaProps, 'ref'>
>(({ onChange, value, className, ...props }, ref) => {
    const [subareas, setSubareas] = React.useState<Subarea[]>([]);
    React.useEffect(() => {
        getSubareas().then(setSubareas);
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
        <ScrollArea
            className={cn(
                'rounded-md border border-outline px-4 py-2',
                className,
            )}
        >
            <div className="flex flex-wrap gap-3">
                {subareas.map((subarea) => (
                    <SubAreaOption
                        key={subarea.id}
                        subarea={subarea}
                        selected={!!value?.includes(subarea.id.toString())}
                        onClick={(e) => {
                            e.preventDefault();

                            if (value === undefined) {
                                onChange([subarea.id.toString()]);
                            } else {
                                onChange(
                                    value.includes(subarea.id.toString())
                                        ? value.filter(
                                              (v) =>
                                                  v !== subarea.id.toString(),
                                          )
                                        : [...value, subarea.id.toString()],
                                );
                            }
                        }}
                    />
                ))}
            </div>
            <select
                ref={ref}
                multiple
                className="hidden"
                value={value}
                onChange={handleChange}
                {...props}
            >
                {subareas.map((subarea) => (
                    <option key={subarea.id} value={subarea.id.toString()}>
                        {subarea.nome}
                    </option>
                ))}
            </select>
        </ScrollArea>
    );
});

MultiSelectSubaria.displayName = 'MultiSelectSubaria';

export { MultiSelectSubaria };

type SubAreaOptionProps = HtmlHTMLAttributes<HTMLButtonElement> & {
    subarea: Subarea;
    selected: boolean;
};

function SubAreaOption({
    subarea,
    className,
    style,
    selected,
    ...props
}: SubAreaOptionProps) {
    return (
        <button
            className={cn(
                `flex items-center rounded-md border border-solid text-xs shadow-sm`,
                selected && 'shadow-lg',
                className,
            )}
            style={{
                borderColor: subarea.cor,
                background: selected ? subarea.cor : 'transparent',
                color: selected ? 'white' : subarea.cor,
                ...style,
            }}
            {...props}
        >
            <span className="py-1 pl-2">{subarea.nome}</span>
            {selected ? (
                <IonIcon
                    name="checkmark-circle-outline"
                    className="flex px-1 text-lg"
                />
            ) : (
                <IonIcon name="ellipse-outline" className="flex px-1 text-lg" />
            )}
        </button>
    );
}
