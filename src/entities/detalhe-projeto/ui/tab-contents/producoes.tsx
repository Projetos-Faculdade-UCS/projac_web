import { ProducaoAcademica } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';
import Link from 'next/link';

type ProducoesTabProps = {
    producoes: ProducaoAcademica[];
};

export function ProducoesTab({ producoes }: ProducoesTabProps) {
    return (
        <div className="flex flex-col gap-6 rounded-md rounded-tl-none border border-outline bg-primary-foreground px-4 py-3 shadow-sm ">
            {producoes.length > 0 ? (
                producoes.map((producao) => (
                    <Link
                        key={producao.id}
                        className="flex items-center  gap-4"
                        href={`/producoes-academicas/${producao.id}`}
                    >
                        <div className="w-fit rounded-full bg-purple-200/50 p-2">
                            <IonIcon
                                name="book-outline"
                                className="flex text-lg text-purple-800"
                            />
                        </div>
                        <div className="flex w-full flex-col">
                            <span className="text-base">{producao.titulo}</span>
                            <span className="text-wrap break-all text-sm text-muted-foreground">
                                {producao.tipo}
                            </span>
                        </div>
                    </Link>
                ))
            ) : (
                <div className="my-6 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
                    <IonIcon name="book-outline" className="text-3xl" />
                    <span className="w-48">Não há produções acadêmicas.</span>
                </div>
            )}
        </div>
    );
}
