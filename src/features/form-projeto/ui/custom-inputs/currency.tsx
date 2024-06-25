import { cn } from '@/shared/lib/utils';
import React from 'react';
import * as CurrencyPrimitive from 'react-currency-input-field';
import { ControllerRenderProps } from 'react-hook-form';

type CurrencyInputProps = CurrencyPrimitive.CurrencyInputProps &
    ControllerRenderProps;

const CurrencyInput = React.forwardRef<
    React.ElementRef<typeof CurrencyPrimitive.default>,
    Omit<CurrencyInputProps, 'ref'>
>(({ className, onChange, value, ...props }, ref) => {
    return (
        <CurrencyPrimitive.default
            ref={ref}
            className={cn(
                'h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:ring-0 focus-visible:ring-ring',
                className,
            )}
            defaultValue={value}
            decimalSeparator=","
            type="decimal"
            groupSeparator="."
            prefix={'R$ '}
            onValueChange={(_, __, values) => onChange(values?.float)}
            {...props}
        />
    );
});

CurrencyInput.displayName = 'CurrencyInput';

export { CurrencyInput };
