import {
    getIconName,
    getStatusHexColor,
    getStatusLabel,
} from '@/entities/projeto-card/lib';
import { Projeto } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';
import { AreaCard, SubareaCard } from './area-subaria';
import { DescricaoCollapse } from './decricao-collapse';
import { InfoCard, InfoCardContent, InfoCardTitle } from './info-card';

type InfosGeraisProps = {
    promiseProj: Promise<Projeto>;
};

export async function InfosGerais({ promiseProj }: InfosGeraisProps) {
    const projeto = await promiseProj;
    return (
        <div className="flex flex-col gap-6">
            <InfoCard
                icon={
                    <IonIcon
                        name={getIconName(projeto.status)}
                        className="self-center text-2xl"
                        style={{
                            color: getStatusHexColor(projeto.status),
                        }}
                    />
                }
            >
                <InfoCardTitle>Status</InfoCardTitle>
                <InfoCardContent>
                    {getStatusLabel(projeto.status)}
                </InfoCardContent>
            </InfoCard>

            <InfoCard
                icon={
                    <IonIcon
                        name="flag-outline"
                        className="self-center text-2xl text-primary"
                    />
                }
            >
                <InfoCardTitle>Objetivo</InfoCardTitle>
                <InfoCardContent>{projeto.objetivo}</InfoCardContent>
            </InfoCard>

            <InfoCard
                icon={
                    <IonIcon
                        name="book-outline"
                        className="self-center text-2xl text-primary"
                    />
                }
            >
                <InfoCardTitle>Área & Subáreas</InfoCardTitle>
                <InfoCardContent className="flex flex-wrap items-center gap-2">
                    <AreaCard area={projeto.area} />
                    {projeto.subareas.map((subarea) => (
                        <SubareaCard key={subarea.id} subarea={subarea} />
                    ))}
                </InfoCardContent>
            </InfoCard>

            {projeto.descricao && (
                <InfoCard
                    icon={
                        <IonIcon
                            name="reorder-four-outline"
                            className="text-2xl text-primary"
                        />
                    }
                >
                    <InfoCardTitle>Descrição</InfoCardTitle>
                    <InfoCardContent asChild>
                        <DescricaoCollapse descricao={projeto.descricao} />
                    </InfoCardContent>
                </InfoCard>
            )}

            <InfoCard
                icon={
                    <IonIcon
                        name="calendar-outline"
                        className="self-center text-2xl text-primary"
                    />
                }
            >
                <InfoCardTitle>Data de criação</InfoCardTitle>
                <InfoCardContent>{projeto.dataCriacao}</InfoCardContent>
            </InfoCard>
        </div>
    );
}
