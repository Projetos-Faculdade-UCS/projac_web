import { Subarea } from '../../lib/types';
import { BaseApiManager } from '../api-manager';

export class SubareaApi extends BaseApiManager {
    private static instance: SubareaApi;

    private constructor() {
        super();
    }

    public static getInstance(): SubareaApi {
        if (!SubareaApi.instance) {
            SubareaApi.instance = new SubareaApi();
        }
        return SubareaApi.instance;
    }

    public async getSubareas() {
        const api = this.getApi();
        const response = await api.get<Subarea[]>(`/subareas`);
        return response.data;
    }
}
