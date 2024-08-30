import { Pesquisador } from "@/shared/lib/types";
import { BaseApiManager } from "../api-manager-fetch";

export class PesquisadorApi extends BaseApiManager {
    private static instance: PesquisadorApi;

    private constructor() {
        super();
    }

    public static getInstance(): PesquisadorApi {
        if (!PesquisadorApi.instance){
            PesquisadorApi.instance = new PesquisadorApi();
        }
        return PesquisadorApi.instance;
    }

    public async getPesquisadores() {
        const response = await this.get<Pesquisador[]>(`/pesquisadores`, {
            cache: "force-cache",
        });
        return response;
    }
}