import { ValorArrecadado } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { number2Currency } from '../../lib/utils';

type FinanceiroTabProps = {
    valorSolicitado: number;
    totalArrecadado: number;
    valoresArrecadados: ValorArrecadado[];
};

export function FinanceiroTab({
    valorSolicitado,
    totalArrecadado,
    valoresArrecadados,
}: FinanceiroTabProps) {
    return (
        <div className=" flex flex-col justify-start gap-4 ">
            <div className="flex flex-wrap items-center gap-4">
                <div className="mr-6 flex items-center gap-4">
                    <div className="rounded-full bg-purple-200/50 p-2">
                        <IonIcon
                            name="cash-outline"
                            className="flex text-lg text-purple-800"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">
                            Solicitado
                        </span>
                        <div className="flex items-center">
                            <span className="mr-1 text-sm text-muted-foreground">
                                R$
                            </span>
                            <span className="text-lg">
                                {number2Currency(valorSolicitado)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="rounded-full bg-purple-200/50 p-2">
                        <IonIcon
                            name="cash-outline"
                            className="flex text-lg text-purple-800"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">
                            Arrecadado
                        </span>
                        <div className="flex items-center">
                            <span className="mr-1 text-sm text-muted-foreground">
                                R$
                            </span>
                            <span className="text-lg">
                                {number2Currency(totalArrecadado)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {valoresArrecadados.length > 0 ? (
                <div className="grid gap-2 overflow-hidden">
                    <span className="flex items-center gap-2 ">
                        <span className="text-sm">Histórico de valores</span>
                        <span className="text-xs">
                            {`(${valoresArrecadados.length})`}
                        </span>
                    </span>
                    <ScrollArea>
                        <div className="flex flex-col gap-4">
                            {valoresArrecadados.map((valorArrecadado) => (
                                <div
                                    className="flex items-center gap-4"
                                    key={valorArrecadado.id}
                                >
                                    <div className="rounded-full bg-green-200/50 p-2">
                                        <IonIcon
                                            name="trending-up"
                                            className="flex text-lg text-green-800"
                                        />
                                    </div>
                                    <div className="flex w-full flex-col">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex items-center">
                                                <span className="mr-1 text-sm text-muted-foreground">
                                                    R$
                                                </span>
                                                <span className="text-lg">
                                                    {number2Currency(
                                                        valorArrecadado.valor,
                                                    )}
                                                </span>
                                            </div>
                                            <span className="text-xs text-muted-foreground">
                                                {valorArrecadado.data}
                                            </span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            {valorArrecadado.descricao}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            ) : (
                <div className="my-6 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
                    <IonIcon name="time-outline" className="text-3xl" />
                    <span className="w-48">
                        Não há histórico de valores arrecadados.
                    </span>
                </div>
            )}
        </div>
    );
}
