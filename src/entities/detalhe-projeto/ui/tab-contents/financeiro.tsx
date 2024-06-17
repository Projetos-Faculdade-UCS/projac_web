import { ValorArrecadado } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';

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
            <div className="flex flex-wrap items-center gap-10">
                <div className="flex items-center gap-4">
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
                                {valorSolicitado.toFixed(2).replace('.', ',')}
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
                                {totalArrecadado.toFixed(2).replace('.', ',')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {valoresArrecadados.length > 0 && (
                <div className="flex flex-col gap-2">
                    <span className="medium text-sm">Histórico de valores</span>
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
                                                {valorArrecadado.valor
                                                    .toFixed(2)
                                                    .replace('.', ',')}
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
                </div>
            )}
        </div>
    );
}
