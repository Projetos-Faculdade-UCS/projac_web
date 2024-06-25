import { Pesquisador } from "@/shared/lib/types";
import { BaseApiManager } from "../api-manager";

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
        const api = this.getApi();
        const response = await api.get<Pesquisador[]>(`/pesquisadores`);
        return response.data;
    }
}