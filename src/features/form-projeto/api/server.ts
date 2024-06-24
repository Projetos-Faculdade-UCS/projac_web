'use server';

import { AreaApi } from "@/shared/api/endpoints/area";
import { PesquisadorApi } from "@/shared/api/endpoints/pesquisador";
import { SubareaApi } from "@/shared/api/endpoints/subarea";


export async function getAreas(){
    return AreaApi.getInstance().getAreas();
}

export async function getSubareas(){
    return SubareaApi.getInstance().getSubareas();
}

export async function getPesquisadores(){
    return PesquisadorApi.getInstance().getPesquisadores()
}