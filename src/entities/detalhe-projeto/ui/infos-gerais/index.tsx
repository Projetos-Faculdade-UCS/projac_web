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
    projeto: Projeto;
};

export function InfosGerais({ projeto }: InfosGeraisProps) {
    return (
        <div className="flex shrink flex-col gap-6">
            <div className="flex flex-wrap items-center gap-6">
                <InfoCard
                    className="mr-8"
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
                <div className="flex items-center gap-14">
                    <InfoCard
                        icon={
                            <IonIcon
                                name="calendar-clear-outline"
                                className="self-center text-2xl text-primary"
                            />
                        }
                    >
                        <InfoCardTitle>Data de criação</InfoCardTitle>
                        <InfoCardContent>{projeto.dataCriacao}</InfoCardContent>
                    </InfoCard>
                    {projeto.dataConclusao && (
                        <InfoCard
                            icon={
                                <IonIcon
                                    name="calendar-outline"
                                    className="self-center text-2xl text-primary"
                                />
                            }
                        >
                            <InfoCardTitle>Data de conclusão</InfoCardTitle>
                            <InfoCardContent>
                                {projeto.dataConclusao}
                            </InfoCardContent>
                        </InfoCard>
                    )}
                </div>
            </div>

            <InfoCard
                icon={
                    <IonIcon
                        name="bookmarks-outline"
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
        </div>
    );
}
