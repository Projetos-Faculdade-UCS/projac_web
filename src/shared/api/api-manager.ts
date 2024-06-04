import nextConfig from "@/next.config";
import axios, { AxiosInstance } from "axios";

/**
 * Singleton class to manage the API instance
 */
export abstract class BaseApiManager {
    private api: AxiosInstance;
    private apiUrl = nextConfig?.env?.apiUrl;
    private apiKey = nextConfig?.env?.apiKey;

    protected constructor() {
        this.api = axios.create({
            baseURL: this.apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': this.apiKey,
            },
            timeout: 10000,
        });
    }

    protected getApi(): AxiosInstance {
        return this.api;
    }
}