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
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-12">
                <InfosGerais projeto={projeto} />

                <div className="flex flex-col border-outline xl:col-span-3">
                    <div className="flex w-fit translate-y-[.0625rem] items-center gap-2 rounded-t-md border-x border-t border-outline bg-primary-foreground px-3 py-1 text-base">
                        <IonIcon
                            name="people-outline"
                            className="text-lg text-primary"
                        />
                        <span className="text-base font-medium">
                            Pesquisadores
                        </span>
                    </div>
                    <PesquisadoresTab pesquisadores={projeto.pesquisadores} />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-10 pb-4 xl:grid-cols-12">
                <Tabs
                    defaultValue="financeiro"
                    className="w-full xl:col-span-9"
                >
                    <TabsList className="justify-start">
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
                            <IonIcon
                                name="business-outline"
                                className="text-lg"
                            />

                            <span className="text-foreground">
                                Fomentadores
                            </span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent
                        asChild
                        value="financeiro"
                        className="max-h-72 min-h-64"
                    >
                        <FinanceiroTab
                            valorSolicitado={projeto.valorSolicitado}
                            totalArrecadado={projeto.valorTotalArrecadado}
                            valoresArrecadados={projeto.valoresArrecadados}
                        />
                    </TabsContent>
                    <TabsContent value="fomentadores" className="min-h-64">
                        <FomentadoresTab
                            fomentadores={projeto.agenciasFomento}
                        />
                    </TabsContent>
                </Tabs>
                <div className="row-start-1 flex flex-col xl:col-span-3 xl:row-start-auto">
                    <div className="flex w-fit translate-y-[.0625rem] items-center gap-2 rounded-t-md border-x border-t border-outline bg-primary-foreground px-3 py-1 text-base ">
                        <IonIcon
                            name="library-outline"
                            className="text-lg text-primary"
                        />

                        <span className="text-base font-medium">Produções</span>
                    </div>
                    <ProducoesTab producoes={projeto.producoesAcademicas} />
                </div>
            </div>
        </div>
    );
}
