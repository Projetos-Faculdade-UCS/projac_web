import nextConfig from "@/next.config";
import axios from "axios";
import { AxiosCacheInstance, setupCache } from 'axios-cache-interceptor';
import { customFileStorage } from "./fs-cache-store";

const ONE_MINUTE = 1000 * 60;
const CACHE_TIME = ONE_MINUTE * 15;

/**
 * Singleton class to manage the API instance
 */
export abstract class BaseApiManager {
    private api: AxiosCacheInstance;
    private apiUrl = nextConfig?.env?.apiUrl;
    private apiKey = nextConfig?.env?.apiKey;

    protected constructor() {
        if (!this.apiUrl || !this.apiKey) {
            throw new Error("API URL or API Key is not defined in the next.config environment variables.");
        }

        const instance = axios.create({
            baseURL: this.apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': this.apiKey,
            },
            timeout: 10000,
        });

        this.api = setupCache(instance, {
            storage: customFileStorage,
            methods: ['get'],
            headerInterpreter: (headers) => {
                return CACHE_TIME;
            }

        });
    }

    protected getApi(): AxiosCacheInstance {
        return this.api;
    }
}
