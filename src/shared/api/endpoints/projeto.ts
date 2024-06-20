import { Projeto, ProjetoResumido } from "../../lib/types";
import { BaseApiManager } from "../api-manager";

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