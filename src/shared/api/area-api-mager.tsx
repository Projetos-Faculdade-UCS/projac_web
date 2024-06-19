import { Area } from '../lib/types';
import { BaseApiManager } from './api-manager';

export class AreaApi extends BaseApiManager {
    private static instance: AreaApi;

    private constructor() {
        super();
    }

    public static getInstance(): AreaApi {
        if (!AreaApi.instance) {
            AreaApi.instance = new AreaApi();
        }
        return AreaApi.instance;
    }

    public async getAreas() {
        const api = this.getApi();
        const response = await api.get<Area[]>(`/areas`);
        return response.data;
    }
}
