import { ProjetoSchema } from "@/features/form-projeto/lib/schema";
import { Projeto, ProjetoResumido } from "../../lib/types";
import { BaseApiManager } from "../api-manager-fetch";

export class ProjetoApi extends BaseApiManager {
    private static instance: ProjetoApi;

    private constructor() {
        super();
    }

    public static getInstance(): ProjetoApi {
        if (!ProjetoApi.instance) {
            ProjetoApi.instance = new ProjetoApi();
        }
        return ProjetoApi.instance;
    }

    public async getProjetos(params?: string) {
        const response = await this.get<ProjetoResumido[]>(`/projetos${params ? '?'+ params : ''}`);
        return response;
    }

    public async getProjeto(idProjeto: string) {
        const response = await this.get<Projeto>(
            `/projetos/${idProjeto}/`
        );
        return response;
    }
    public async criarProjeto(projeto: ProjetoSchema) {
        const response = await this.post<Projeto>('/projetos/', projeto);
        return response;
    }

    public async deletarProjeto(idProjeto: string) {
        const response = await this.delete(`/projetos/${idProjeto}/`);
        return response;
    }
}