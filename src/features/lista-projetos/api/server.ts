'use server';
import { ProjetoApi } from "@/shared/api/endpoints/projeto";
import { ProjetoResumido } from "@/shared/lib/types";
import { ProjetosSearchParams } from "../lib/types";
import { obj2SearchParams } from "../lib/utils";

export async function getProjetos(params?: ProjetosSearchParams){
    const urlParams = obj2SearchParams(params || {});
    return ProjetoApi.getInstance().getProjetos(urlParams.toString()).then((response) => {
        return response.data as ProjetoResumido[];
    });
}