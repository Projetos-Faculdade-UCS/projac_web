import { AgenciaFomento } from '../../lib/types';
import { BaseApiManager } from '../api-manager';

export class FomentadorApi extends BaseApiManager {
    private static instance: FomentadorApi;

    private constructor() {
        super();
    }

    public static getInstance(): FomentadorApi {
        if (!FomentadorApi.instance) {
            FomentadorApi.instance = new FomentadorApi();
        }
        return FomentadorApi.instance;
    }

    public async getFomentadores() {
        const api = this.getApi();
        const response = await api.get<AgenciaFomento[]>(`/agencias-fomento`);
        return response.data;
    }
}
