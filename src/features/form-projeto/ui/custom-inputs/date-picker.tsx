'use client';
import { cn } from '@/shared/lib/utils';
import { Calendar } from '@/shared/ui/calendar';
import { IonIcon } from '@/shared/ui/ion-icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import React, { useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { ProjetoSchema } from '../../lib/schema';
import { dateToBrDate } from '../../lib/utils';

type DatePickerProps = ControllerRenderProps<ProjetoSchema, 'dataConclusao'> & {
    disabledDates?: (date: Date) => boolean;
};
const DatePickerInput = React.forwardRef<
    HTMLInputElement,
    Omit<DatePickerProps, 'ref'>
>(({ value, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex h-9 items-center rounded-md border border-input px-3 py-1 text-sm shadow-sm">
                <PopoverTrigger asChild>
                    <button
                        className={cn(
                            'w-full text-left text-sm',
                            !value && 'text-muted-foreground',
                        )}
                    >
                        {value ? dateToBrDate(value) : 'Selecione uma data'}
                    </button>
                </PopoverTrigger>
                <div className="flex items-center gap-2">
                    {value && (
                        <div
                            className="flex p-1"
                            onClick={() => {
                                setIsOpen(false);
                                props.onChange(null);
                            }}
                        >
                            <IonIcon name="close" />
                        </div>
                    )}
                    <IonIcon name="calendar-outline" />
                </div>
            </div>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={value ? value : undefined}
                    onSelect={(date) => {
                        props.onChange(date);
                        setIsOpen(false);
                    }}
                    initialFocus
                    disabled={
                        props.disabledDates
                            ? props.disabledDates
                            : (date) => {
                                  return (
                                      date > new Date() ||
                                      date < new Date('1900-01-01')
                                  );
                              }
                    }
                />
            </PopoverContent>
        </Popover>
    );
});

DatePickerInput.displayName = 'DatePickerInput';

export { DatePickerInput };
