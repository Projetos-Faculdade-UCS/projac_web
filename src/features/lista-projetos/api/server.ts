'use server';
import { ProjetoApi } from "@/shared/api/endpoints/projeto";
import { ProjetoResumido } from "@/shared/lib/types";

export async function getProjetos(params?: string){
    return ProjetoApi.getInstance().getProjetos(params).then((response) => {
        return response.data as ProjetoResumido[];
    });
}