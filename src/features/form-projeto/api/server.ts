'use server';

import { AreaApi } from "@/shared/api/endpoints/area";
import { FomentadorApi } from "@/shared/api/endpoints/fomentador";
import { PesquisadorApi } from "@/shared/api/endpoints/pesquisador";
import { ProjetoApi } from "@/shared/api/endpoints/projeto";
import { SubareaApi } from "@/shared/api/endpoints/subarea";
import { AgenciaFomento, Area, Pesquisador, Subarea } from "@/shared/lib/types";
import { revalidatePath } from "next/cache";
import { ProjetoSchema } from "../lib/schema";


export async function getAreas(){
    return AreaApi.getInstance().getAreas().then((response) => {
        return response.data as Area[];
    });
}

export async function getSubareas(){
    return SubareaApi.getInstance().getSubareas().then((response) => {
        return response.data as Subarea[];
    });
}

export async function getPesquisadores(){
    return PesquisadorApi.getInstance().getPesquisadores().then((response) => {
        return response.data as Pesquisador[];
    });
}

export async function getFomentadores(){
    return FomentadorApi.getInstance().getFomentadores().then((response) => {
        return response.data as AgenciaFomento[];
    });
}

export async function createProjeto(data: ProjetoSchema){
    return ProjetoApi.getInstance().criarProjeto(data).then((response) => {
        revalidatePath('/api/projetos');
        return response;
    });
}