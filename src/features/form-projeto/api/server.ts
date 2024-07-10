'use server';

import { AreaApi } from "@/shared/api/endpoints/area";
import { FomentadorApi } from "@/shared/api/endpoints/fomentador";
import { PesquisadorApi } from "@/shared/api/endpoints/pesquisador";
import { ProjetoApi } from "@/shared/api/endpoints/projeto";
import { SubareaApi } from "@/shared/api/endpoints/subarea";
import { revalidatePath } from "next/cache";
import { ProjetoSchema } from "../lib/schema";


export async function getAreas(){
    return AreaApi.getInstance().getAreas().then((response) => {
        return response.data;
    });
}

export async function getSubareas(){
    return SubareaApi.getInstance().getSubareas().then((response) => {
        return response.data;
    });
}

export async function getPesquisadores(){
    return PesquisadorApi.getInstance().getPesquisadores().then((response) => {
        return response.data;
    });
}

export async function getFomentadores(){
    return FomentadorApi.getInstance().getFomentadores().then((response) => {
        return response.data;
    });
}

export async function createProjeto(data: ProjetoSchema){
    return ProjetoApi.getInstance().criarProjeto(data).then((response) => {
        revalidatePath('/api/projetos');
        return response;
    });
}