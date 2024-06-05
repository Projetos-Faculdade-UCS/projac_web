import { CSSProperties } from 'react';

type IonIconProps = {
    name: string;
    size?: 'small' | 'large';
    className?: string;
    style?: CSSProperties;
};

export function IonIcon({ name, size, className, style }: IonIconProps) {
    const IonIcon = 'ion-icon';
    return (
        // @ts-ignore
        <IonIcon name={name} size={size} class={className} style={style} />
    );
}
