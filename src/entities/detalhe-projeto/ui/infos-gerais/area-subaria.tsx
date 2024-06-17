import { Subarea } from '@/shared/lib/types';

type SubareaCardProps = {
    subarea: Subarea;
};

export async function SubareaCard({ subarea }: SubareaCardProps) {
    return (
        <span
            key={`${subarea.id}`}
            className={`rounded-md border border-solid px-2 py-1 text-xs`}
            style={{
                borderColor: subarea.cor,
                color: subarea.cor,
            }}
        >
            {subarea.nome}
        </span>
    );
}

type AreaCardProps = {
    area: {
        nome: string;
        cor: string;
    };
};

export async function AreaCard({ area }: AreaCardProps) {
    return (
        <span
            className={`rounded-md border border-solid px-2 py-1 text-xs text-white`}
            style={{
                backgroundColor: area.cor,
                borderColor: area.cor,
            }}
        >
            {area.nome}
        </span>
    );
}
