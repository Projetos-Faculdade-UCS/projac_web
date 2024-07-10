import nextConfig from "@/next.config";
import { cookies } from "next/headers";
import { CustomFetchProps, CustomResponse } from "./types";


/**
 * Singleton class to manage the API instance
 */
export abstract class BaseApiManager {
    private apiUrl = nextConfig?.env?.apiUrl;
    private apiKey = nextConfig?.env?.apiKey;
    private apiPrefix = nextConfig?.env?.apiKeyPrefix || '';
    private apiHeader = nextConfig?.env?.apiKeyHeader || '';
    private headers = {
        'Content-Type': 'application/json',
        [this.apiHeader]: `${this.apiPrefix}${this.apiKey}`,
    };

    protected constructor() {
        if (!this.apiUrl || !this.apiKey) {
            throw new Error("API URL or API Key is not defined in the next.config environment variables.");
        }
    }
    /**
     * Faz uma requisição GET para a API
     * @param url URL da API com search params já incluídos (ex: /users?name=John)
     * @param config Configurações da requisição
     * @template T Tipo do retorno da requisição
     * @returns Promise com o resultado da requisição
     */
    protected async get<T>(url: string, init?: CustomFetchProps){
        const { cache, ...config } = init || {};

        const resp = await fetch(
            `${this.apiUrl}${url}`,
            {
                method: "GET",
                headers: this.headers,
                cache: cache || "no-cache",
                ...config,
            }
        );

        return this.responseHandler<T>(resp) as Promise<{ status: number, data: T }>;
    }

    /**
     *  Faz uma requisição POST para a API
     * @param url URL da API
     * @param body Corpo da requisição
     * @param config Configurações da requisição
     * @returns Promise com o resultado da requisição
     * @template T Tipo do retorno da requisição
     */
    protected async post<T>(url: string, body: RequestInit | object, init?: Omit<CustomFetchProps, 'body'>){
        const csrf = cookies().get('csrftoken')?.value;

        const resp = await fetch(
            `${this.apiUrl}${url}`,
            {
                method: "POST",
                headers: {
                    ...this.headers,
                    "X-CSRF-Token": csrf || "",
                },
                body: JSON.stringify(body),
                ...init,
            }
        );
        
        return this.responseHandler<T>(resp);
    }


    /**
     * Faz uma requisição DELETE para a API
     * @param url URL da API
     * @param config Configurações da requisição
     * @returns Promise com o resultado da requisição
     * @template T Tipo do retorno da requisição
     */
    protected async delete(url: string, config?: CustomFetchProps){
        const resp = await fetch(
            `${this.apiUrl}${url}`,
            {
                method: "DELETE",
                headers: this.headers,
                ...config,
            }
        );

        if (resp.status === 204) {
            return { status: resp.status, data: null};
        }

    }

    private async responseHandler<T>(response: Response){
        const res = response as CustomResponse<T>; 

        if ([200, 201, 400].includes(res.status)) {
            const data = res.json();
            return { status: res.status, data: await data };
        }
        throw new Error(res.statusText);
    }

    // protected abstract put<T>(url: string, body: CustomFetchProps['body'], config: Omit<CustomFetchProps, 'body'>): Promise<T>;
    // protected abstract patch<T>(url: string, body: CustomFetchProps['body'], config: Omit<CustomFetchProps, 'body'>): Promise<T>;
    // protected abstract options<T>(url: string, config: CustomFetchProps): Promise<T>;
}
