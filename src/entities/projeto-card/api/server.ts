'use server';

import { ProjetoApi } from "@/shared/api/endpoints/projeto";


export async function deletarProjeto(idProjeto: string) {
    return ProjetoApi.getInstance().deletarProjeto(idProjeto);
}