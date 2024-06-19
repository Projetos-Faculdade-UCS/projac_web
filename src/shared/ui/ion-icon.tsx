import { CSSProperties, HtmlHTMLAttributes } from 'react';

type IonIconProps = HtmlHTMLAttributes<HTMLDivElement> & {
    name: string;
    size?: 'small' | 'large';
    className?: string;
    style?: CSSProperties;
};

export function IonIcon({
    name,
    size,
    className,
    style,
    ...props
}: IonIconProps) {
    const IonIcon = 'ion-icon';
    return (
        // @ts-expect-error - IonIcon is a global component
        <IonIcon
            name={name}
            size={size}
            class={className}
            style={style}
            {...props}
        />
    );
}
