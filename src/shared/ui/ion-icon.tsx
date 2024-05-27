type IonIconProps = {
    name: string;
    size?: 'small' | 'large';
    className?: string;
};

export function IonIcon({ name, size, className }: IonIconProps) {
    // @ts-ignore
    return <ion-icon name={name} size={size} className={className}></ion-icon>;
}
