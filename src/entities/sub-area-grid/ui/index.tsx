type SubAreaGridProps = {
    // subareas: Subarea[];
    promiseProj: Promise<Projeto>;
};

export async function SubAreaGrid({ promiseProj }: SubAreaGridProps) {
    const { subareas } = await promiseProj;
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
