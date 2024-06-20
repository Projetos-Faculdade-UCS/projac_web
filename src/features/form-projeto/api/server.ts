'use server';

import { AreaApi } from "@/shared/api/area-api-manager";

export async function getAreas(){
    return AreaApi.getInstance().getAreas();
}