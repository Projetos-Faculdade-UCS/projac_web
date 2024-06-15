import { Projeto } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { InfosGerais } from './infos-gerais';
import { FinanceiroTab } from './tab-contents/financeiro';
import { FomentadoresTab } from './tab-contents/fomentadores';
import { PesquisadoresTab } from './tab-contents/pesquisadores';
import { ProducoesTab } from './tab-contents/producoes';

type InfosGeraisProps = {
    promiseProj: Promise<Projeto>;
};

export async function DetalheProjeto({ promiseProj }: InfosGeraisProps) {
    const projeto = await promiseProj;
    return (
        <div className="flex min-h-[80vh] flex-col gap-6">
            <div className="2justify-between flex flex-row flex-wrap gap-10 lg:flex-nowrap">
                <InfosGerais projeto={projeto} />
                <div className="flex min-h-20 w-full shrink-0 flex-col gap-2 rounded-md bg-primary-foreground px-4 py-2 shadow-sm lg:w-64">
                    <div className="flex items-center gap-2 text-base">
                        <IonIcon
                            name="people-outline"
                            className="text-2xl text-primary"
                        />
                        <span className="text-xs text-muted-foreground">
                            Pesquisadores
                        </span>
                    </div>
                    <PesquisadoresTab pesquisadores={projeto.pesquisadores} />
                </div>
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
                        value="fomentadores"
                        className="gap-2 text-base data-[state=active]:text-primary"
                    >
                        <IonIcon name="business-outline" className="text-lg" />

                        <span className="text-foreground">Fomentadores</span>
                    </TabsTrigger>
                </TabsList>
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
