import { Projeto } from '@/shared/lib/types';

type TituloProps = {
    promiseProj: Promise<Projeto>;
};
export async function Titulo({ promiseProj }: TituloProps) {
    const { titulo } = await promiseProj;
    return <span className="text-xl font-medium">{titulo}</span>;
}
