import { ProducaoAcademica } from '@/shared/lib/types';
import { IonIcon } from '@/shared/ui/ion-icon';
import Link from 'next/link';

type ProducoesTabProps = {
    producoes: ProducaoAcademica[];
};

export function ProducoesTab({ producoes }: ProducoesTabProps) {
    return (
        <div className="flex flex-col gap-6">
            {producoes.map((producao) => (
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
                        <span className="text-wrap break-all text-xs text-muted-foreground">
                            {producao.tipo}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
