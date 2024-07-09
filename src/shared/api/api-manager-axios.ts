import nextConfig from "@/next.config";
import axios, { AxiosInstance } from "axios";

/**
 * Singleton class to manage the API instance
 */
export abstract class BaseApiManager {
    private api: AxiosInstance;
    private apiUrl = nextConfig?.env?.apiUrl;
    private apiKey = nextConfig?.env?.apiKey;
    private apiPrefix = nextConfig?.env?.apiKeyPrefix || '';
    private apiHeader = nextConfig?.env?.apiKeyHeader || '';

    protected constructor() {
        if (!this.apiUrl || !this.apiKey) {
            throw new Error("API URL or API Key is not defined in the next.config environment variables.");
        }

        this.api = axios.create({
            baseURL: this.apiUrl,
            headers: {
                'Content-Type': 'application/json',
                [this.apiHeader]: `${this.apiPrefix}${this.apiKey}`,
            },
            timeout: 10000,
        });
        
    }

    protected getApi(): AxiosInstance {
        return this.api;
    }

    protected testApi() {
        this.api.post('/test');
    }
}
