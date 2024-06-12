import { cn } from '@/shared/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes, ReactNode } from 'react';

type InfoCardProps = {
    children: ReactNode;
    icon?: ReactNode;
};

function InfoCard({ children, icon }: InfoCardProps) {
    return (
        <div className="flex items-center gap-4">
            {icon ? (
                <div className="flex h-full">{icon}</div>
            ) : (
                <div className="h-8 w-8 rounded-full bg-primary"></div>
            )}
            <div className="flex flex-col gap-1">{children}</div>
        </div>
    );
}

function InfoCardTitle({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <span className={cn('text-xs text-muted', className)} {...props}>
            {children}
        </span>
    );
}

function InfoCardContent({
    children,
    className,
    asChild,
    ...props
}: HTMLAttributes<HTMLDivElement> & { asChild?: boolean }) {
    const Comp = asChild ? Slot : 'span';
    return (
        <Comp className={className} {...props}>
            {children}
        </Comp>
    );
}

export { InfoCard, InfoCardContent, InfoCardTitle };
