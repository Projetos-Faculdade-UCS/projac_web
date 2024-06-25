'use server';

import { AreaApi } from "@/shared/api/endpoints/area";
import { FomentadorApi } from "@/shared/api/endpoints/fomentador";
import { PesquisadorApi } from "@/shared/api/endpoints/pesquisador";
import { ProjetoApi } from "@/shared/api/endpoints/projeto";
import { SubareaApi } from "@/shared/api/endpoints/subarea";
import { ProjetoApiErrors } from "@/shared/lib/types";
import { ProjetoSchema } from "../lib/schema";


export async function getAreas(){
    return AreaApi.getInstance().getAreas();
}

export async function getSubareas(){
    return SubareaApi.getInstance().getSubareas();
}

export async function getPesquisadores(){
    return PesquisadorApi.getInstance().getPesquisadores()
}

export async function getFomentadores(){
    return FomentadorApi.getInstance().getFomentadores()
}

export async function createProjeto(data: ProjetoSchema){

    return ProjetoApi.getInstance().criarProjeto(data).catch((error) => {
        const formErros =  error.response.data as ProjetoApiErrors
        return { status: error.response.status, data: formErros}
    }).then((response) => {
        return { status: response.status, data: response.data};
    });
}