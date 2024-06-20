'use server';

import { AreaApi } from "@/shared/api/endpoints/area";
import { SubareaApi } from "@/shared/api/endpoints/subarea";


export async function getAreas(){
    return AreaApi.getInstance().getAreas();
}

export async function getSubareas(){
    return SubareaApi.getInstance().getSubareas();
}