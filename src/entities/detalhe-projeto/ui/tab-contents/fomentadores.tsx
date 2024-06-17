import { AgenciaFomento } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';

type FomentadoresTabProps = {
    fomentadores: AgenciaFomento[];
};

export function FomentadoresTab({ fomentadores }: FomentadoresTabProps) {
    return (
        <div className="flex flex-col gap-6">
            {fomentadores.map((fomentador) => (
                <div className="flex items-center gap-4" key={fomentador.nome}>
                    <div className="rounded-full bg-purple-200/50 p-2">
                        <IonIcon
                            name="business-outline"
                            className="flex text-lg text-purple-800"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base">{fomentador.nome}</span>
                        <span className="text-sm text-muted-foreground">
                            {fomentador.sigla}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
