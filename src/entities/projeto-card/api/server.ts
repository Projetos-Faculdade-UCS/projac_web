'use server';

import { ProjetoApi } from "@/shared/api/endpoints/projeto";
import { revalidatePath } from "next/cache";


export async function deletarProjeto(idProjeto: string) {
    revalidatePath('/api/projetos');
    revalidatePath(`/api/projetos/${idProjeto}`);

    return ProjetoApi.getInstance().deletarProjeto(idProjeto);
}