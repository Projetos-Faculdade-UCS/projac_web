import { Subarea } from '@/shared/lib/types';

type SubAreaGridProps = {
    subareas: Subarea[];
};

export async function SubAreaGrid({ subareas }: SubAreaGridProps) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {subareas.map((subarea) => (
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
            ))}
        </div>
    );
}
