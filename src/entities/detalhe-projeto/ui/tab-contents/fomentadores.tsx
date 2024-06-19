import { AgenciaFomento } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';
import { ScrollArea } from '@/shared/ui/scroll-area';

type FomentadoresTabProps = {
    fomentadores: AgenciaFomento[];
};

export function FomentadoresTab({ fomentadores }: FomentadoresTabProps) {
    return (
        <ScrollArea>
            <div className="flex flex-col gap-6">
                {fomentadores.map((fomentador) => (
                    <div
                        className="flex items-center gap-4"
                        key={fomentador.sigla}
                    >
                        <div className="rounded-full bg-purple-200/50 p-2">
                            <IonIcon
                                name="business-outline"
                                className="flex text-lg text-purple-800"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base">
                                {fomentador.sigla}
                            </span>
                            <span className="text-sm text-muted-foreground">
                                {fomentador.nome}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
    );
}
