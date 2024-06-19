import { Projeto, ProjetoResumido } from "../lib/types";
import { BaseApiManager } from "./api-manager";

export class ProjetosApiManager extends BaseApiManager {
    private static instance: ProjetosApiManager;

    private constructor() {
        super();
    }

    public static getInstance(): ProjetosApiManager {
        if (!ProjetosApiManager.instance) {
            ProjetosApiManager.instance = new ProjetosApiManager();
        }
        return ProjetosApiManager.instance;
    }

    public async getProjetos() {
        const api = this.getApi();
        const response = await api.get<ProjetoResumido[]>(`/projetos`);
        return response.data;
    }

    public async getProjeto(idProjeto: string) {
        const api = this.getApi();
        const response = await api.get<Projeto>(
            `/projetos/${idProjeto}`
        );

        return response.data;
    }
    public async criarProjeto(projeto: Projeto) {
        const api = this.getApi();
        const response = await api.post<Projeto>('/projetos', projeto);
        return response.data;
    }
}