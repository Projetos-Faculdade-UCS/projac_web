import { ProducaoAcademica } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';

type ProducoesTabProps = {
    producoes: ProducaoAcademica[];
};

export function ProducoesTab({ producoes }: ProducoesTabProps) {
    return (
        <div className="flex flex-col gap-6">
            {producoes.map((producao) => (
                <div
                    key={producao.id}
                    className="flex w-[45rem] items-center  gap-4"
                >
                    <div className="flex w-16 shrink-0 flex-col items-center gap-1">
                        <div className="w-fit rounded-full bg-purple-200/50 p-2">
                            <IonIcon
                                name="book-outline"
                                className="flex text-lg text-purple-800"
                            />
                        </div>
                        <span className="text-wrap break-all text-center text-xs text-purple-800">
                            {producao.tipo}
                        </span>
                    </div>
                    <div className="flex w-full flex-col">
                        <span className="text-base font-semibold">
                            {producao.titulo}
                        </span>
                        <span className="truncate text-sm text-muted-foreground">
                            {producao.descricao}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
