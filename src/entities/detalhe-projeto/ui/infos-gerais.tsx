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
import { FomentadoresTab } from './tab-contents/fomentadores';
import { PesquisadoresTab } from './tab-contents/pesquisadores';
import { ProducoesTab } from './tab-contents/producoes';

type InfosGeraisProps = {
    promiseProj: Promise<Projeto>;
};

export async function InfosGerais({ promiseProj }: InfosGeraisProps) {
    const projeto = await promiseProj;
    return (
        <div className="flex min-h-[80vh] flex-col gap-6">
            <div className="flex flex-row flex-wrap gap-2">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center gap-6 sm:gap-14">
                        <InfoCard
                            icon={
                                <IonIcon
                                    name={getIconName(projeto.status)}
                                    className="self-center text-2xl"
                                    style={{
                                        color: getStatusHexColor(
                                            projeto.status,
                                        ),
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
                            <InfoCardContent>
                                {projeto.dataCriacao}
                            </InfoCardContent>
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
                                name="bookmarks-outline"
                                className="self-center text-2xl text-primary"
                            />
                        }
                    >
                        <InfoCardTitle>Área & Subáreas</InfoCardTitle>
                        <InfoCardContent className="flex flex-wrap items-center gap-2">
                            <AreaCard area={projeto.area} />
                            {projeto.subareas.map((subarea) => (
                                <SubareaCard
                                    key={subarea.id}
                                    subarea={subarea}
                                />
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
                                <DescricaoCollapse
                                    descricao={projeto.descricao}
                                />
                            </InfoCardContent>
                        </InfoCard>
                    )}
                </div>
                <div className="flex h-96 w-44 shrink-0 bg-purple-200"></div>
            </div>
            <Tabs
                defaultValue="financeiro"
                className="mt-10 flex h-full w-9/12 flex-col items-center justify-start self-center"
            >
                <TabsList className="mb-2 w-[47rem]">
                    <TabsTrigger
                        value="producoes"
                        className="gap-2 text-base data-[state=active]:text-primary"
                    >
                        <IonIcon name="library-outline" className="text-lg" />

                        <span className="text-foreground">Produções</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="financeiro"
                        className="gap-2 text-base data-[state=active]:text-primary"
                    >
                        <IonIcon name="cash-outline" className="text-lg" />
                        <span className="text-foreground">Financeiro</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="pesquisadores"
                        className="gap-2 text-base data-[state=active]:text-primary"
                    >
                        <IonIcon name="people-outline" className="text-lg" />
                        <span className="text-foreground">Pesquisadores</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="fomentadores"
                        className="gap-2 text-base data-[state=active]:text-primary"
                    >
                        <IonIcon name="business-outline" className="text-lg" />

                        <span className="text-foreground">Fomentadores</span>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="pesquisadores">
                    <PesquisadoresTab pesquisadores={projeto.pesquisadores} />
                </TabsContent>
                <TabsContent
                    value="financeiro"
                    className="flex justify-center rounded-md bg-white px-4 py-2"
                >
                    <FinanceiroTab
                        valorSolicitado={projeto.valorSolicitado}
                        totalArrecadado={projeto.valorTotalArrecadado}
                        valoresArrecadados={projeto.valoresArrecadados}
                    />
                </TabsContent>
                <TabsContent value="fomentadores">
                    <FomentadoresTab fomentadores={projeto.agenciasFomento} />
                </TabsContent>
                <TabsContent
                    value="producoes"
                    className="flex justify-center rounded-md bg-white px-4 py-2"
                >
                    <ProducoesTab producoes={projeto.producoesAcademicas} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
