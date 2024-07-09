import { Area } from '../../lib/types';
import { BaseApiManager } from '../api-manager-fetch';

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
        const response = await this.get<Area[]>(`/areas`);
        return response;
    }
}
