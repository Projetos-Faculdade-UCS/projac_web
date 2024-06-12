import {
    getIconName,
    getStatusHexColor,
    getStatusLabel,
} from '@/entities/projeto-card/lib';
import { Projeto } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';
import { SubAreaGrid } from './sub-area-grid';

type InfosGeraisProps = {
    promiseProj: Promise<Projeto>;
};

export async function InfosGerais({ promiseProj }: InfosGeraisProps) {
    const projeto = await promiseProj;
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <IonIcon
                    name={getIconName(projeto.status)}
                    className="text-2xl"
                    style={{
                        color: getStatusHexColor(projeto.status),
                    }}
                />
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted">Status</span>
                    <span className="text-sm font-medium">
                        {getStatusLabel(projeto.status)}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <IonIcon
                    name="book-outline"
                    className="text-2xl text-primary"
                />
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted">Subáreas</span>

                    <SubAreaGrid subareas={projeto.subareas} />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <IonIcon
                    name="calendar-outline"
                    className="text-2xl text-primary"
                />
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted">Data de criação</span>
                    <span className="text-sm font-medium">
                        {projeto.dataCriacao}
                    </span>
                </div>
            </div>
        </div>
    );
}
