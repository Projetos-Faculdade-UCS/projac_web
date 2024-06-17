import { Projeto } from '@/shared/lib/types';

type HeaderProjProps = {
    promiseProj: Promise<Projeto>;
};

export async function HeaderProjeto({ promiseProj }: HeaderProjProps) {
    const { titulo, objetivo } = await promiseProj;

    return (
        <div className="mb-8 flex flex-col gap-1">
            <span className="text-2xl font-semibold text-primary">
                {titulo}
            </span>
            <span className="text-base text-muted-foreground">{objetivo}</span>
        </div>
    );
}
