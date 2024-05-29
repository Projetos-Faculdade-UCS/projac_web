type IonIconProps = {
    name: string;
    size?: 'small' | 'large';
    className?: string;
};

export function IonIcon({ name, size, className }: IonIconProps) {
    const IonIcon = 'ion-icon';
    return (
        // @ts-ignore
        <IonIcon
            name={name}
            size={size}
            className={className}
            style={{
                padding: '0.3125rem',
            }}
        />
    );
}
