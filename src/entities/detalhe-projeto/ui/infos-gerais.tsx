import {
    getIconName,
    getStatusHexColor,
    getStatusLabel,
} from '@/entities/projeto-card/lib';
import { Projeto } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { AreaCard, SubareaCard } from './area-subaria';
import { DescricaoCollapse } from './decricao-collapse';
import { InfoCard, InfoCardContent, InfoCardTitle } from './info-card';
import { FinanceiroTab } from './tab-contents/financeiro';
import { PesquisadoresTab } from './tab-contents/pesquisadores';

type InfosGeraisProps = {
    promiseProj: Promise<Projeto>;
};

export async function InfosGerais({ promiseProj }: InfosGeraisProps) {
    const projeto = await promiseProj;
    return (
        <div className="flex min-h-[80vh] flex-col gap-6">
            <div className="flex flex-wrap items-center gap-6 sm:gap-14">
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

            <Tabs defaultValue="financeiro" className="mt-10 h-full ">
                <TabsList className="mb-2">
                    <TabsTrigger
                        value="pesquisadores"
                        className="gap-2 text-base data-[state=active]:text-primary"
                    >
                        <IonIcon name="people-outline" className="text-lg" />
                        <span className="text-foreground">Pesquisadores</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="financeiro"
                        className="gap-2 text-base data-[state=active]:text-primary"
                    >
                        <IonIcon name="cash-outline" className="text-lg" />
                        <span className="text-foreground">Financeiro</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="fomentadores"
                        className="gap-2 text-base data-[state=active]:text-primary"
                    >
                        <IonIcon name="business-outline" className="text-lg" />

                        <span className="text-foreground">Fomentadores</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="producoes"
                        className="gap-2 text-base data-[state=active]:text-primary"
                    >
                        <IonIcon name="library-outline" className="text-lg" />

                        <span className="text-foreground">Produções</span>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="pesquisadores">
                    <PesquisadoresTab pesquisadores={projeto.pesquisadores} />
                </TabsContent>
                <TabsContent value="financeiro">
                    <FinanceiroTab
                        valorSolicitado={projeto.valorSolicitado}
                        totalArrecadado={projeto.valorTotalArrecadado}
                        valoresArrecadados={projeto.valoresArrecadados}
                    />
                </TabsContent>
                <TabsContent value="fomentadores">Fomentadores</TabsContent>
                <TabsContent value="producoes">Produções</TabsContent>
            </Tabs>
        </div>
    );
}
